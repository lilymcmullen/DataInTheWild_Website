# Data In The Wild

An introductory data science course for the life sciences, developed as part of the NSF Harnessing the Data Revolution (HDR) Data Science Corps program in collaboration between the University of Arizona and Lewis & Clark College.

## About the Course

Data in the Wild teaches students to apply data science skills to real-world problems in biodiversity and conservation. Using the R programming language, students work through four narrative-driven modules set in Antarctica, from their first steps in RStudio to building predictive models for penguin nesting habitat. The course is designed for students across all majors and fulfills general education requirements at the University of Arizona.

The course was developed by Drs. Katy Prudic, Jeff Oliver, Keaton Wilson, and Ellen Bledsoe, and first taught in pilot form at UA in Spring 2020.

## Course Modules

**Module 1 - Mission Antarctica!**
Introduction to data science, RStudio, RMarkdown, and the R programming language.

**Module 2 - Good Food Gone Bad**
Data visualization and simulation to investigate a food poisoning outbreak among team members.

**Module 3 - Follow That Seal**
Classification and machine learning to identify failing radio collars on leopard seals.

**Module 4 - March of the Penguins**
Regression and bootstrapping to model penguin nesting success and plan a new road route.

## Accessing Course Materials

### Website

The course website contains all lesson pages, module narratives, and links to downloadable materials:

[https://biodiversitydatasciencecorp.github.io/DataInTheWild_Website/](https://biodiversitydatasciencecorp.github.io/DataInTheWild_Website/)

### GitHub

All source files including student and instructor versions of lessons (.Rmd), datasets (.csv/.zip), and assignments are available in the course repository:

[https://github.com/BiodiversityDataScienceCorp/DataInTheWild_UA](https://github.com/BiodiversityDataScienceCorp/DataInTheWild_UA)

Instructor versions of lessons are also downloadable as PDFs directly from the website. Navigate to any lesson page and find the download link at the bottom of the right-hand table of contents.

## Building the Website Locally

This site is built with [Quarto](https://quarto.org). To preview locally:

```bash
quarto preview
```

To render for deployment:

```bash
quarto render
```

Output is written to the `docs/` folder, which is used for GitHub Pages deployment.

## Support

This course was developed with support from the National Science Foundation under the Harnessing the Data Revolution (HDR) Data Science Corps (DSC) program. Materials are openly available and designed to be adaptable for use at other institutions.

---

2026, University of Arizona & Lewis & Clark College
