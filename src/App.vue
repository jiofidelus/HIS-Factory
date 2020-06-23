<template>
  <div id="app" class="match-parent">
   <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div> -->
  <router-view/>
  </div>
</template>

<style lang="scss">

@import url('./assets/styles/_layout.scss');
@font-face {
  font-family: 'segoe ui';
  src: url('./assets/Segoe UI.ttf');
}


*{
  box-sizing: border-box;
  font-family: 'segoe ui';
}
html, body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  //font-family: 'Roboto', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

.match-parent{
  width: 100%;
  height: 100%;
}
.text-center{text-align: center;}
.font-600{font-weight: 600;}
.font-bold{font-weight: bold;}

/* #nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */

.x-badge{
  display: inline-block;
  margin-left: 8px;
  background-color: inherit;
  color: inherit;
  padding: 3px 6px;
  font-size: 10px;
  border-radius: 5px;
  font-weight: bold;
}
.x-btn-link, .x-btn{
  text-decoration: none;
  padding: 10px 18px;
  font-size: 11px;
  color: black;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    background-color: #eee;
  }
}
.x-btn{
  border: none;
}


// REMOVE LATER
form.x-form{
  width: 100%;
  .x-form-group{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    &>label{
      margin-bottom: 5px;
      font-weight: 600;
      font-size: 0.8em;
      letter-spacing: 1.5px;
    }
    &>.x-input{
      border: 1px solid #ccc;
      display: flex;
      height: 35px;
      align-items: center;
      border-radius: 5px;
      &>.x-input__icon-left, .x-input__icon-right{
        display: inline-block;
        margin-left: 5px;
        cursor: pointer;
        
        
      }
      &>.x-input__icon-right{
        margin-right: 5px;
      }
      &>input{
        width: 100%;
        height: 70%;
        border: none;
        margin: 30px 5px;
        background-color: transparent;
        outline: none;
      }
    }
  }
}

.form-container{
    width: 400px;
    padding: 25px;
    border: 1px solid #ddd;
    box-shadow: 0 1px 2px #ddd;
    background-color: #fff;
    //border-radius: 8px;

}

//// ANIMATIONS TRANSITIONS

.scale-enter-active{
    animation: scaleAnim 0.5s cubic-bezier(0.23, 1, 0.320, 1);
    transform-origin: center ;
}
@keyframes scaleAnim {
    0%{
        opacity: 0;
        transform: scale(1.2);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
}
.fade-enter-active{
  animation: fadeAnim 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}
@keyframes fadeAnim {
    0%{
        opacity: 0;
        
    }
    100%{
        opacity: 1;
        
    }
}

// CONTROLS THEME

.highlight-theme{
  background: transparent;
  color: crimson;
  outline-color: crimson;
  transition: all 0.3s linear;

  &:hover{
    background-color: #eee;
  }
}
.blue-highlight-theme{
  background: transparent;
  color: royalblue;
  outline-color: royalblue;
  transition: all 0.3s linear;
  &:hover{
    background-color: #eee;
  }
}
</style>
