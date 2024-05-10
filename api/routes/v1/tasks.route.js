const express = require("express");
const router = express.Router();
const { celebrate: validate } = require("celebrate");
const controller = require("../../controllers/tasks.controller");
const { authorize } = require("../../middlewares/auth");
const {
  createTaskForUser,
  updateTaskStatus,
  updateTaskTitle,
  fetchTasks,
  getAllTasks,
} = require("../../validations/v1/task.validation");

router
  .route("/getAllTasks")
  /**
   * @api {GET} api/v1/tasks/getTask
   * @apiDescription Fetch all tasks
   * @apiVersion 1.0.0
   * @apiName fetchAllTasks
   * @apiGroup Tasks
   * @apiPermission admin, agent
   *
   * @apiSuccess {Object} Status, message, data
   */
  .get(
    validate(getAllTasks, { allowUnknown: false }),
    authorize(),
    controller.listAllTasks
  );

router
  .route("/fetchTask/:taskId")
  /**
   * @api {GET} api/v1/tasks/fetchTask/:taskId
   * @apiDescription Fetch a tasks from id
   * @apiVersion 1.0.0
   * @apiName fetchTasks
   * @apiGroup Tasks
   * @apiPermission admin, agent
   *
   * @apiSuccess {Object} Status, message, data
   */
  .get(
    validate(fetchTasks, { allowUnknown: false }),
    authorize(),
    controller.fetchTask
  );

router
  .route("/create")
  /**
   * @api {POST} api/v1/tasks/create
   * @apiDescription Create a new task for a user
   * @apiVersion 1.0.0
   * @apiName createTask
   * @apiGroup Tasks
   * @apiPermission admin, agent
   *
   * @apiSuccess {Object} Status, message, data
   */
  .post(
    validate(createTaskForUser, { allowUnknown: false }),
    authorize(),
    controller.createTaskForUser
  );

router
  .route("/updateStatus")
  /**
   * @api {PUT} api/v1/tasks/updateStatus
   * @apiDescription Update a task's status
   * @apiVersion 1.0.0
   * @apiName updateTaskStatus
   * @apiGroup Tasks
   * @apiPermission admin, agent
   *
   * @apiSuccess {Object} Status, message, data
   */
  .put(
    validate(updateTaskStatus, { allowUnknown: false }),
    authorize(),
    controller.updateTaskStatus
  );

router
  .route("/updateTitle")
  /**
   * @api {PUT} api/v1/tasks/updateTitle
   * @apiDescription Update a task's title
   * @apiVersion 1.0.0
   * @apiName updateTaskTitle
   * @apiGroup Tasks
   * @apiPermission admin, agent
   *
   * @apiSuccess {Object} Status, message, data
   */
  .put(
    validate(updateTaskTitle, { allowUnknown: false }),
    authorize(),
    controller.updateTaskTitle
  );

module.exports = router;
