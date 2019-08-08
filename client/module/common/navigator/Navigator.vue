/*
 * @Author: xu.long 
 * @Date: 2019-07-20 17:20:50 
 * @Last Modified by: xu.long
 * @Last Modified time: 2019-08-08 15:45:42
 */

<template>
    <header class="navigator-container">
        <div class="logo-container">
            <img :src="logoUrl"/>
            <span>尤为YouWe</span>
        </div>
        <nav>
            <ul>
                <li><router-link to="/staticPage/home">首页</router-link></li>
                <li><router-link to="/about">关于我们</router-link></li>
                <li><router-link to="/staticPage/addRecord">加入我们</router-link></li>
                <li><router-link to="/advice">给点建议</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
  import logoPic from '../../../public/images/logo.png';

  export default {
    name: 'Navigator',
    data(){
      return {
        logoUrl: logoPic
      }
    }
  }
</script>

<style lang="scss">
    .navigator-container{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 6.4rem;
        width: 100vw;
        /*border-bottom: .1rem solid #000;*/
        box-sizing: border-box;
        background-color: #fff;
        .logo-container{
            display: flex;
            align-items: flex-end;
            img{
                width: 4.4rem;
                height: 4.4rem;
            }
            span{
                font-size: 2rem;
                margin-bottom: -5px;
            }
        }
        nav{
            ul{
                display: flex;
                padding: 0;
                justify-content: space-around;
                min-width: 30rem;
                margin: 0;
                li{
                    list-style: none;
                    a{
                        text-decoration: none;
                        color: #000;
                    }
                }
            }
        }
    }
</style>