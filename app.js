import axios from "axios"; //axios kütüphanesini projemize ekledim

export default async function getData(user_id) {
  try {
    //Kullanıcı bilgileri aldım
    const userData = (
      await axios.get(`https://jsonplaceholder.typicode.com/users/${user_id}`)
    ).data;
    const userPosts = (
      await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${user_id}`
      )
    ).data;

    //Yeni bir nesne oluşturdum
    const newData = {
      user: userData,
      posts: userPosts,
    };

    //Oluşturduğumuz nesneyi yazdırdım
    console.log(newData);
  } catch (e) {
    //Veride herhangi bir hata durumunda göreceğimiz hata mesajı
    console.log("Veriler çekilirken bir hata oluştu!");
  }
}
