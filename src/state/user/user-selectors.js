export default {
  user: state => state.get("user"),
  username: state => state.getIn(["user", "username"])
};
