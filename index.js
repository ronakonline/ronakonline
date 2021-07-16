const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const readme = `\
# Hi there! <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Hi.gif" width="29px">




### <img src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/Developer.gif" width="45px"> About Me:
- 🏦 I'm a full stack web developer from India.
      <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="30">
- 💻 I use daily **.js**, **.php**, **.sql**
- 👯 We can connect to play some games of Chess ♟

<p align="center">
      <img src="https://www.vectorlogo.zone/logos/java/java-icon.svg" alt="java" width="65" height="65"/> 
      <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="python" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg" alt="spring" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="docker" width="85" height="70"/> 
      <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="kubernetes" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/android/android-icon.svg" alt="android" width="55" height="55"/>
      <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="GIT" width="55" height="55"/> 
      <img src="https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg" alt="IPYNB" width="55" height="55"/> 
      <img src="https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" alt="azure" width="55" height="55"/> 
      <img src="https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg" alt="mysql" width="110" height="75"/> 
</p>

---
### <img src='https://media1.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif?cid=ecf05e47x2g034i9pzwtzzsd3xgg2w9nr94t4tflbbgo3008&rid=giphy.gif' width='25px'> My Github Stats:
![Ronak's github stats](https://github-readme-stats.vercel.app/api?username=ronakonline&show_icons=true&title_color=ffc857&icon_color=8ac926&text_color=daf7dc&bg_color=151515&hide=["stars"])
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=ronakonline&layout=compact&text_color=daf7dc&bg_color=151515&hide=html)](https://github.com/anuraghazra/github-readme-stats)

<!--START_SECTION:waka-->

<!--END_SECTION:waka-->

⏳ **Year Progress** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % as on ⏰ ${new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()+'.'}



---

### <img alt="GIF" src="https://github.com/TheDudeThatCode/TheDudeThatCode/blob/master/Assets/hmm.gif" width="20vw" /> A Famous Fact/Quote:
<a href="https://github.com/marketplace/actions/quote-readme">
<!--STARTS_HERE_QUOTE_README-->
<i>❝IMDb is one of the oldest websites on the internet, and began on Usenet in 1990 as a list of “actresses with beautiful eyes.”❞</i>
<!--ENDS_HERE_QUOTE_README-->
</a>

---

### <img align ='center' src='https://media2.giphy.com/media/UQDSBzfyiBKvgFcSTw/giphy.gif?cid=ecf05e47p3cd513axbek3f56ti3jzizq8hincw20jauyyfyw&rid=giphy.gif' width ='29px'> Here's some humor for you:
<img src="https://readme-jokes.vercel.app/api" alt="Error fetching resource, Refresh again to view Jokes Card" />
`
console.log(readme)
