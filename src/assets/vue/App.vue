<template>
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <router-link
          className="navbar-brand"
          to="/home"
      >
        App
      </router-link>
      <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"/>
      </button>
      <div
          id="navbarNav"
          className="collapse navbar-collapse"
      >
        <ul className="navbar-nav">
          <router-link
              className="nav-item"
              tag="li"
              to="/home"
              active-class="active"
          >
            <a className="nav-link">Home</a>
          </router-link>
          <router-link
              className="nav-item"
              tag="li"
              to="/posts"
              active-class="active"
          >
            <a className="nav-link">Posts</a>
          </router-link>
          <li
              v-if="isAuthenticated"
              className="nav-item"
          >
            <a
                className="nav-link"
                href="/api/security/logout"
            >Logout</a>
          </li>
        </ul>
      </div>
    </nav>

    <router-view/>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  computed: {
    isAuthenticated() {
      return this.$store.getters["security/isAuthenticated"]
    },
  },
  created() {
    let isAuthenticated = JSON.parse(this.$parent.$el.attributes["data-is-authenticated"].value),
        user = JSON.parse(this.$parent.$el.attributes["data-user"].value);
    let payload = {isAuthenticated: isAuthenticated, user: user};
    this.$store.dispatch("security/onRefresh", payload);
    axios.interceptors.response.use(undefined, (err) => {
      return new Promise(() => {
        if (err.response.status === 401) {
          this.$router.push({path: "/login"})
        } else if (err.response.status === 500) {
          document.open();
          document.write(err.response.data);
          document.close();
        }
        throw err;
      });
    });
  },
}
</script>