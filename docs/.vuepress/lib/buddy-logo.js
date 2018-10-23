const books = {
  match: {
    'vue,react,jq,jquery,bootstrap,lodash,angular,moment,backbone/i'(who) {
      who = who.toLowerCase()
      who === 'angular' ? who = 'angular-icon' : 0
      who === 'backbone' ? who = 'backbone-icon' : 0
      who === 'jq' ? who = 'jquery' : 0
      who === 'moment' ? who = 'momentjs' : 0
      return `https://www.bootcdn.cn/assets/img/${who}.svg`
    },
    // 'koa/i'(who) {
    //   who = who.toLowerCase()
    //   return `https://github.com/koajs/koa/raw/master/docs/logo.png`
    // },
    'postgresql,mysql,redis,browsersync,gulp,nodejs,stylus,webpack,npm,yarn,centos,bash,archlinux,eslint,docker,lodash,vscode,express,pug,jade,raspberry-pi,babel,git,github,stackoverflow,php,nginx/i'(who) {
      who = who.toLowerCase()
      who === 'vscode' ? who = 'visual-studio-code' : 0
      return `https://cdn.svgporn.com/logos/${who}.svg`
    },
    'cpp'() {
      return `https://cdn.svgporn.com/logos/c%2B%2B.svg`;
    },
    'aliyun/i'(who) {
      who = who.toLowerCase()
      return 'https://cn.aliyun.com/favicon.ico'
    },
    'd2,d2admin,d2projects/i'() {
      return 'https://d2-projects.github.io/d2-admin-doc/logo@2x.png'
    },
    'socket.io'() {
      return 'https://cdn.svgporn.com/logos/socket.io.svg'
    },
    'elementui/i'() {
      return '/buddy-logos/elementui.svg'
    },
    'layui/i'() {
      return 'https://res.layui.com/static/images/layui/logo-2.png'
    }
  }
}

let hell = []
const makeHell = () => {
  let h = []
  for (let key in books.match) {
    let g = key.split('/')
    let i = g[0].split(',')
    h.push({ reg: new RegExp(i.length > 1 ? '('+i.join('|') +')' : i[0] , g[1]), make: books.match[key] })
  }
  hell = h
}
export default (who) => {
  // Be fast
  if (!hell.length) makeHell()
  let t = hell.find(({ reg }) => reg.test(who))
  return t ? t.make(who) : null
}