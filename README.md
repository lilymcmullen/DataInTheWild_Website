# Data In The Wild

## About the Course

Data in the Wild introduces students to data science through the R programming language and a series of ecological problems set in Antarctica. Across the course, students use data to investigate food safety, wildlife tracking, habitat relationships, and sustainable fisheries management. Along the way, they learn skills in data wrangling, visualization, statistical analysis, modeling, and interpretation.

The course is designed for students in the life sciences and assumes no prior programming experience. Lessons begin with the basics of coding in R and gradually build toward more advanced tools such as hypothesis testing, machine learning, regression, and population modeling.

The course was developed by Drs. Katy Prudic, Jeff Oliver, Keaton Wilson, and Ellen Bledsoe, and has been taught at the University of Arizona as part of the general education curriculum.

## Accessing Course Materials

### Website

The course website contains all modules, lessons, assignments, and their downloads:

<https://biodiversitydatasciencecorp.github.io/DataInTheWild_Website/>

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

This course was developed with support from the National Science Foundation under the Harnessing the Data Revolution (HDR) Data Science Corps (DSC) program, and the NSF-funded project "Building Capacity in Data Science through Biodiversity, Conservation, and General Education" (Awards [2122967](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2122967) and [2122991](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2122991)). Materials are openly available and designed to be adaptable for use at other institutions.

------------------------------------------------------------------------

2026, University of Arizona & Lewis & Clark College