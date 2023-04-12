//STEP 1
//let favmovies = ["Point Break", "Surf Ninjas", "Airborne", "Roadhouse", "North Shore"];
//console.log(favmovies[1]);
//STEP 2
//let movies = new Array(5);
//movies[0] = "Point Break";
//movies[1] = "Surf Ninjas";
//movies[2] = "Airborne";
//movies[3] = "Roadhouse";
//movies[4] = "North Shore";
//console.log(movies[0]);
//STEP 3
//movies.splice(2, 0, "Lethal Weapon");
//console.log(movies);
//STEP 4
/* let movies = [];
movies[0] = "Point Break";
movies[1] = "Surf Ninjas";
movies[2] = "Airborne";
movies[3] = "Roadhouse";
movies[4] = "North Shore";
delete movies[0];
console.log(movies); */
//STEP 5
/* let movies = [];
movies[0] = "Point Break";
movies[1] = "Surf Ninjas";
movies[2] = "Airborne";
movies[3] = "Roadhouse";
movies[4] = "North Shore";
movies[5] = "Sandlot";
movies[6] = "Crocodile Dundee";
for(let i in movies){
    console.log(movies[i]);
} */
//STEP 6
/* let movies = [];
movies[0] = "Point Break";
movies[1] = "Surf Ninjas";
movies[2] = "Airborne";
movies[3] = "Roadhouse";
movies[4] = "North Shore";
movies[5] = "Sandlot";
movies[6] = "Crocodile Dundee";
for(let i of movies){
    console.log(i);
} */
//STEP 7
/* let movies = [];
movies[0] = "Point Break";
movies[1] = "Surf Ninjas";
movies[2] = "Airborne";
movies[3] = "Roadhouse";
movies[4] = "North Shore";
movies[5] = "Sandlot";
movies[6] = "Crocodile Dundee";
movies.sort();
for(let i of movies){
    console.log(i);
} */
//STEP 8
//really not sure if you wanted the ... included or that was to signify the continuation of the list
//I went for keeping it exactly as displayed
/* let movies = [];
let string = "";
movies[0] = "Point Break";
movies[1] = "Surf Ninjas";
movies[2] = "Airborne";
movies[3] = "Roadhouse";
movies[4] = "North Shore";
movies[5] = "Big Trouble in Little China";
movies[6] = "Crocodile Dundee";

let leastFavMovies = [];
leastFavMovies[0] = "Tin Cup";
leastFavMovies[1] = "Mac and Me";
leastFavMovies[2] = "Crocodile Dundee 2";
string += 'Movies I like:\n\n'
for(var i = 0; i < 3; i++){
    string += `${movies[i]} \n`;
}
string += '... \n\n';
string += 'Movies I regret watching (but not really):\n\n';
for(let ii of leastFavMovies){
    string += `${ii} \n`;
}
string += '...';
console.log(string); */
//STEP 9
//did you want reverse alphabetical or reverse by index? I chose reverse alphabetical
/* let movies = [];
movies[0] = "Point Break";
movies[1] = "Surf Ninjas";
movies[2] = "Airborne";
movies[3] = "Roadhouse";
movies[4] = "North Shore";
movies[5] = "Big Trouble in Little China";
movies[6] = "Crocodile Dundee";

let leastFavMovies = [];
leastFavMovies[0] = "Tin Cup";
leastFavMovies[1] = "Mac and Me";
leastFavMovies[2] = "Crocodile Dundee 2";
let moviemerge = movies.concat(leastFavMovies);
moviemerge.sort().reverse();
console.log(moviemerge); */
//STEP 10
//do you want the sorting before pop or not? since I'm copying from step 9...ill assume not.
/* let movies = [];
movies[0] = "Point Break";
movies[1] = "Surf Ninjas";
movies[2] = "Airborne";
movies[3] = "Roadhouse";
movies[4] = "North Shore";
movies[5] = "Big Trouble in Little China";
movies[6] = "Crocodile Dundee";

let leastFavMovies = [];
leastFavMovies[0] = "Tin Cup";
leastFavMovies[1] = "Mac and Me";
leastFavMovies[2] = "Crocodile Dundee 2";
let moviemerge = movies.concat(leastFavMovies);
let lastMovie = moviemerge.pop();
console.log(lastMovie); */
//STEP 11
/* let movies = [];
movies[0] = "Point Break";
movies[1] = "Surf Ninjas";
movies[2] = "Airborne";
movies[3] = "Roadhouse";
movies[4] = "North Shore";
movies[5] = "Big Trouble in Little China";
movies[6] = "Crocodile Dundee";

let leastFavMovies = [];
leastFavMovies[0] = "Tin Cup";
leastFavMovies[1] = "Mac and Me";
leastFavMovies[2] = "Crocodile Dundee 2";
let moviemerge = movies.concat(leastFavMovies);
console.log(moviemerge.shift()); */
//STEP 12
/* let movies = [];
movies[0] = "Point Break";
movies[1] = "Surf Ninjas";
movies[2] = "Airborne";
movies[3] = "Roadhouse";
movies[4] = "North Shore";
movies[5] = "Big Trouble in Little China";
movies[6] = "Crocodile Dundee";
let leastFavMovies = [];
leastFavMovies[0] = "Tin Cup";
leastFavMovies[1] = "Mac and Me";
leastFavMovies[2] = "Crocodile Dundee 2";
for(let i = 0; i < leastFavMovies.length; i++){
    leastFavMovies[i] = movies[i];
}
console.log(leastFavMovies); */
//STEP 13
/* let movies = [["North Shore", 1], ["Point Break", 2], ["Big Trouble in Little China", 3], ["Roadhouse", 4], ["Surf Ninjas", 5]];
let movieTitles = [];
movieTitles = movies.filter(movie => typeof(movie[0]) === "string").map(movie => movie[0]);
console.log(movieTitles); */
//STEP 14
/* let empArr = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
let empStr = '';
let showEmployee = function (args) {
    console.log(args);
    empStr += `Employees:\n`
    for(let i of args){
        empStr += `${i}\n`;
    }
    console.log(empStr);
};
showEmployee(empArr); */
//STEP 15
/* let data = [58, '', 'abcd', true, null, false, 0];
let trueArr = [];
function filterData(data) {
    data.filter(function(value) {
    if(value){
        trueArr.push(value);
    }
  });
  console.log(trueArr);
}
filterData(data); */
//STEP 16
/* let randomArr = ['point break', 'airborne', 'roadhouse', 'crocodile dundee', 'big trouble in little china', 'surf ninjas', 'north shore'];
let randomElement = randomArr[Math.floor(Math.random() * randomArr.length)];
console.log(randomElement); */
//STEP 17
/* let numArr = [1,2,-10,4,5,73,7,192,9,10];
function getBigNumber(data) {
  const maxNum = Math.max(...data);
  console.log(maxNum);
}
getBigNumber(numArr); */