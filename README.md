# Eric Oropezaelwood's Portfolio Website

This is the source code for Eric Oropezaelwood's personal portfolio website, a showcase of his development work. The website is built with Vue.js and hosted on AWS.

## Prerequisites

You will need the following tools installed on your machine:

1. Node.js (version 14.0 or newer)
2. npm (usually comes with Node.js)
3. AWS CLI (for deployment)
4. Git

## Local Development

To start the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-github-username>/portfolio-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd portfolio-website
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run serve
   ```
5. Open `http://localhost:8080` in your browser to view the site.

## Deployment

This project is deployed on AWS using S3 for storage and CloudFront for CDN. The deployment process is automated using GitHub Actions.

When a commit is pushed to the `main` branch, the GitHub Actions workflow is triggered. It installs the necessary dependencies, builds the project, and uploads the build artifacts to an S3 bucket. Then, it creates an invalidation request on CloudFront to ensure the latest version of the website is served.

To set up a similar deployment pipeline, you will need:

1. An AWS account.
2. An S3 bucket configured for static website hosting.
3. A CloudFront distribution that points to your S3 bucket.
4. AWS credentials stored as secrets in your GitHub repository (`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`).
5. A GitHub Actions workflow in your repository that handles the build and deployment process.

## Custom Domain and HTTPS

The website is accessible via a custom domain (https://ericoropeza.me), which was purchased and managed through **Porkbun**. The domain was then configured to point to the AWS CloudFront distribution using DNS records (ALIAS in Porkbun's terms).

SSL/TLS is provided by AWS Certificate Manager, providing secure, HTTPS connections to the website. Domain validation for the SSL certificate was done through DNS validation using CNAME records added to Porkbun.

Remember that any changes to the website might take a while to become visible due to caching by CloudFront.
