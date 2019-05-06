<template>
    <div class="timeline">
        <h1>文档时间轴</h1>
        <div class="cards">
            <section class="card" v-for="(log, index) in changeLogs">
                <header class="card__header">
                    <div class="header__number">
                        <span>{{index + 1}}</span>
                    </div>
                    <h2 class="header__title">
                        <span class="title__date">{{log.date}}</span>
                        <span class="title__sub">{{log.effect}}</span>
                    </h2>
                </header>
                <ul class="card__article">
                    <li v-for="(des, key) in log.descriptions" v-html="des"></li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            changeLogs: [
                {
                    date: "2019年5月4日",
                    effect: "发布",
                    descriptions: [
                        "此站点参考 <a href='https://docs.shanyuhai.top/' target='_blank'>飞跃高山与大洋的鱼</a>(<a href='https://github.com/shanyuhai123' target='_blank'>GitHub</a>)<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' x='0px' y='0px' viewBox='0 0 100 100' width='15' height='15' class='icon outbound'><path fill='currentColor' d='M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z'></path> <polygon fill='currentColor' points='45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9'></polygon></svg>，在此感谢提供的思路和内容",
                        "此站点今日发布， <a href='https://github.com/xiaoyouyu/-' target='_blank'>源码地址</a><svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' x='0px' y='0px' viewBox='0 0 100 100' width='15' height='15' class='icon outbound'><path fill='currentColor' d='M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z'></path> <polygon fill='currentColor' points='45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9'></polygon></svg>",
                        "<span class='dev'>此时间轴功能有待完善！</span>"
                    ]
                }
            ]
        };
    }
};
</script>

<style lang="stylus" scoped>
$screen-width = 425px;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 20px;
}

h2 {
    border-bottom: none;
}

.cards {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    height: 100%;

    @media (min-width: $screen-width) {
        &::after {
            z-index: 9;
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            border-left: 1px solid rgba(200, 200, 200, 0.5);
        }
    }
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;

    &:nth-child(4n) {
        --bg-color: #10aec2;
    }

    &:nth-child(4n+1) {
        --bg-color: #fbc82f;
    }

    &:nth-child(4n+2) {
        --bg-color: #74759b;
    }

    &:nth-child(4n+3) {
        --bg-color: #346c9c;
    }

    width: 45%;
    --bg-color: #10aec2;

    &:nth-child(odd) {
        align-self: flex-start;

        .card__header {
            @media (min-width: $screen-width) {
                &::before {
                    z-index: 10;
                    position: absolute;
                    left: calc(111.11% - 2.5px);
                    content: '';
                    width: 10px;
                    height: 10px;
                    border-radius: 10px;
                    background-color: #bdbdbd;
                    box-shadow: 0 0 2px 6px #fff;
                }
            }

            &::after {
                position: absolute;
                left: 100%;
                content: '';
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 0 10px 18px;
                border-color: transparent transparent transparent var(--bg-color);
            }
        }
    }

    &:nth-child(even) {
        align-self: flex-end;

        .card__header {
            @media (min-width: $screen-width) {
                &::before {
                    z-index: 10;
                    position: absolute;
                    right: calc(111.11% - 5px);
                    content: '';
                    width: 10px;
                    height: 10px;
                    border-radius: 10px;
                    background-color: #bdbdbd;
                    box-shadow: 0 0 2px 6px #fff;
                }
            }

            &::after {
                position: absolute;
                right: 100%;
                content: '';
                width: 0;
                height: 0;
                border-style: solid;
                border-width: 10px 18px 10px 0;
                border-color: transparent var(--bg-color) transparent transparent;
            }
        }
    }

    .card__header {
        display: flex;
        align-items: center;
        width: 100%;
        color: #fff;
        background-color: var(--bg-color);
        overflow: hidden;

        .header__number {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 20px;
            padding: 6px 14px;
            font-size: 2rem;
            background-color: rgba(0, 0, 0, 0.17);
        }

        .header__title {
            display: flex;
            margin-left: 10px;
            flex-direction: column;
            font-size: 1rem;

            .title__sub {
                padding-top: 6px;
                font-size: 1.2rem;
            }
        }
    }

    .card__article {
        width: 100%;
        background-color: #fff;
        border: 1px solid rgba(200, 200, 200 0.5);
        border-top: none;
        list-style-type: decimal;
        padding: 0.3rem 0;
        padding-left: 2em;
        overflow: auto;
    }
}

@media (max-width: $screen-width) {
    .card {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>
<style lang="stylus" >
.card__article .dev {
    color: $development;
}
</style>
