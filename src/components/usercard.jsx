// write the component code here

export default function UserCard(){
    let profile_photo="https://i.pinimg.com/474x/73/cd/09/73cd09f43b4ca5b2d56c152a79ac5c60.jpg";
    let name="vedant";
    let mail="ved@gmail.com";
    let num=984230948;
    let address="hjdbhb";
return(
    <>
    <div style={{border: "1px solid pink"}}>
        <h1>{name}</h1>
        <img src={profile_photo} alt="" style={{height:250, width:250}}/>
        <h3>{mail}</h3>
        <h3>{num}</h3>
        <p>{address}</p>
    
        
    </div>
    </>
)
}

