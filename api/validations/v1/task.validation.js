const { Joi } = require("celebrate");
const { taskStatus } = require("../../config/vars");
module.exports = {
  // GET api/v1/tasks/getAllTasks
  getAllTasks: {
    query: Joi.object()
      .keys({
        sortBy: Joi.string().valid("id", "createdAt", "updatedAt").optional(),
        order: Joi.string().valid("ASC", "DESC").optional(),
        searchKey: Joi.string().valid("id", "title", "status").optional(),
        searchVal: Joi.string().optional(),
      })
      .optional(),
  },

  // POST api/v1/tasks/create
  createTaskForUser: {
    body: {
      userId: Joi.number().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      status: Joi.string()
        .valid(...taskStatus)
        .required(),
    },
  },
  // PUT api/v1/tasks/updateStatus
  updateTaskStatus: {
    body: {
      taskId: Joi.number().required(),
      status: Joi.string()
        .valid(...taskStatus)
        .required(),
    },
  },

  // PUT api/v1/tasks/updateTitle
  updateTaskTitle: {
    body: {
      taskId: Joi.number().required(),
      title: Joi.string().required(),
    },
  },

  // GET api/v1/tasks/fetchTask
  fetchTasks: {
    params: {
      taskId: Joi.number().required(),
    },
  },
};
