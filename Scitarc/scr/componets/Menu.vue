<template>
  <div class="menu-sidebar">
    <div class="sidebar-style">
      <div class="overlap">
        <div class="nav-side-icons">
          <div class="icon-bar">
            <div class="overlap">
              <div class="background">
                <div class="divider" />
              </div>
              <div class="logo">
                <div class="logo-bg">
                  <div class="div" />
                  <div class="group">
                    <div class="overlap-group">
                      <div class="overlap-group">
                        <img class="vector" alt="Vector" src="vector.svg" />
                        <img class="img" alt="Vector" src="image.svg" />
                        <img class="union" alt="Union" src="union.svg" />
                      </div>
                      <img class="vector-2" alt="Vector" src="vector-2.svg" />
                      <img class="vector-3" alt="Vector" src="vector-4.svg" />
                    </div>
                    <img class="vector-4" alt="Vector" src="vector-3.svg" />
                  </div>
                </div>
              </div>
              <div class="icon-copy">
                <ExitLogin class="iconly-two-tone-home" color="white" />
              </div>
              <div class="iconly-two-tone-home-wrapper">
                <Home class="iconly-two-tone-home" color="white" />
              </div>
              <div class="icon">
                <BookmarksFavoriteMinus class="iconly-two-tone-home" color="white" />
              </div>
              <div class="search-list-position-results-wrapper">
                <SearchListPositionResults class="iconly-two-tone-home" color="white" />
              </div>
              <div class="overlap-wrapper">
                <div class="home-wrapper">
                  <SearchTextLoupe class="search-text-loupe" color="#581DB6" />
                </div>
              </div>
              <div class="iconly-two-tone-bag-wrapper">
                <IconlyTwoToneBag />
              </div>
              <div class="icon-2">
                <div class="divider-2" />
                <div class="overlap-2">
                  <Profile class="home-instance" color="white" />
                  <Tranmautritam class="avatar-tranmautritam" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Activity class="activity-instance" color="white" />
      </div>
    </div>
    <div class="overlap-group-wrapper">
      <div class="overlap-3">
        <div class="group-2" />
        <SmallRight class="ui-icon-arrow-small" color="white" />
      </div>
    </div>
  </div>
</template>

<script>
import { Activity } from "./Activity";
import { BookmarksFavoriteMinus } from "./BookmarksFavoriteMinus";
import { ExitLogin } from "./ExitLogin";
import { Home } from "./Home";
import { IconlyTwoToneBag } from "./IconlyTwoToneBag";
import { Profile } from "./Profile";
import { SearchListPositionResults } from "./SearchListPositionResults";
import { SearchTextLoupe } from "./SearchTextLoupe";
import { SmallRight } from "./SmallRight";
import { Tranmautritam } from "./Tranmautritam";

export default {
  name: "MenuSidebar",
  components: {
    Activity,
    BookmarksFavoriteMinus,
    ExitLogin,
    Home,
    IconlyTwoToneBag,
    Profile,
    SearchListPositionResults,
    SearchTextLoupe,
    SmallRight,
    Tranmautritam,
  },
};
</script>

<style>
.menu-sidebar {
  height: 1024px;
  position: relative;
  width: 111px;
}

.menu-sidebar .sidebar-style {
  height: 1024px;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 79px;
}

.menu-sidebar .overlap {
  height: 1024px;
  position: relative;
  width: 80px;
}

.menu-sidebar .nav-side-icons {
  height: 1024px;
  left: 0;
  position: absolute;
  top: 0;
  width: 80px;
}

.menu-sidebar .icon-bar {
  height: 1024px;
}

.menu-sidebar .background {
  background: linear-gradient(180deg, rgb(88, 29, 182) 0%, rgb(38, 187, 251) 100%);
  height: 1024px;
  left: 0;
  position: absolute;
  top: 0;
  width: 80px;
}

.menu-sidebar .divider {
  background-color: var(--colordark-grey-neutralgreygrey-1);
  height: 1024px;
  left: 79px;
  position: relative;
  width: 1px;
}

.menu-sidebar .logo {
  height: 80px;
  left: 0;
  position: absolute;
  top: 0;
  width: 79px;
}

.menu-sidebar .logo-bg {
  height: 80px;
  overflow: hidden;
  position: relative;
}

