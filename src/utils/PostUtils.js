import { restConnector } from "../Connector/Axios";

class PostUtils {
    fetchPostPagination() {
        return restConnector({
          url: `/search/all`,
          method: "GET"
        });
      }
}

export default new PostUtils();
