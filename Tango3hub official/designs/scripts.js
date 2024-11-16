const services = [
    { name: "Job Consulting", price: 100, category: "job", img: "/images/beautiful-cryptocurrwncy-concept.jpg" },
    { name: "Resume Review", price: 80, category: "job", img: "/images/beautiful-cryptocurrwncy-concept.jpg" },
    { name: "Frontend Development", price: 150, category: "courses", img: "/images/beautiful-cryptocurrwncy-concept.jpg" },
    { name: "Data Science Bootcamp", price: 200, category: "courses", img: "/images/beautiful-cryptocurrwncy-concept.jpg" },
    { name: "Income Prediction Tool", price: 50, category: "income", img: "/images/beautiful-cryptocurrwncy-concept.jpg" },
    { name: "Financial Planning", price: 120, category: "income", img: "/images/beautiful-cryptocurrwncy-concept.jpg" },
    { name: "Backend Development", price: 150, category: "courses", img: "/images/beautiful-cryptocurrwncy-concept.jpg " },
    { name: "Career Path Analysis", price: 110, category: "job", img: "/images/beautiful-cryptocurrwncy-concept.jpg" },
    { name: "Salary Comparison Tool", price: 60, category: "income", img: "/images/beautiful-cryptocurrwncy-concept.jpg" },
];

const servicesContainer = document.getElementById("services-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageInfo = document.getElementById("page-info");

let currentCategory = "all";
let currentPage = 1;
const itemsPerPage = 3;

function displayServices() {
    const filteredServices = services.filter(
        (service) => currentCategory === "all" || service.category === currentCategory
    );

    const start = (currentPage - 1) * itemsPerPage;
    const paginatedServices = filteredServices.slice(start, start + itemsPerPage);

    servicesContainer.innerHTML = paginatedServices
        .map(
            (service) => `
        <div class="service-card">
          <img src="${service.img}" alt="${service.name}">
          <div class="service-content">
            <div class="service-name">${service.name}</div>
            <div class="service-price">US$${service.price}</div>
            <a href="#" class="book-btn">Book Now</a>
          </div>
        </div>
      `
        )
        .join("");

    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(filteredServices.length / itemsPerPage)}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === Math.ceil(filteredServices.length / itemsPerPage);
}

document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        document.querySelector(".category-btn.active").classList.remove("active");
        e.target.classList.add("active");

        currentCategory = e.target.dataset.category;
        currentPage = 1;
        displayServices();
    });
});

prevBtn.addEventListener("click", () => {
    currentPage--;
    displayServices();
});

nextBtn.addEventListener("click", () => {
    currentPage++;
    displayServices()
});

displayServices();


// Mock data for news (replace with real backend API or news page data fetch)
const newsData = [
    {
        title: "A beginner's guide to London City trading",
        image: "/images/beautiful-cryptocurrwncy-concept.jpg",
        views: 20,
        comments: 0,
        link: "https://www.instagram.com/p/ExampleLink1/"
    },
    {
        title: "A look at Asian markets in 2023",
        image: "/images/beautiful-cryptocurrwncy-concept.jpg",
        views: 11,
        comments: 0,
        link: "https://www.instagram.com/p/ExampleLink2/"
    },
    {
        title: "5 Facts to remember when choosing a market...",
        image: "/images/beautiful-cryptocurrwncy-concept.jpg            ",
        views: 8,
        comments: 0,
        link: "https://www.instagram.com/p/ExampleLink3/"
    }
];

// Function to populate news posts dynamically
function loadNews() {
    const newsContainer = document.querySelector('.news-containers');

    newsData.forEach(post => {
        const newsCard = document.createElement('div');
        newsCard.classList.add('news-cards');
        
        newsCard.innerHTML = `
            <img src="${post.image}" alt="News Images">
            <h3>${post.title}</h3>
            <div class="news-meta">
                <span class="views">
                    <i class="fas fa-eye"></i> <span class="view-count">${post.views}</span>
                </span>
                <span class="comments">
                    <i class="fas fa-comment"></i> <span class="comment-count">${post.comments}</span>
                </span>
                <span class="likes">
                    <i class="fas fa-heart"></i> 0
                </span>
            </div>
            <a href="${post.link}" target="_blank" class="view-post">View on Instagram</a>
        `;
        
        newsContainer.appendChild(newsCard);
    });


    

   
    

    
}

// Load news on page load
document.addEventListener('DOMContentLoaded', loadNews);
