
function getDrink(){
    const url = (`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let drink = data.drinks[0].strDrink
      document.querySelector('h1').innerText = drink
      console.log(data, 'drinkdata')
      console.log(data.drinks[0].strDrink, 'drink')
      document.querySelector('h2').innerText = data.drinks[0].strInstructions
      document.getElementById('1').innerText = data.drinks[0].strIngredient1
      document.getElementById('2').innerText = data.drinks[0].strIngredient2
      document.getElementById('3').innerText = data.drinks[0].strIngredient3
      document.getElementById('4').innerText = data.drinks[0].strIngredient4
      document.getElementById('5').innerText = data.drinks[0].strIngredient5

      
        function getGif(){
            let drink = document.querySelector('h1').innerText
            const url = (`https://api.giphy.com/v1/gifs/search?api_key=iOtEOYECnXvbGRBhYAEpepCTLP8VsfVO&q=${drink}&limit=25&offset=0&rating=g&lang=en`)
            fetch(url)
            .then(res => res.json()) // parse response as JSON
            .then(data => {
              document.querySelector('img').src = data.data[0].images.fixed_height.url
              console.log(data, 'gif data')
              console.log(data.data[0].images.fixed_height.url)
            
            //   console.log(data.primaryImage, 'img')
              // if (data.primaryImage === '' || data.primaryImage === null){
              //       // const randomYe = function(){ 
              //       //     let yeAss = ['img/ye.webp', 'img/ye1.png', 'img/ye2.jpeg', 'img/ye3.jpg']
              //       // console.log(Math.floor(Math.random()), 'math')
              //       // document.querySelector('img').src = yeAss[Math.random() * (1 - 4) + 1]}
              //       document.querySelector('img').src = 'img/ye2.jpeg'
              //   //    randomYe
              //       return
                
              // }
            })
            .catch(err => {
                console.log(`error ${err}`)
            });
    }
    getGif()
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
getDrink()
