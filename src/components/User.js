 import PropTypes from "prop-types"

function User({name,surname,age,isLoggedIn,friends,address}) { // buradaki ifadeleri app komponentinde kullanmak için 
    // prop olarak gönderdik User(props) deseydik aşağıda süslüler arasında props.name şeklinde kullanabilridik
    return (
        <>
        <h1>{isLoggedIn ? `${name} ${surname} (${age})` : "Giriş Yapmadınız."} </h1>
        {address.title} {address.zip}
        <br/>

        {friends.map((friend) =>(<li><ul key={friend.id}>{friend.name} </ul></li>))}
        </>
    )
}

User.propTypes= {
    name:PropTypes.string.isRequired,      //PropTypes.oneOFTypes[birden çok tanımlanabilir]
    surname:PropTypes.string.isRequired,
    isLoggedIn:PropTypes.bool.isRequired,
    age:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
    friends:PropTypes.array.isRequired,
    address:PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }).isRequired,
} 
User.defaultProps ={
    isLoggedIn : false
} //değer girilmediyse false olsun defaultu
//Burada propun istenen veri tipini belirledik .isRequired ile zorunlu olmasını belirttik undefined geldi değer eğer doğru değilse

export default User 