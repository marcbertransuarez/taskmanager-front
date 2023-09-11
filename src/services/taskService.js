import axios from "axios";

class TaskService {
    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_BACKEND_URL}/tasks`,
        });

        this.api.interceptors.request.use((config) => {
            const storedToken = localStorage.getItem("authToken");
            if (storedToken) {
              config.headers = { Authorization: `Bearer ${storedToken}` };
            }
            return config;
          });
    }

    getTasks() {
        return this.api.get("/").then(({ data }) => data).catch((err) => console.error(err));;
    }

    createTask(task) {
        return this.api.post("/", task).then(({ data }) => data).catch((err) => console.error(err));
    }

    updatedStateTask(taskId, newState) {
        return this.api.put(`/${taskId}`, { state: newState }).then(({ data }) => data).catch((err) => console.error(err));
    }

    deleteTask(taskId) {
        return this.api.delete(`/${taskId}`).then(({ data }) => data).catch((err) => console.error(err));
    }
}

const taskService = new TaskService();

export default taskService;