---
title: "Machine Learning Part 2:  Clustering"
category: "concepts"
difficulty: "advanced"
lab: "lab2,lab4,lab5"
topics: ["classification", "clustering", "gis", "machine learning", "python", "vector"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/mlclustering2022-10-26.pdf"
type: "pdf"
pages: 36
processedAt: "2025-06-26T17:52:08.298Z"
---

# Machine Learning Part 2:  Clustering



Machine Learning Part 2: 
Clustering
Louise Capener, Research Associate at the UK Data Service (Cathie 
Marsh Institute, UoM)
Copyright © year Institution. Created by Organisation, UK Data Service. 
1

• Recap
• What is clustering?
• Why bother with it?
• Types of clustering algorithms
• K-  M
eans
• Hierarchical clustering
Outline

6
Supervised learningUnsupervised learning
Input data is labelled Input data is unlabelled
Data is classified based on the 
training dataset
Assigns properties of given data to 
classify it
Divided into Regression and 
Classification
Divided into Clustering and 
Association
Used for prediction Used for analysis
Algorithms include: decision trees, 
logistic regressions, support vector 
machine
Algorithms include: k-means 
clustering, hierarchical clustering, 
apriori algorithm
A known number of classesAn unknown number of classes
Recap  

7
DpsSepal 
length 
(cm)
Petal length 
(cm)
Petal 
width (cm)
A3.51.40.2
B3.25.72.3
C3.25.92.3
D2.94.71.4
E3.71.50.4
Unsupervised learning: used for analysis
DpsSepal 
length 
(cm)
Petal length 
(cm)
Petal width 
(cm)
Species
A3.51.40.2Iris-Versicolour
B3.25.72.3Iris-Setosa
C3.25.92.3Iris-Setosa
D2.94.71.4Iris-Virginica
E3.71.50.4Iris-Versicolour
F3.15.52.2?
Supervised learning: used for prediction
Recap (contd.)

8
DpsSepal 
length (cm)
Petal length 
(cm)
Petal width 
(cm)
cluster
A3.51.40.21
B3.25.72.32
C3.25.92.32
“Clustering is the task of partitioning the dataset 
into groups, called clusters. The goal is to split up 
the data in such a way that points within a single 
cluster are very similar and points in different 
clusters are different.”
(Müller and Guido 2017)
What is clustering?

9
• It provides more information on the 
structure of the data patterns
• It can help identify problems in the 
data, such as outliers
• It can be used to compress data
Why bother with it?

10
•   Customer recommendation systems: 
“People who bought Harry Potter and the 
Philosopher’s Stonealso bought The 
Hunger Games...”
•   Grouping DNA sequences of different 
strains of HIV into families of genetically 
similar viruses
•   Identifying fake news by clustering the 
words used in articles. Certain words may 
appear more in sensationalized click-bait 
articles.
•   And the more frivolous and fun side 
projects...
Other use cases

11
“There is no universal definition of what 
a cluster is: it really depends on the 
context, and different algorithms will 
capture different kinds of clusters.”
(Géron, 2019)
What is a cluster?

12
EXPLORE YOUR DATA
?
?
?
How do I know which type of algorithm is right for me?
Hierarchical clustering
Distribution-based
Density-basedCentroid-based
Types of clustering algorithms

13
•We want to separate our data points 
into k clusters 
•First, we initialize the algorithm with k 
random points (our centroids)
•Then, we assign each data point to its 
nearest initialisation point – using the 
Euclidean distance
•Once each data point is assigned, we 
relocate the initialisation point to the 
mean of the data points that were 
assigned to it
•Repeat the highlighted steps until the 
assignment of data points to centroids 
remains unchanged
K-Means clustering

14
Introducing pseudocode...

15
Pseudo English

16
Pseudocode 

17
Code

18
Forgy’smethod: choose k random data points from the dataset
Random Partition method: Randomly assign data points to a 
cluster. Then calculate the mean of each cluster to get the 
initial centroids.
K-  means++: first centroid is a random datapoint, but remaining 
centroids are chosen based on the maximum squared distance 
centroids are spread out evenly
Initialisation – how do we select our 
centroids?

19
•    Each time we increase the 
number of clusters the SSE 
decreases
•Goal: select a small value of k 
that still has a low SSE
•Elbow represents where we 
start to have diminishing returns 
by increasing k
k value
SSE
Elbow plot
K = ?
Sepal 
length 
(cm)
Petal 
length 
(cm)
Petal 
width 
(cm)
3.51.40.2
3.25.72.3
3.25.92.3
2.94.71.4
3.71.50.4
Okay... but how do we determine the 
number of clusters we want? 

20
• Easy to understand and 
implement
• Fast
• Scalable
What are the strengths?

21
shapedirectiondensity
Suboptimal solution
Bad centroid  initialization 
Elbow method
•  Choosing 푘푘manually – it’s a hassle!
•  It is dependent on initial values: 
necessary to run the algorithm 
several times to avoid suboptimal 
solutions – converges to a local 
minimum
•  Not good at clustering data of 
varying sizes, densities, or 
nonspherical shapes
What are the limitations?

22
“Hierarchical clustering algorithms [...] 
approach the problem of clustering by 
developing a binary tree-based data 
structure called the dendrogram. Once 
the dendrogram is constructed, one 
can automatically choose the right 
number of clusters by splitting the tree 
at different levels to obtain different 
clustering solutions for the same 
dataset without rerunning the 
clustering algorithm again.”
(Reddy and Vinzamuri, 2015)
Hierarchical clustering

23
Split
A
B
C
D
E
0
1
2
3
4
5
6
01234
A
B
C
D
E
0
1
2
3
4
5
6
01234
Branches
Increasing similarity
How do I read a dendrogram?

24
DE
ABC
ABCDE
ABC
DE
AB
ABCDE
D
ECB
A
D
E
BAC
AB
A
B
C
D
E
0
1
2
3
4
5
6
01234
2) Divisive  
1)   Agglomerative
What are the 2 main approaches to hierarchical 
clustering?

