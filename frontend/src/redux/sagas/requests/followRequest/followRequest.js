import axios from "axios";

export function requestFollow(action) {
    return axios.request({
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${action.token}`,
          },
          method: "post",
          data: JSON.stringify({id: action.id}),
          url: "http://localhost:8080/api/user/follow"
    });
}