const filterButton = document.querySelector('#filter-button');
const keywordsInput = document.querySelector('#keywords');
const companyInput = document.querySelector('#company');
const featuredJobsContainer = document.querySelector('.featured-jobs');

// Fetch the JSON data and generate the elements for all jobs
fetch('jobs-data.json')
  .then(response => response.json())
  .then(jobs => {
    jobs.forEach(generateJobElement);
  });

filterButton.addEventListener('click', event => {
  event.preventDefault();

  const keywords = keywordsInput.value.trim().toLowerCase();
  const company = companyInput.value.trim().toLowerCase();

  // Clear the featured jobs container
  featuredJobsContainer.innerHTML = '';

  fetch('jobs-data.json')
    .then(response => response.json())
    .then(jobs => {
      // Filter the jobs by keywords and company
      const filteredJobs = jobs.filter(job => {
        return (
          job.title.toLowerCase().includes(keywords) &&
          job.company.toLowerCase().includes(company)
        );
      });

      // Generate and append the elements for the filtered jobs
      filteredJobs.forEach(generateJobElement);
    });
});

function generateJobElement(job) {
  // Create the elements for the job
  const jobElement = document.createElement('div');
  const titleElement = document.createElement('h3');
  const companyElement = document.createElement('p');
  const descriptionElement = document.createElement('p');
  const applyButton = document.createElement('a');

  // Set the content and attributes of the elements
  titleElement.textContent = job.title;
  companyElement.textContent = job.company;
  companyElement.textContent = job.company;
  descriptionElement.textContent = job.description;
  applyButton.textContent = 'Apply Now';
  applyButton.href = job.apply_url;

  // Append the elements to the job element
  jobElement.appendChild(titleElement);
  jobElement.appendChild(companyElement);
  jobElement.appendChild(companyElement);
  jobElement.appendChild(descriptionElement);
  jobElement.appendChild(applyButton);

  // Append the job element to the featured jobs container
  featuredJobsContainer.appendChild(jobElement);
}
