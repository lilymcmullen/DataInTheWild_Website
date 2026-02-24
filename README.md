# Data In The Wild

An introductory data science course for the life sciences, developed as part of the NSF Harnessing the Data Revolution (HDR) Data Science Corps program in collaboration between the University of Arizona and Lewis & Clark College.

## About the Course

Data in the Wild teaches students to apply data science skills to real-world problems in biodiversity and conservation. Using the R programming language, students work through four narrative-driven modules set in Antarctica, from their first steps in RStudio to building predictive models for penguin nesting habitat. The course is designed for students across all majors and fulfills general education requirements at the University of Arizona.

The course was developed by Drs. Katy Prudic, Jeff Oliver, Keaton Wilson, and Ellen Bledsoe, and first taught in pilot form at UA in Spring 2020.

## Course Modules

**Module 1 - Mission Antarctica!** Introduction to data science, RStudio, RMarkdown, and the R programming language.

**Module 2 - Good Food Gone Bad** Data visualization and simulation to investigate a food poisoning outbreak among team members.

**Module 3 - Follow That Seal** Classification and machine learning to identify failing radio collars on leopard seals.

**Module 4 - March of the Penguins** Regression and bootstrapping to model penguin nesting success and plan a new road route.

## Accessing Course Materials

### Website

The course website contains all lesson pages, module narratives, and links to downloadable materials:

<https://biodiversitydatasciencecorp.github.io/DataInTheWild_Website/>

### GitHub

All source files are available in the course repository:

<https://github.com/BiodiversityDataScienceCorp/DataInTheWild_UA>

## Building the Website Locally

This site is built with [Quarto](https://quarto.org) and requires R and several packages. To preview locally:

### 1.  Install required software

-   Install [R](https://cran.r-project.org)
-   Install [Quarto](https://quarto.org/docs/get-started/)

### 2.  Install Packages

Install the required R packages by running the following in your R console (e.g., RStudio):
```r
install.packages(c(
  "tidyverse",
  "palmerpenguins",
  "ggplot2",
  "rmarkdown",
  "knitr",
  "caret",
  "recipes",
  "tseries",
  "drc"
), dependencies = TRUE)
```

The `dependencies = TRUE` ensures all required sub-packages are installed automatically.

In powershell (making sure you're in the root directory), run:
```
quarto install tinytex
```
Sometimes Quarto will display an error indicating additional packages that need to be installed.

### 3. Preview the Site

In powershell, run:
```
quarto preview
```

## Support

This course was developed with support from the National Science Foundation under the Harnessing the Data Revolution (HDR) Data Science Corps (DSC) program. Materials are openly available and designed to be adaptable for use at other institutions.

------------------------------------------------------------------------

2026, University of Arizona & Lewis & Clark College