const Sequelize = require("sequelize");
const { Op } = Sequelize;
const httpStatus = require("http-status");
const { Users, Tasks } = require("../models");
const APIError = require("../utils/APIErrors");

exports.listAllTasks = async (req, res, next) => {
  try {
    const { sortBy, order, searchKey, searchVal } = req.query;
    const tasks = await Tasks.findAll({
      include: [
        {
          model: Users,
          required: true,
        },
      ],
      ...(searchKey &&
        searchVal && {
          where: {
            [searchKey]:
              searchKey == "id"
                ? searchVal
                : {
                    [Op.like]: `%${searchVal}%`,
                  },
          },
        }),
      ...(sortBy && order && { order: [[sortBy, order]] }),
    });
    return res.json({
      status: 200,
      message: "Tasks fetched successfully",
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};

exports.fetchTask = async (req, res, next) => {
  try {
    const task = await Tasks.findOne({
      where: {
        id: req.params.taskId,
      },
      include: Users,
    });
    return res.json({
      status: 200,
      message: "Task with Id fetched successfully",
      data: task || {},
    });
  } catch (error) {
    next(error);
  }
};

exports.createTaskForUser = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const user = Users.findOne({
      where: {
        id: userId,
        archived: false,
      },
    });

    if (!user) {
      throw new APIError({
        code: httpStatus.NOT_FOUND,
        message:
          "User not found in system, please check the user or create a new user",
      });
    }

    const task = await Tasks.create(req.body);
    return res.json({
      status: 200,
      message: "Task created successfully",
      data: task,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateTaskStatus = async (req, res, next) => {
  try {
    const { taskId, status } = req.body;
    const task = Tasks.findOne({
      where: {
        id: taskId,
        archived: false,
      },
    });

    if (!task) {
      throw new APIError({
        code: httpStatus.NOT_FOUND,
        message: "task not found in system, please contact check the task ID",
      });
    }

    await Tasks.update(
      { status },
      {
        where: {
          id: taskId,
        },
      }
    );
    return res.json({
      status: 200,
      message: `task status updated successfully to ${status}`,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateTaskTitle = async (req, res, next) => {
  try {
    const { taskId, title } = req.body;
    const task = Tasks.findOne({
      where: {
        id: taskId,
        archived: false,
      },
    });

    if (!task) {
      throw new APIError({
        code: httpStatus.NOT_FOUND,
        message: "task not found in system, please contact check the task ID",
      });
    }

    await Tasks.update(
      { title },
      {
        where: {
          id: taskId,
        },
      }
    );
    return res.json({
      status: 200,
      message: `task title updated successfully to ${title}`,
    });
  } catch (error) {
    next(error);
  }
};
