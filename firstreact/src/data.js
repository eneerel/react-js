
import './App.css';
import {UserCard} from './compunents/UserCard';
function App() {

  const users =[
    { name: "Naraa" , age: 15 , imageUrl:"https://media.istockphoto.com/id/1329622588/photo/portrait-beautiful-young-woman-with-clean-fresh-skin.jpg?b=1&s=170667a&w=0&k=20&c=mpVB0vaOZS3JR73oaVwfoouWC9jHm38dN5ddqd2V5Dk=" } ,
    { name: "Saraa" , age: 20 , imageUrl:"https://media.istockphoto.com/id/1369567653/photo/thoughtful-serious-african-american-teen-girl-face-portrait.jpg?b=1&s=170667a&w=0&k=20&c=BSJgtAV6TQ7lysuk5_s1lk6kUAZIjzgxZx6XY80oCNQ="  } ,
    { name: "Bold" , age: 25 , imageUrl:"https://media.istockphoto.com/id/1349257948/photo/portrait-of-african-american-girl-on-blue.jpg?b=1&s=170667a&w=0&k=20&c=W-aBAG9M7YwnVk3HKL2QuAPa619EPKXOkKkG7LqsTUg="  } ,
    { name: "Tsetsegee" , age: 19 , imageUrl:"https://images.unsplash.com/photo-1552954277-0c45bd503b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhdXRpZnVsJTIwZ2lybHN8ZW58MHx8MHx8&w=1000&q=80"  } ,
    { name: "Bata" , age: 12 , imageUrl:"https://images.unsplash.com/photo-1494354145959-25cb82edf23d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHw%3D&w=1000&q=80"  } ,
  ];
  let sumAge = users.reduce((prev, cur) => (prev += cur.age), 0);
  let avgAge = sumAge / users.length;
  

  return (
    <div>
    <h1>Average: {avgAge}</h1>
    {
      // users array-aar map guilgej card-uudaa uusgeh:
    users.map((user) => (
    <UserCard name={user.name} age={user.age}/>
    ))
    }
     </div>
  );
}
  

  

export default App;