25
pqED
341.414214
21
Increasing similarity
•  Hierarchical clustering is proximity-based
•  Affects the shape of the clusters
•  Used to build distance matrix
•  Default is Euclidean distance, but other 
measures exist:correlation-based, 
Levenshteindistance etc. 
1) Measure of distance – some measure of similarity
...but how do we know which clusters should be 
combined, or split?

26
•  A means of determining whether certain clusters should be merged
•  Default is complete-linkage
•  Other commonly used linkage criteria: single-linkage, average-
linkage
•  Used to update the distance matrix and merge clusters 
2) Linkage criterion – different ways to link clusters based on distance

27
Agglomerative hierarchical clustering: 
Using complete-linkage

28
A
B
C
D
E
0
1
2
3
4
5
6
00.511.522.533.5
Dpssepal 
length (cm)
Petal 
length 
(cm)
A11
B10
C02
D24
E35
yx
1) Load in dataset
Step by step...

29
ABCDE
A011.43.24.5
B102.24.15.4
C1.42.202.84.2
D3.24.12.801.4
E4.55.44.21.40
2) Build distance matrix and identify smallest 
distance

30
d[(A,B),C] = max {d(A,C), 
d(B,C)}
= max {1.4, 2.2}
d[(A,B),D] = max {d(A,D), 
d(B,D)}
= max {3.2, 4.1}
d[(A,B),E] = max {d(A,E), 
d(B,E)}
= max {4.5, 5.4}
ABCDE
AB0
C2.20
D4.12.80
E5.44.21.40
Updated distance matrix:
3) Perform merge and update distance matrix

31
d[(A,B,C),(D,E) = max 
{d((D,E)(A,B), ((D,E,(C))
= max {5.4, 4.2}
ABCDE
ABC0
DE5.40
d[(A,B),(D,E)] = max 
{d((A,B)D), d(A,B)E))}
= max {4.1, 5.4}
d[(C,(D,E))] = max
{d(C,D), d (C,E)}
= max {2.8, 4.2}
ABDEC
AB0
DE5.40
C2.24.20
Continue merging and updating the distance 
matrix...

32
two clusters
three clusters
•  Dendrogram: y-axis 
denotes when in the 
agglomerative algorithm 
two clusters get merged
•  Y-axis also shows how far 
apart the merged clusters 
are pay attention to the 
length of the branches

33
K = ?
•Easy to understand and implement
•Most appealing output
•Can handle non-convex clusters
•No need to specify the number of 
clusters!
What are the strengths?

34
•Mathematically simple...but 
computationally expensive!
•Hard to visualize results with a large 
dataset
•Heavily driven by heuristics and arbitrary 
decisions
•Algorithm can’t undo previous step
What are the limitations?

35
K-MeansHierarchical clustering
Time complexityO(n)O(n²)
Hyperparameters 
Tuning
Must specify the number 
of clusters (k) and 
retrain model for each k
No need to specify k 
value, can perform split 
wherever
Data structureBetter performance 
when dealing with 
convex clusters
Generates better results 
when dealing with non-
convex clusters
Types/variationsMany variations (e.g., K-
median, K-medoid) 
Two approaches: 
Agglomerative and 
Divisive
Result RobustnessResult may be different 
on different runs
Same parameters 
generate the same 
result every time
K-Means vs Hierarchical clustering

37
Geron, A (2019). Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: 
Concepts, Tools, and Techniques to Build Intelligent Systems.
Müller, A.C, and Guido, S (2017). Introduction to Machine Learning with Python: A Guide for Data 
Scientists, O’Reilly Media, Inc. 
Reddy, C.K., and Vinzamuri, B (2015). A Survey of Partitional and Hierarchical Clustering 
Algorithms.
-Outlier detection using clustering (Outlier detection image) 
https://blogs.sap.com/2020/12/16/outlier-detection-by-clustering/
-Image compression using K-Means clustering (parrot image) 
https://medium.com/@agarwalvibhor84/image-compression-using-k-means-clustering-
8c0ec055103f
-Clustering Algorithms: Types of Clustering (images) https://developers.google.com/machine-
learning/clustering/clustering-algorithms
-K-Means clustering (image with centroids as triangles) 
-K-Means pseudocode (image) 
https://www.cms.waikato.ac.nz/~abifet/book/chapter_9.html#rfig9-1
-K-Means Elbow Method and Silhouette Analysis (image) https://
stackabuse.com/k-means-
elbow-method-and-silhouette-analysis-with-yellowbrick-and-scikit-learn/
References

38
GitHub: 
https://github.com/UKDataServiceOpen/ML_Workshop
Material for Tuesday the 2
nd
of 
November

-When you leave the webinar, please complete our short 
survey 
-Just click on ‘continue’ to access the survey. 
Survey

40
Email:  
louise.capener@Manchester.ac.uk
nadia.kennar@manchester.ac.uk, 
Twitter:  
@CapenerLouise
@NadiaKennar
Thank You.

## Document Information
- **Source**: PDF Document (36 pages)
- **Category**: concepts
- **Difficulty**: advanced
- **Relevant Labs**: lab2,lab4,lab5
- **Topics**: classification, clustering, gis, machine learning, python, vector

## AI Assistant Usage
Ask the chatbot:
- "Explain machine learning part 2:  clustering"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- classification
- clustering
- gis
- machine learning
- python
- vector
