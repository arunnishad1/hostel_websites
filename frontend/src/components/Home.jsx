import React from 'react'
import Carousel from './Carousel'
import CardList from './Card'
import Testimonials from './Testimonials'
import HostelSearchForm from './HotelSearchForm'
const Home = () => {
  return (
    <>
    {/* carousel */}
    <Carousel />
    <CardList />
<HostelSearchForm />
{/* faq */}
<section className="bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-gray-800 p-14">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl pb-4">Frequently Asked Questions</h2>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 hover:cursor-pointer">Do you provide meals?</summary>
				<p className="px-4 py-2 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">We offer complimentary breakfast and have a shared kitchen for self-cooking. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 hover:cursor-pointer">Is Wi-Fi available?</summary>
				<p className="px-4 py-2 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">Yes, free high-speed Wi-Fi is available throughout the hostel. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 hover:cursor-pointer">How do I book a room?</summary>
				<p className="px-4 py-2 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">You can book a room online through our booking page. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 hover:cursor-pointer">Do you provide laundry facilities?</summary>
				<p className="px-4 py-2 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">Yes, we have self-service laundry facilities for guests. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 hover:cursor-pointer">Are group bookings allowed?</summary>
				<p className="px-4 py-2 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">Yes, we accommodate group bookings; contact us for special arrangements. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-4 focus:outline-none focus-visible:ring-violet-400 focus-visible:dark:ring-violet-600 hover:cursor-pointer">Is there public transport nearby?</summary>
				<p className="px-4 py-2 pt-0 ml-4 -mt-4 text-gray-400 dark:text-gray-600">Yes, we are well-connected by buses and trains. </p>
			</details>
		</div>
	</div>
</section>
<Testimonials />

    </>
  )
}

export default Home
