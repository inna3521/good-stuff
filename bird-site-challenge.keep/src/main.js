import '../css/style.css'
// require('./style.css')


if (process.env.NODE_ENV !== 'production') {
    require('file-loader!../index.html')
    // require('file-loader!../public/03.html-challenge-01.html')

}
