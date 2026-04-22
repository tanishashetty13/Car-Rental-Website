import bmw from "../assets/cars/bmw.png";
import audi from "../assets/cars/audi.jpg";
import mercedes from "../assets/cars/Mercedes.png";
import toyota from "../assets/cars/ToyotaCorolla.jpg";
import hyundai from "../assets/cars/hyundai.avif";
import kia from "../assets/cars/kia.jpg";
import honda from "../assets/cars/Honda.jpg";
import tata from "../assets/cars/tata.jpg";
import mahindra from "../assets/cars/mahindra.jpg";
import mg from "../assets/cars/mg.jpg";
import nissan from "../assets/cars/nissant.jpg";
import kushaq from "../assets/cars/kushaq.avif";
import virtus from "../assets/cars/virtus.jpg"

const carList = [
  {
    id: 1,
    name: "BMW X5",
    type: "SUV",
    features: ["Automatic", "GPS", "5 seats", "Leather"],
    mileage: "12 kmpl",
    year: 2023,
    seats: 5,
    luggage: "4 bags",
    fuel: "Petrol",
    transmission: "Automatic",
    price: 89,
    rating: 4.8,
    reviews: 120,
    description: "The BMW X5 combines luxury with performance. Perfect for long trips and executive rides.",
    pricing: { hour: 15, day: 120, week: 700 },
    image: bmw,
    thumbnails: [bmw, bmw, bmw],
    reviewsList: [
      { name: "Ravi", rating: 5, comment: "Fantastic ride. Very luxurious." },
      { name: "Neha", rating: 4.5, comment: "Smooth handling and very clean." }
    ]
  },
  {
    id: 2,
    name: "Audi A4",
    type: "Sedan",
    features: ["Manual", "Bluetooth", "4 seats"],
    mileage: "17 kmpl",
    year: 2022,
    seats: 4,
    luggage: "3 bags",
    fuel: "Diesel",
    transmission: "Manual",
    price: 75,
    rating: 4.6,
    reviews: 98,
    description: "Comfortable and stylish sedan, ideal for city rides.",
    pricing: { hour: 12, day: 90, week: 500 },
    image: audi,
    thumbnails: [audi, audi, audi],
    reviewsList: [
      { name: "Amit", rating: 4.5, comment: "Great car for urban drives." },
      { name: "Sara", rating: 4.7, comment: "Very elegant interior." }
    ]
  },
  {
    id: 3,
    name: "Mercedes GLC",
    type: "SUV",
    features: ["Automatic", "AC", "5 seats", "Sunroof"],
    mileage: "14 kmpl",
    year: 2023,
    seats: 5,
    luggage: "5 bags",
    fuel: "Petrol",
    transmission: "Automatic",
    price: 99,
    rating: 4.7,
    reviews: 105,
    description: "Elegance and comfort with advanced safety features for city and highway.",
    pricing: { hour: 18, day: 130, week: 780 },
    image: mercedes,
    thumbnails: [mercedes, mercedes, mercedes],
    reviewsList: [
      { name: "Karan", rating: 5, comment: "Perfect for luxury trips." },
      { name: "Riya", rating: 4.6, comment: "Very spacious and smooth." }
    ]
  },
  {
    id: 4,
    name: "Toyota Corolla",
    type: "Sedan",
    features: ["Automatic", "GPS", "5 seats", "Fuel Efficient"],
    mileage: "18 kmpl",
    year: 2021,
    seats: 5,
    luggage: "4 bags",
    fuel: "Petrol",
    transmission: "Automatic",
    price: 50,
    rating: 4.5,
    reviews: 220,
    description: "Reliable and efficient, ideal for daily and long drives.",
    pricing: { hour: 9, day: 60, week: 350 },
    image: toyota,
    thumbnails: [toyota, toyota, toyota],
    reviewsList: [
      { name: "Deepa", rating: 4.7, comment: "Excellent mileage and comfort." },
      { name: "Yash", rating: 4.3, comment: "Good performance on highways." }
    ]
  },
  {
    id: 5,
    name: "Hyundai i20",
    type: "Hatchback",
    features: ["Manual", "Bluetooth", "4 seats", "Compact"],
    mileage: "20 kmpl",
    year: 2020,
    seats: 4,
    luggage: "2 bags",
    fuel: "Petrol",
    transmission: "Manual",
    price: 40,
    rating: 4.3,
    reviews: 180,
    description: "A compact hatchback that delivers convenience and style.",
    pricing: { hour: 7, day: 45, week: 260 },
    image: hyundai,
    thumbnails: [hyundai, hyundai, hyundai],
    reviewsList: [
      { name: "Vikram", rating: 4.2, comment: "Great for city traffic." },
      { name: "Sneha", rating: 4.4, comment: "Comfortable and easy to park." }
    ]
  },
  {
    id: 6,
    name: "Kia Seltos",
    type: "SUV",
    features: ["Automatic", "AC", "5 seats", "Touchscreen"],
    mileage: "16 kmpl",
    year: 2022,
    seats: 5,
    luggage: "4 bags",
    fuel: "Diesel",
    transmission: "Automatic",
    price: 60,
    rating: 4.6,
    reviews: 140,
    description: "Tech-packed SUV for families and solo travelers.",
    pricing: { hour: 11, day: 75, week: 420 },
    image: kia,
    thumbnails: [kia, kia, kia],
    reviewsList: [
      { name: "Zoya", rating: 4.5, comment: "Good pickup and features." },
      { name: "Harsh", rating: 4.7, comment: "Great space and comfort." }
    ]
  },
  {
    id: 7,
    name: "Honda City",
    type: "Sedan",
    features: ["Automatic", "GPS", "5 seats", "Spacious"],
    mileage: "17 kmpl",
    year: 2021,
    seats: 5,
    luggage: "4 bags",
    fuel: "Petrol",
    transmission: "Automatic",
    price: 55,
    rating: 4.4,
    reviews: 160,
    description: "Spacious, smooth, and reliable sedan for all-day drives.",
    pricing: { hour: 10, day: 70, week: 400 },
    image: honda,
    thumbnails: [honda, honda, honda],
    reviewsList: [
      { name: "Ritesh", rating: 4.3, comment: "Very roomy interior." },
      { name: "Megha", rating: 4.5, comment: "Smooth ride and nice AC." }
    ]
  },
  {
    id: 8,
    name: "Tata Nexon",
    type: "SUV",
    features: ["Manual", "Bluetooth", "5 seats", "Safety Rated"],
    mileage: "18 kmpl",
    year: 2022,
    seats: 5,
    luggage: "3 bags",
    fuel: "Diesel",
    transmission: "Manual",
    price: 45,
    rating: 4.2,
    reviews: 130,
    description: "Robust SUV with high safety and performance.",
    pricing: { hour: 8, day: 55, week: 330 },
    image: tata,
    thumbnails: [tata, tata, tata],
    reviewsList: [
      { name: "Tanvi", rating: 4.1, comment: "Safe and sturdy build." },
      { name: "Kunal", rating: 4.3, comment: "Handles rough roads well." }
    ]
  },
  {
    id: 9,
    name: "Mahindra Thar",
    type: "Off-Road",
    features: ["Manual", "4WD", "4 seats", "Rugged"],
    mileage: "13 kmpl",
    year: 2023,
    seats: 4,
    luggage: "2 bags",
    fuel: "Diesel",
    transmission: "Manual",
    price: 80,
    rating: 4.7,
    reviews: 90,
    description: "Powerful off-roader built for adventure and terrain.",
    pricing: { hour: 14, day: 95, week: 550 },
    image: mahindra,
    thumbnails: [mahindra, mahindra, mahindra],
    reviewsList: [
      { name: "Aarav", rating: 4.6, comment: "Epic for weekend getaways." },
      { name: "Isha", rating: 4.8, comment: "Loved the off-road capability." }
    ]
  },
  {
    id: 10,
    name: "MG Hector",
    type: "SUV",
    features: ["Automatic", "AC", "6 seats", "Smart Connect"],
    mileage: "15 kmpl",
    year: 2022,
    seats: 6,
    luggage: "5 bags",
    fuel: "Petrol",
    transmission: "Automatic",
    price: 70,
    rating: 4.5,
    reviews: 110,
    description: "Spacious and connected SUV with intelligent features.",
    pricing: { hour: 13, day: 85, week: 480 },
    image: mg,
    thumbnails: [mg, mg, mg],
    reviewsList: [
      { name: "Dev", rating: 4.4, comment: "Smart display and good AC." },
      { name: "Pooja", rating: 4.6, comment: "Comfortable and powerful." }
    ]
  },
 {
  id: 11,
  name: "Skoda Kushaq",
  type: "SUV",
  features: ["Manual", "AC", "5 seats", "Touchscreen"],
  mileage: "18 kmpl",
  year: 2023,
  seats: 5,
  luggage: "4 bags",
  fuel: "Petrol",
  transmission: "Manual",
  price: 58,
  rating: 4.4,
  reviews: 60,
  description: "Compact and sporty SUV with strong build quality and safety.",
  pricing: { hour: 10, day: 70, week: 400 },
  image: kushaq,
  thumbnails: [kushaq ,kushaq, kushaq],
  reviewsList: [
    { name: "Raj", rating: 4.5, comment: "Stylish and smooth SUV." }
  ]
},
{
  id: 12,
  name: "Volkswagen Virtus",
  type: "Sedan",
  features: ["Automatic", "GPS", "5 seats", "ABS"],
  mileage: "19 kmpl",
  year: 2023,
  seats: 5,
  luggage: "4 bags",
  fuel: "Petrol",
  transmission: "Automatic",
  price: 62,
  rating: 4.5,
  reviews: 88,
  description: "German-engineered sedan offering stability and refinement.",
  pricing: { hour: 11, day: 80, week: 460 },
  image: virtus,
  thumbnails: [virtus,virtus,virtus],
  reviewsList: [
    { name: "Simran", rating: 4.6, comment: "Premium and powerful." }
  ]
},
{
  id: 13,
  name: "Nissan Magnite",
  type: "Crossover",
  features: ["Automatic", "AC", "4 seats", "Bluetooth"],
  mileage: "20 kmpl",
  year: 2022,
  seats: 4,
  luggage: "3 bags",
  fuel: "Petrol",
  transmission: "Automatic",
  price: 42,
  rating: 4.2,
  reviews: 72,
  description: "Affordable compact SUV for city and travel rides.",
  pricing: { hour: 7, day: 50, week: 290 },
  image: nissan,
  thumbnails: [nissan,nissan,nissan],
  reviewsList: [
    { name: "Ali", rating: 4.2, comment: "Value for money!" }
  ]
}

];

export default carList;
