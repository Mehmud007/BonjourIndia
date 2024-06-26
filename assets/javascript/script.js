window.addEventListener("load", function () {
	document.getElementById("loader").style.display = "none";
	document.getElementById("box").style.display = "block";
});
const testimonials = [
	{
		name: "Ridam Agarwal",
		job: "Batch-2020",
		image: "https://i.postimg.cc/gJDkZrNn/profile-image-1.png",
		testimonial:
			"Neque volutpat ac tincidunt vitae semper quis lectus nulla at volutpat diam ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci porta non pulvinar neque laoreet suspendisse interdum consectetur"
	},
	{
		name: "Katey Topaz",
		job: "Batch-2022",
		image: "https://i.postimg.cc/8kZzkJ7Y/profile-image-2.png",
		testimonial:
			"Elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla"
	},
	{
		name: "Jae Robin",
		job: "Batch-2024",
		image: "https://i.postimg.cc/90gmLK32/profile-image-3.png",
		testimonial:
			"Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis"
	},
	{
		name: "Nicola Blakely",
		job: "Batch-2018",
		image: "https://i.postimg.cc/6qp6Lwmz/profile-image-4.png",
		testimonial:
			"Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"
	}
];
let i = 0; // current slide
let j = testimonials.length; // total slides
let testimonialContainer = document.getElementById("testimonial-container");
function next() {
	i = (j + i + 1) % j;
	displayTestimonial();
}

function prev() {
	i = (j + i - 1) % j;
	displayTestimonial();
}
let displayTestimonial = () => {
	testimonialContainer.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
         <img src=${testimonials[i].image}></img>
        <h3>${testimonials[i].name}</h3>
        <h6>${testimonials[i].job}</h6>
        `;
};
window.onload = displayTestimonial;
