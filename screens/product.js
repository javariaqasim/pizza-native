import React, {useState} from 'react';
import {Text, View, ScrollView,Image,TouchableOpacity,ImageBackground} from 'react-native';
import styles from '../styling';

function Products({navigation}) {
  const [data, setData] = useState([
    {
      id: 1,
      title: 'Pizza',
      price: 1000,
      description:
        'pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot ..',
      category: "Fajita pizza ",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT45NlS9dQ40KzkGLTW5OXzZS_b23emjz9abA&usqp=CAU',
      rating: {
        rate: 3.9,
        count: 120,
      },
    },
    {
      id: 2,
      title: 'Pizza',
      price: 1000,
      description:
        'That did start in Italy. Specifically, baker Raffaele Esposito from Naples is often given credit for making the first such pizza pie.',
      category: "Fajita pizza ",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi23Ug8hUqAjIQSCpAITPZPmnsubBcKLHlqg&usqp=CAU',
      rating: {
        rate: 4.1,
        count: 259,
      },
    },
    {
      id: 3,
      title: 'Pizza',
      price: 1000,
      description:
        'Pizza can help you absorb the antioxidant Lycopene. Lycopene is found in tomatoes, which are used to make the base sauce for pizzas. Lycopene helps to lower blood pressure and bring down high cholesterol. Its also more easily absorbed from cooked tomatoes as opposed to fresh tomatoes.',
      category: "Fajita pizza ",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ_bU0HHv0byOYso-ysF-5zgtqajIz1qjfHA&usqp=CAU',
      rating: {
        rate: 4.7,
        count: 500,
      },
    },
    {
      id: 4,
      title: 'Pizza',
      price: 1000,
      description:
        'There is a reason pizza is so popular. Humans are drawn to foods that are fatty, sweet, rich and complex. Pizza has all of these components. Cheese is fatty, meat toppings tend to be rich and the sauce is sweet.',
      category: "Fajita pizza ",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDLrcjXCwhXtPNmAnzdo0faTdX3DahmB6Cw&usqp=CAU',
      rating: {
        rate: 2.1,
        count: 430,
      },
    },
    {
      id: 5,
      title:
        "Pizza",
      price: 1000,
      description:
        "What about nutrients? Pizza is a great source of nutrients in the American diet. It provides high percentages of the total daily intake of protein, fat, saturated fat, fibre, calcium and lycopene",
      category: 'Afghani pizza ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGeNwPM7xJj-5kKLnyMn05w9Xr17IEEoEdw&usqp=CAU',
      rating: {
        rate: 4.6,
        count: 400,
      },
    },
    {
      id: 6,
      title: 'Pizza',
      price: 1000,
      description:
        'Queen Margherita visited Naples and enjoyed their first slice of pizza. The queen fancied hers with mozzarella, tomatoes, and basil, and from there on out, this iconic combo has been called the Margherita pizza. This meal is also credited as the first pizza delivery!',
      category: 'Afghani pizza ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrlZ2iaorm5f0IyGROZRRefdYs-waa3Zst8g&usqp=CAU',
      rating: {
        rate: 3.9,
        count: 70,
      },
    },
    {
      id: 7,
      title: 'Pizza',
      price: 1000,
      description:
        "Pizza was first called pie when Italian immigrants arrived in the United States in the late 1800s. Pizza had similarities to a pie – with a crust, sliced triangle portions and its circular shape. Italian-Americans sold and popularized the pizzas, and the exotic dish picked up the English name “tomato pie”.",
      category: 'Afghani pizza ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBTTVfThryAgxsV2BEfS2M4aq0sdLeRmgz0Q&usqp=CAU',
      rating: {
        rate: 3,
        count: 400,
      },
    },
    {
      id: 8,
      title: 'Pizza',
      price: 1000,
      description:
        'You ll be shocked to know that the carb-fest that is pizza actually fills you with serotonin. This is partially because when youre craving pizza and that craving is satisfied, your brain produces serotonin. This is also because carbs are used heavily to make serotonin.',
      category: 'Afghani pizza ',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaN--1ahcg1OFTHGqLSbyYxmDGst1NsvaSBA&usqp=CAU',
      rating: {
        rate: 1.9,
        count: 100,
      },
    },
    {
      id: 9,
      title: 'Pizza',
      price: 1000,
      description:
        'Pizza can present some decent nutrition when served up in the right form, but like most other foods, you can easily overdo this junk food. If you enjoy pizza but eat too much of it, you can face some ugly side effects of pizza that could lead to serious damage to your health.',
      category: 'Cheese Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZ1iyPUDZrmZfd99rRistt6oOXSTws2vNUw&usqp=CAU',
      rating: {
        rate: 3.3,
        count: 203,
      },
    },
    {
      id: 10,
      title: 'Pizza',
      price: 1000,
      description:
        'All pizza dough starts with the same basic ingredients: flour, yeast, water, salt, and olive oil. Heres the breakdown of what I use in my homemade pizza crust recipe. The full printable recipe is below',
      category: 'Cheese Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQpGad-iYyahQeKOa38XLWbjAC_vzy6PuH9LV39E-7t_f3e91a65IJqLryVfn_cJCKu94&usqp=CAU',
      rating: {
        rate: 2.9,
        count: 470,
      },
    },
    {
      id: 11,
      title:
        'Pizza',
      price: 1000,
      description:
        'Pizza is an Italian dish that originated in Naples, Italy. There are many variations of the dish. However, there are two main types: American pizza and Italian pizza. The difference between American and Italian pizza is mainly in the doughs thickness and shapes, with American pizza being thicker and rectangular.',
      category: 'Cheese Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoS-HtwTwzPHfuOK7JmmZWPeAw4mXkccTsw&usqp=CAU',
      rating: {
        rate: 4.8,
        count: 319,
      },
    },
    {
      id: 12,
      title:
        'Pizza',
      price: 1000,
      description:
        "izza can be healthy if you make it the right way, but most take-out pizza and frozen pies have staggering amounts of sodium, fat, and calories, all of which can raise your risk of a heart attack",
      category: 'Cheese Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnfx8GMJcLyOOq4yN0E8pYYiv9e4NOMH0uow&usqp=CAU',
      rating: {
        rate: 4.8,
        count: 400,
      },
    },
    {
      id: 13,
      title: 'Pizza',
      price: 1000,
      description:
        'Eating refined grain products — such as ready-made meals like pizza — has been linked to weight gain. A study in 1,352 people found that people who consumed over 70 grams of ready-made products like pizza daily were more likely to have more belly fat than those who consumed under 70 grams per day ( 7 )',
      category: 'Cheese Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPqVU-YHvWBELs-Hzol3ui-z7WFIeaIu-GyA&usqp=CAU',
      rating: {
        rate: 2.9,
        count: 250,
      },
    },
    {
      id: 14,
      title:
        'Pizza',
      price: 1000,
      description:
       "'Pizza can be a healthy choice for many people. And yes, you can lose weight by eating pizza as long as youre eating it right! As surprising as it may sound, it's, in fact, true. You can have portion control, use selectively healthy vegetable toppings and make your pizza healthy.'",
      category: 'Cheese Pizza',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuxh3Sw2LKVv5lnDy1SGMjLki_4dnrXeIXyg&usqp=CAU',
      rating: {
        rate: 2.2,
        count: 140,
      },
    },
    {
      id: 15,
      title: "Pizza",
      price: 1000,
      description:
      'What flour is used for pizza? As we have seen, there are many types of flour on the market. But we can say that the most used flour for making pizza is wheat flour type “00”, with a medium-high W strength or a protein content from 11-12% up.',
      category: "Veggie Pizza.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtBJ5eqkZpxbXN5I5217KVPUqGxTGDKj90c2M6DtJcczKYSXlP8jrEEqd-5XRS1_Xxfo&usqp=CAU',
      rating: {
        rate: 2.6,
        count: 235,
      },
    },
    {
      id: 16,
      title:
        "Pizza",
      price: 1000,
      description:
        'Due to the amount of starches in traditional pizza, it takes about 6-8 hours to digest. So if you eat pizza for lunch, that heaviness can linger in your stomach for the rest of the day, often leading to gas and pain. Pizza is supposed to be comfort food, but it tends to do the opposite',
      category: "Veggie Pizza.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdrFSs3ohRVZ55hJr12M3liqVglO1w7dobgfeH3gBFu9e6loO00etHdBIs_vg1FSSzuaw&usqp=CAU',
      rating: {
        rate: 2.9,
        count: 340,
      },
    },
    {
      id: 17,
      title: 'Pizza',
      price: 1000,
      description:
        "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot .",
      category: "Veggie Pizza.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZbl13tMiyORkECv0hpCxOtS0zP6wb4p3URA&usqp=CAU',
      rating: {
        rate: 3.8,
        count: 679,
      },
    },
    {
      id: 18,
      title: "Pizza",
      price: 1000,
      description:
        'Fibrous foods such as whole grains are helpful in expelling waste after a junk food meal. Oatmeal and banana smoothie, quinoa with vegetables and vegetable barley soup can be good options to deal with your junk food binge. Yogurt helps in restoring balance of good bacteria in the body after a junk food binge.',
      category: "Veggie Pizza.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuFqEh34A5CZjOR5KZPkQvkS6Krb1092geg&usqp=CAU',
      rating: {
        rate: 4.7,
        count: 130,
      },
    },
    {
      id: 19,
      title: "Pizza",
      price: 1000,
      description:
        'Compared to burgers, pizzas have higher amounts of calories, carbs, saturated fats, and sodium. But also reasonable amounts of protein, iron, calcium, and other minerals and vitamins. Burgers have higher amounts of cholesterol and sugars compared to pizzas. Burgers also have higher protein and calcium content.',
      category: "Veggie Pizza.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTap3ZJxj-19_pwGksDPADGd3TaBeuIAM97wg&usqp=CAU',
      rating: {
        rate: 4.5,
        count: 146,
      },
    },
    {
      id: 20,
      title: 'Pizza',
      price: 1000,
      description:
        'Use whole-wheat flour and/or the flour of millets along with refined flour. Make smaller pizzas, eat fewer slices, drink plenty of water, and stay physically active after eating.',
      category: "Veggie Pizza.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ71jPznrOvhRHXAP3YZQdt-FpUDaLLNdz7-A&usqp=CAU',
      rating: {
        rate: 3.6,
        count: 145,
      },
    },
  ]);
  return (
    <>
           <ImageBackground
    source={{
      uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ddO7GVFosmUtLnQS123fyu445-xOspKmsw&usqp=CAU',
    }}>
      <ScrollView>
      <View style={[styles.h100]}>
        <View style={styles.p2}>
          <Text style={[styles.fs1, styles.textPrimary]}>Products</Text>
        </View>
        <View>
            <View>
              {data &&
                data.map((x, i) => (
                  <TouchableOpacity
                  onPress={()=>{
                    navigation.navigate('SingleProduct',x)
                  }}
                    style={[
                      styles.bgBlack,
                      styles.p2,
                      styles.m1,
                      styles.rounded,
                      styles.shadow1,
                    ]}
                    key={i}>
                        <Image style={{width:"100%",height:250}} source={{uri:x.image}} />
                    <Text style={[styles.fs4,styles.m1]}>{x.title}</Text>
                    <Text style={[styles.fs2,styles.m1,styles.textWhite]}>Rs: {x.price}/-</Text>
                  </TouchableOpacity>
                ))}
            </View>
         
        </View>
      </View>
      </ScrollView>
      </ImageBackground>
    </>
  );
}
export default Products;