.menu-sidebar .div {
  background-color: #ffffff;
  height: 1px;
  left: 0;
  opacity: 0.1;
  position: absolute;
  top: 79px;
  width: 80px;
}

.menu-sidebar .group {
  height: 20px;
  left: 10px;
  position: absolute;
  top: 30px;
  width: 59px;
}

.menu-sidebar .overlap-group {
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 55px;
}

.menu-sidebar .vector {
  height: 9px;
  left: 24px;
  position: absolute;
  top: 0;
  width: 16px;
}

.menu-sidebar .img {
  height: 11px;
  left: 0;
  position: absolute;
  top: 9px;
  width: 38px;
}

.menu-sidebar .union {
  height: 8px;
  left: 10px;
  position: absolute;
  top: 6px;
  width: 45px;
}

.menu-sidebar .vector-2 {
  height: 3px;
  left: 8px;
  position: absolute;
  top: 3px;
  width: 3px;
}

.menu-sidebar .vector-3 {
  height: 3px;
  left: 40px;
  position: absolute;
  top: 17px;
  width: 3px;
}

.menu-sidebar .vector-4 {
  height: 3px;
  left: 56px;
  position: absolute;
  top: 5px;
  width: 3px;
}

.menu-sidebar .icon-copy {
  height: 64px;
  left: 0;
  position: absolute;
  top: 863px;
  width: 80px;
}

.menu-sidebar .iconly-two-tone-home {
  height: 24px !important;
  left: 28px !important;
  position: absolute !important;
  top: 20px !important;
  width: 24px !important;
}

.menu-sidebar .iconly-two-tone-home-wrapper {
  height: 64px;
  left: 0;
  position: absolute;
  top: 799px;
  width: 80px;
}

.menu-sidebar .icon {
  height: 64px;
  left: 0;
  position: absolute;
  top: 292px;
  width: 80px;
}

.menu-sidebar .search-list-position-results-wrapper {
  height: 64px;
  left: 0;
  position: absolute;
  top: 228px;
  width: 80px;
}

.menu-sidebar .overlap-wrapper {
  height: 64px;
  left: 0;
  position: absolute;
  top: 100px;
  width: 80px;
}

.menu-sidebar .home-wrapper {
  background-color: #ffffff;
  border-radius: 16px;
  height: 64px;
  left: 8px;
  position: relative;
  width: 64px;
}

.menu-sidebar .search-text-loupe {
  height: 24px !important;
  left: 20px !important;
  position: absolute !important;
  top: 20px !important;
  width: 24px !important;
}

.menu-sidebar .iconly-two-tone-bag-wrapper {
  height: 64px;
  left: 0;
  position: absolute;
  top: 164px;
  width: 80px;
}

.menu-sidebar .icon-2 {
  height: 80px;
  left: 0;
  position: absolute;
  top: 944px;
  width: 80px;
}

.menu-sidebar .divider-2 {
  background-color: #ffffff;
  height: 1px;
  left: 0;
  opacity: 0.1;
  position: absolute;
  top: 0;
  width: 80px;
}

.menu-sidebar .overlap-2 {
  height: 40px;
  left: 20px;
  position: absolute;
  top: 20px;
  width: 40px;
}

.menu-sidebar .home-instance {
  height: 24px !important;
  left: 8px !important;
  position: absolute !important;
  top: 8px !important;
  width: 24px !important;
}

.menu-sidebar .avatar-tranmautritam {
  height: 40px !important;
  left: 0 !important;
  position: absolute !important;
  top: 0 !important;
  width: 40px !important;
}

.menu-sidebar .activity-instance {
  height: 24px !important;
  left: 28px !important;
  position: absolute !important;
  top: 184px !important;
  width: 24px !important;
}

.menu-sidebar .overlap-group-wrapper {
  height: 32px;
  left: 79px;
  position: absolute;
  top: 21px;
  width: 32px;
}

.menu-sidebar .overlap-3 {
  height: 32px;
  position: relative;
}

.menu-sidebar .group-2 {
  background-color: #5135c1;
  height: 32px;
  left: 0;
  position: absolute;
  top: 0;
  width: 32px;
}

.menu-sidebar .ui-icon-arrow-small {
  height: 24px !important;
  left: 4px !important;
  position: absolute !important;
  top: 4px !important;
  width: 24px !important;
}
</style>
