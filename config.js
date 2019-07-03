module.exports = {
  site: 'bermuda-terrace',
  meta: {
    title: 'Bermuda Terrace',
    email: 'david+bh-bermuda-terrace@rerainc.com',
    domain: 'bermuda-terrace.burbhouse.com',
    logo: '/images/logo.png'
  },
  contentful: {
    spaceId: '058w1bxr0vro',
    accessToken: 'dybIX1KgZniFLN33b6Gv8O6Z0X6f74IFLpKfGFVbs_Y',
    host: process.env.CONTENTFUL_HOST
  },
  repositories: {
    site: {
      https: 'github.com/burbhouse/bermuda-terrace.git',
      ssh: 'github.com:burbhouse/bermuda-terrace.git',
    },
    core: 'github.com/burbhouse/core.git#master'
  }
}
