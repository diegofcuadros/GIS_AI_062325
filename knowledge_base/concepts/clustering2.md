---
title: "ch8.pdf"
category: "lab-material"
difficulty: "intermediate"
lab: "lab2,lab4,lab5"
topics: ["classification", "clustering", "gis", "machine learning", "vector"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/Clustering2.pdf"
type: "pdf"
pages: 82
processedAt: "2025-06-26T18:56:36.180Z"
---

# ch8.pdf



8
Cluster Analysis:
Basic Concepts and
Algorithms
Cluster analysis divides data into groups (clusters) that are meaningful, useful,
or both. If meaningful groups are the goal, then the clusters should capture the
natural structure of the data. In some cases, however, cluster analysis is only a
useful starting point for other purposes, such as data summarization. Whether
for understanding or utility,  cluster analysis has long played an important
role in a wide variety of fields:  psychology and other social sciences, biology,
statistics,  pattern recognition,  information retrieval, machine learning,  and
data mining.
There have been many applications of cluster analysis to practical prob-
lems.  We provide some specific examples, organized by whether the purpose
of the clustering is understanding or utility.
Clustering for UnderstandingClasses, or conceptually meaningful groups
of objects that share common characteristics, play an important role in how
people analyze and describe the world.  Indeed, human beings are skilled at
dividing objects into groups (clustering) and assigning particular objects to
these groups (classification). For example, even relatively young children can
quickly label the objects in a photograph as buildings, vehicles, people, ani-
mals, plants, etc. In the context of understanding data, clusters are potential
classes and cluster analysis is the study of techniques for automatically finding
classes. The following are some examples:

488   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
•Biology.Biologists have spent many years creating a taxonomy (hi-
erarchical classification) of all living things:  kingdom,  phylum,  class,
order, family, genus, and species. Thus, it is perhaps not surprising that
much of the early work in cluster analysis sought to create a discipline
of mathematical taxonomy that could automatically find such classifi-
cation structures.  More recently, biologists have applied clustering to
analyze the large amounts of genetic information that are now available.
For example, clustering has been used to find groups of genes that have
similar functions.
•Information Retrieval.The World Wide Web consists of billions of
Web pages, and the results of a query to a search engine can return
thousands of pages.  Clustering can be used to group these search re-
sults into a small number of clusters, each of which captures a particular
aspect of the query.   For instance,  a query of “movie” might return
Web pages grouped into categories such as reviews, trailers, stars, and
theaters. Each category (cluster) can be broken into subcategories (sub-
clusters), producing a hierarchical structure that further assists a user’s
exploration of the query results.
•Climate.Understanding the Earth’s climate requires finding patterns
in the atmosphere and ocean.  To that end, cluster analysis has been
applied to find patterns in the atmospheric pressure of polar regions and
areas of the ocean that have a significant impact on land climate.
•Psychology and Medicine.An illness or condition frequently has a
number of variations, and cluster analysis can be used to identify these
different subcategories. For example, clustering has been used to identify
different types of depression. Cluster analysis can also be used to detect
patterns in the spatial or temporal distribution of a disease.
•Business.Businesses collect large amounts of information on current
and potential customers.  Clustering can be used to segment customers
into a small number of groups for additional analysis and marketing
activities.
Clustering for UtilityCluster analysis provides an abstraction from in-
dividual data objects to the clusters in which those data objects reside.  Ad-
ditionally, some clustering techniques characterize each cluster in terms of a
cluster prototype; i.e., a data object that is representative of the other ob-
jects in the cluster.  These cluster prototypes can be used as the basis for a

489
number of data analysis or data processing techniques. Therefore, in the con-
text of utility, cluster analysis is the study of techniques for finding the most
representative cluster prototypes.
•Summarization.Many data analysis techniques, such as regression or
PCA, have a time or space complexity ofO(m
2
) or higher (wheremis
the number of objects), and thus, are not practical for large data sets.
However, instead of applying the algorithm to the entire data set, it can
be applied to a reduced data set consisting only of cluster prototypes.
Depending on the type of analysis, the number of prototypes, and the
accuracy with which the prototypes represent the data, the results can
be comparable to those that would have been obtained if all the data
could have been used.
•Compression.Cluster prototypes can also be used for data compres-
sion. In particular, a table is created that consists of the prototypes for
each cluster; i.e., each prototype is assigned an integer value that is its
position (index) in the table.  Each object is represented by the index
of the prototype associated with its cluster. This type of compression is
known asvector quantizationand is often applied to image, sound,
and video data, where (1) many of the data objects are highly similar
to one another, (2) some loss of information is acceptable, and (3) a
substantial reduction in the data size is desired.
•Efficiently Finding Nearest Neighbors.Finding nearest neighbors
can require computing the pairwise distance between all points.  Often
clusters and their cluster prototypes can be found much more efficiently.
If objects are relatively close to the prototype of their cluster, then we can
use the prototypes to reduce the number of distance computations that
are necessary to find the nearest neighbors of an object. Intuitively, if two
cluster prototypes are far apart, then the objects in the corresponding
clusters cannot be nearest neighbors of each other.  Consequently, to
find an object’s nearest neighbors it is only necessary to compute the
distance to objects in nearby clusters, where the nearness of two clusters
is measured by the distance between their prototypes. This idea is made
more precise in Exercise 25 on page 94.
This chapter provides an introduction to cluster analysis.  We begin with
a high-level overview of clustering, including a discussion of the various ap-
proaches to dividing objects into sets of clusters and the different types of
clusters.  We then describe three specific clustering techniques that represent

490   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
broad categories of algorithms and illustrate a variety of concepts: K-means,
agglomerative hierarchical clustering, and DBSCAN. The final section of this
chapter is devoted to cluster validity—methods for evaluating the goodness
of the clusters produced by a clustering algorithm. More advanced clustering
concepts and algorithms will be discussed in Chapter 9.  Whenever possible,
we discuss the strengths and weaknesses of different schemes.  In addition,
the bibliographic notes provide references to relevant books and papers that
explore cluster analysis in greater depth.
8.1   Overview
Before discussing specific clustering techniques,  we provide some necessary
background.  First, we further define cluster analysis, illustrating why it is
difficult and explaining its relationship to other techniques that group data.
Then we explore two important topics:  (1) different ways to group a set of
objects into a set of clusters, and (2) types of clusters.
8.1.1   What Is Cluster Analysis?
Cluster analysis groups data objects based only on information found in the
data that describes the objects and their relationships.  The goal is that the
objects within a group be similar (or related) to one another and different from
(or unrelated to) the objects in other groups.  The greater the similarity (or
homogeneity) within a group and the greater the difference between groups,
the better or more distinct the clustering.
In many applications, the notion of a cluster is not well defined. To better
understand the difficulty of deciding what constitutes a cluster, consider Figure
8.1, which shows twenty points and three different ways of dividing them into
clusters.  The shapes of the markers indicate cluster membership.  Figures
8.1(b) and 8.1(d) divide the data into two and six parts, respectively. However,
the apparent division of each of the two larger clusters into three subclusters
may simply be an artifact of the human visual system.  Also, it may not be
unreasonable to say that the points form four clusters, as shown in Figure
8.1(c).  This figure illustrates that the definition of a cluster is imprecise and
that the best definition depends on the nature of data and the desired results.
Cluster analysis is related to other techniques that are used to divide data
objects into groups.  For instance, clustering can be regarded as a form of
classification in that it creates a labeling of objects with class (cluster) labels.
However, it derives these labels only from the data. In contrast, classification

8.1Overview491
(a) Original points.(b) Two clusters.
(c) Four clusters.(d) Six clusters.
Figure 8.1.Different ways of clustering the same set of points.
in the sense of Chapter 4 issupervised classification; i.e., new, unlabeled
objects are assigned a class label using a model developed from objects with
known class labels.   For this reason,  cluster analysis is sometimes referred
to asunsupervised classification.   When the term classification is used
without any qualification within data mining, it typically refers to supervised
classification.
Also,  while the termssegmentationandpartitioningare sometimes
used as synonyms for clustering, these terms are frequently used for approaches
outside the traditional bounds of cluster analysis.   For example,  the term
partitioning is often used in connection with techniques that divide graphs into
subgraphs and that are not strongly connected to clustering.  Segmentation
often refers to the division of data into groups using simple techniques; e.g.,
an image can be split into segments based only on pixel intensity and color, or
people can be divided into groups based on their income.  Nonetheless, some
work in graph partitioning and in image and market segmentation is related
to cluster analysis.
8.1.2   Different Types of Clusterings
An entire collection of clusters is commonly referred to as aclustering, and in
this section, we distinguish various types of clusterings: hierarchical (nested)
versus partitional (unnested), exclusive versus overlapping versus fuzzy, and
complete versus partial.
Hierarchical versus PartitionalThe most commonly discussed distinc-
tion among different types of clusterings is whether the set of clusters is nested

492   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
or unnested, or in more traditional terminology, hierarchical or partitional. A
partitional clusteringis simply a division of the set of data objects into
non-overlapping subsets (clusters) such that each data object is in exactly one
subset.  Taken individually, each collection of clusters in Figures 8.1 (b–d) is
a partitional clustering.
If we permit clusters to have subclusters, then we obtain ahierarchical
clustering, which is a set of nested clusters that are organized as a tree. Each
node (cluster) in the tree (except for the leaf nodes) is the union of its children
(subclusters), and the root of the tree is the cluster containing all the objects.
Often, but not always, the leaves of the tree are singleton clusters of individual
data objects.  If we allow clusters to be nested, then one interpretation of
Figure 8.1(a) is that it has two subclusters (Figure 8.1(b)), each of which, in
turn, has three subclusters (Figure 8.1(d)). The clusters shown in Figures 8.1
(a–d), when taken in that order, also form a hierarchical (nested) clustering
with, respectively, 1, 2, 4, and 6 clusters on each level.  Finally, note that a
hierarchical clustering can be viewed as a sequence of partitional clusterings
and a partitional clustering can be obtained by taking any member of that
sequence; i.e., by cutting the hierarchical tree at a particular level.
Exclusive versus Overlapping versus FuzzyThe clusterings shown in
Figure 8.1 are allexclusive, as they assign each object to a single cluster.
There are many situations in which a point could reasonably be placed in more
than one cluster, and these situations are better addressed by non-exclusive
clustering.   In the most general sense,  anoverlappingornon-exclusive
clusteringis used to reflect the fact that an object cansimultaneouslybelong
to more than one group (class). For instance, a person at a university can be
both an enrolled student and an employee of the university.  A non-exclusive
clustering is also often used when, for example, an object is “between” two
or more clusters and could reasonably be assigned to any of these clusters.
Imagine a point halfway between two of the clusters of Figure 8.1.  Rather
than make a somewhat arbitrary assignment of the object to a single cluster,
it is placed in all of the “equally good” clusters.
In afuzzy clustering, every object belongs to every cluster with a mem-
bership weight that is between 0 (absolutely doesn’t belong) and 1 (absolutely
belongs). In other words, clusters are treated as fuzzy sets. (Mathematically,
a fuzzy set is one in which an object belongs to any set with a weight that
is between 0 and 1.  In fuzzy clustering, we often impose the additional con-
straint that the sum of the weights for each object must equal 1.)  Similarly,
probabilistic clustering techniques compute the probability with which each

8.1Overview493
point belongs to each cluster, and these probabilities must also sum to 1. Be-
cause the membership weights or probabilities for any object sum to 1, a fuzzy
or probabilistic clustering does not address true multiclass situations, such as
the case of a student employee, where an object belongs to multiple classes.
Instead, these approaches are most appropriate for avoiding the arbitrariness
of assigning an object to only one cluster when it may be close to several. In
practice, a fuzzy or probabilistic clustering is often converted to an exclusive
clustering by assigning each object to the cluster in which its membership
weight or probability is highest.
Complete versus PartialAcomplete clusteringassigns every object to
a cluster, whereas apartial clusteringdoes not. The motivation for a partial
clustering is that some objects in a data set may not belong to well-defined
groups.  Many times objects in the data set may represent noise, outliers, or
“uninteresting background.” For example, some newspaper stories may share
a common theme, such as global warming, while other stories are more generic
or one-of-a-kind. Thus, to find the important topics in last month’s stories, we
may want to search only for clusters of documents that are tightly related by a
common theme. In other cases, a complete clustering of the objects is desired.
For example, an application that uses clustering to organize documents for
browsing needs to guarantee that all documents can be browsed.
8.1.3   Different Types of Clusters
Clustering aims to find useful groups of objects (clusters), where usefulness is
defined by the goals of the data analysis.  Not surprisingly, there are several
different notions of a cluster that prove useful in practice. In order to visually
illustrate the differences among these types of clusters, we use two-dimensional
points, as shown in Figure 8.2, as our data objects. We stress, however, that
the types of clusters described here are equally valid for other kinds of data.
Well-SeparatedA cluster is a set of objects in which each object is closer
(or more similar) to every other object in the cluster than to any object not
in the cluster. Sometimes a threshold is used to specify that all the objects in
a cluster must be sufficiently close (or similar) to one another. This idealistic
definition of a cluster is satisfied only when the data contains natural clusters
that are quite far from each other.  Figure 8.2(a) gives an example of well-
separated clusters that consists of two groups of points in a two-dimensional
space. The distance between any two points in different groups is larger than

494   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
the distance between any two points within a group.  Well-separated clusters
do not need to be globular, but can have any shape.
Prototype-BasedA cluster is a set of objects in which each object is closer
(more similar) to the prototype that defines the cluster than to the prototype
of any other cluster.  For data with continuous attributes, the prototype of a
cluster is often a centroid, i.e., the average (mean) of all the points in the clus-
ter. When a centroid is not meaningful, such as when the data has categorical
attributes, the prototype is often a medoid, i.e., the most representative point
of a cluster.  For many types of data, the prototype can be regarded as the
most central point, and in such instances, we commonly refer to prototype-
based clusters ascenter-based clusters. Not surprisingly, such clusters tend
to be globular. Figure 8.2(b) shows an example of center-based clusters.
Graph-BasedIf the data is represented as a graph, where the nodes are
objects and the links represent connections among objects (see Section 2.1.2),
then a cluster can be defined as aconnected component; i.e., a group of
objects that are connected to one another, but that have no connection to
objects outside the group. An important example of graph-based clusters are
contiguity-based clusters, where two objects are connected only if they are
within a specified distance of each other.  This implies that each object in a
contiguity-based cluster is closer to some other object in the cluster than to
any point in a different cluster. Figure 8.2(c) shows an example of such clusters
for two-dimensional points. This definition of a cluster is useful when clusters
are irregular or intertwined, but can have trouble when noise is present since,
as illustrated by the two spherical clusters of Figure 8.2(c), a small bridge of
points can merge two distinct clusters.
Other types of graph-based clusters are also possible. One such approach
(Section 8.3.2) defines a cluster as aclique; i.e., a set of nodes in a graph that
are completely connected to each other.  Specifically, if we add connections
between objects in the order of their distance from one another, a cluster is
formed when a set of objects forms a clique.  Like prototype-based clusters,
such clusters tend to be globular.
Density-BasedA cluster is a dense region of objects that is surrounded by
a region of low density.  Figure 8.2(d) shows some density-based clusters for
data created by adding noise to the data of Figure 8.2(c).  The two circular
clusters are not merged, as in Figure 8.2(c), because the bridge between them
fades into the noise.  Likewise, the curve that is present in Figure 8.2(c) also

8.1Overview495
fades into the noise and does not form a cluster in Figure 8.2(d).  A density-
based definition of a cluster is often employed when the clusters are irregular or
intertwined, and when noise and outliers are present. By contrast, a contiguity-
based definition of a cluster would not work well for the data of Figure 8.2(d)
since the noise would tend to form bridges between clusters.
Shared-Property (Conceptual Clusters)More generally, we can define
a cluster as a set of objects that share some property. This definition encom-
passes all the previous definitions of a cluster; e.g., objects in a center-based
cluster share the property that they are all closest to the same centroid or
medoid.  However, the shared-property approach also includes new types of
clusters.   Consider the clusters shown in Figure 8.2(e).   A triangular area
(cluster) is adjacent to a rectangular one, and there are two intertwined circles
(clusters).  In both cases, a clustering algorithm would need a very specific
concept of a cluster to successfully detect these clusters. The process of find-
ing such clusters is called conceptual clustering.  However, too sophisticated
a notion of a cluster would take us into the area of pattern recognition, and
thus, we only consider simpler types of clusters in this book.
Road Map
In this chapter, we use the following three simple, but important techniques
to introduce many of the concepts involved in cluster analysis.
•K-means.  This is a prototype-based, partitional clustering technique
that attempts to find a user-specified number of clusters (K), which are
represented by their centroids.
•Agglomerative Hierarchical Clustering.This clustering approach
refers to a collection of closely related clustering techniques that produce
a hierarchical clustering by starting with each point as a singleton cluster
and then repeatedly merging the two closest clusters until a single, all-
encompassing cluster remains. Some of these techniques have a natural
interpretation in terms of graph-based clustering, while others have an
interpretation in terms of a prototype-based approach.
•DBSCAN. This is a density-based clustering algorithm that produces
a partitional clustering, in which the number of clusters is automatically
determined by the algorithm.  Points in low-density regions are classi-
fied as noise and omitted; thus, DBSCAN does not produce a complete
clustering.

496   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
(a)  Well-separated  clusters.Each
point is closer to all of the points in its
cluster than to any point in another
cluster.
(b)  Center-based  clusters.Each
point is closer to the center of its
cluster  than  to  the  center  of  any
other cluster.
(c) Contiguity-based clusters. Each
pointisclosertoatleastonepoint
in its cluster than to any point in
another cluster.
(d)  Density-based  clusters.   Clus-
ters are regions of high density sep-
arated by regions of low density.
(e) Conceptual clusters.   Points in a cluster share some general
property that derives from the entire set of points.  (Points in the
intersection of the circles belong to both.)
Figure 8.2.Different types of clusters as illustrated by sets of two-dimensional points.
8.2   K-means
Prototype-based clustering techniques create a one-level partitioning of the
data objects.  There are a number of such techniques, but two of the most
prominent are K-means and K-medoid. K-means defines a prototype in terms
of a centroid, which is usually the mean of a group of points, and is typically

8.2K-means497
applied to objects in a continuousn-dimensional space.  K-medoid defines a
prototype in terms of a medoid, which is the most representative point for a
group of points, and can be applied to a wide range of data since it requires
only a proximity measure for a pair of objects. While a centroid almost never
corresponds to an actual data point, a medoid, by its definition, must be an
actual data point.  In this section, we will focus solely on K-means, which is
one of the oldest and most widely used clustering algorithms.
8.2.1   The Basic K-means Algorithm
The K-means clustering technique is simple, and we begin with a description
of the basic algorithm. We first chooseKinitial centroids, whereKis a user-
specified parameter, namely, the number of clusters desired.  Each point is
then assigned to the closest centroid, and each collection of points assigned to
a centroid is a cluster. The centroid of each cluster is then updated based on
the points assigned to the cluster. We repeat the assignment and update steps
until no point changes clusters, or equivalently, until the centroids remain the
same.
K-means is formally described by Algorithm 8.1. The operation of K-means
is illustrated in Figure 8.3, which shows how, starting from three centroids, the
final clusters are found in four assignment-update steps.  In these and other
figures displaying K-means clustering, each subfigure shows (1) the centroids
at the start of the iteration and (2) the assignment of the points to those
centroids. The centroids are indicated by the “+” symbol; all points belonging
to the same cluster have the same marker shape.
Algorithm 8.1Basic K-means algorithm.
1:SelectKpoints as initial centroids.
2:repeat
3:FormKclusters by assigning each point to its closest centroid.
4:Recompute the centroid of each cluster.
5:untilCentroids do not change.
In the first step, shown in Figure 8.3(a), points are assigned to the initial
centroids, which are all in the larger group of points. For this example, we use
the mean as the centroid. After points are assigned to a centroid, the centroid
is then updated.  Again, the figure for each step shows the centroid at the
beginning of the step and the assignment of points to those centroids. In the
second step, points are assigned to the updated centroids, and the centroids

498   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
(a) Iteration 1.(b) Iteration 2.(c) Iteration 3.(d) Iteration 4.
Figure 8.3.Using the K-means algorithm to find three clusters in sample data.
are updated again.  In steps 2, 3, and 4, which are shown in Figures 8.3 (b),
(c), and (d), respectively, two of the centroids move to the two small groups of
points at the bottom of the figures. When the K-means algorithm terminates
in Figure 8.3(d), because no more changes occur, the centroids have identified
the natural groupings of points.
For some combinations of proximity functions and types of centroids, K-
means always converges to a solution; i.e., K-means reaches a state in which no
points are shifting from one cluster to another, and hence, the centroids don’t
change.  Because most of the convergence occurs in the early steps, however,
the condition on line 5 of Algorithm 8.1 is often replaced by a weaker condition,
e.g., repeat until only 1% of the points change clusters.
We consider each of the steps in the basic K-means algorithm in more detail
and then provide an analysis of the algorithm’s space and time complexity.
Assigning Points to the Closest Centroid
To assign a point to the closest centroid, we need a proximity measure that
quantifies the notion of “closest” for the specific data under consideration.
Euclidean (L
2
) distance is often used for data points in Euclidean space, while
cosine similarity is more appropriate for documents.  However, there may be
several types of proximity measures that are appropriate for a given type of
data. For example, Manhattan (L
1
) distance can be used for Euclidean data,
while the Jaccard measure is often employed for documents.
Usually, the similarity measures used for K-means are relatively simple
since the algorithm repeatedly calculates the similarity of each point to each
centroid. In some cases, however, such as when the data is in low-dimensional

8.2K-means499
Table 8.1.Table of notation.
SymbolDescription
xAn object.
C
i
Thei
th
cluster.
c
i
The centroid of clusterC
i
.
cThe centroid of all points.
m
i
Thenumberofobjectsinthei
th
cluster.
mThenumberofobjectsinthedataset.
KThe number of clusters.
Euclidean space, it is possible to avoid computing many of the similarities,
thus significantly speeding up the K-means algorithm.   Bisecting K-means
(described in Section 8.2.3) is another approach that speeds up K-means by
reducing the number of similarities computed.
Centroids and Objective Functions
Step 4 of the K-means algorithm was stated rather generally as “recompute
the centroid of each cluster,” since the centroid can vary, depending on the
proximity measure for the data and the goal of the clustering.  The goal of
the clustering is typically expressed by an objective function that depends on
the proximities of the points to one another or to the cluster centroids; e.g.,
minimize the squared distance of each point to its closest centroid.  We illus-
trate this with two examples.  However, the key point is this:  once we have
specified a proximity measure and an objective function, the centroid that we
should choose can often be determined mathematically.  We provide mathe-
matical details in Section 8.2.6, and provide a non-mathematical discussion of
this observation here.
Data in Euclidean SpaceConsider data whose proximity measure is Eu-
clidean distance.  For our objective function, which measures the quality of a
clustering, we use thesum of the squared error (SSE), which is also known
as scatter.  In other words, we calculate the error of each data point, i.e., its
Euclidean distance to the closest centroid, and then compute the total sum
of the squared errors.  Given two different sets of clusters that are produced
by two different runs of K-means, we prefer the one with the smallest squared
error since this means that the prototypes (centroids) of this clustering are
a better representation of the points in their cluster.  Using the notation in
Table 8.1, the SSE is formally defined as follows:

500   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
SSE =
K
∑
i=1
∑
x∈C
i
dist(c
i
,x)
2
(8.1)
wheredistis the standard Euclidean (L
2
) distance between two objects in
Euclidean space.
Given these assumptions,  it can be shown (see Section 8.2.6) that the
centroid that minimizes the SSE of the cluster is the mean. Using the notation
in Table 8.1, the centroid (mean) of thei
th
cluster is defined by Equation 8.2.
c
i
=
1
m
i
∑
x∈C
i
x(8.2)
To illustrate, the centroid of a cluster containing the three two-dimensional
points, (1,1), (2,3), and (6,2), is ((1 + 2 + 6)/3,((1+3+2)/3) = (3,2).
Steps 3 and 4 of the K-means algorithm directly attempt to minimize
the SSE (or more generally, the objective function).  Step 3 forms clusters
by assigning points to their nearest centroid, which minimizes the SSE for
the given set of centroids.  Step 4 recomputes the centroids so as to further
minimize the SSE. However, the actions of K-means in Steps 3 and 4 are only
guaranteed to find a local minimum with respect to the SSE since they are
based on optimizing the SSE for specific choices of the centroids and clusters,
rather than for all possible choices. We will later see an example in which this
leads to a suboptimal clustering.
Document DataTo illustrate that K-means is not restricted to data in
Euclidean space, we consider document data and the cosine similarity measure.
Here we assume that the document data is represented as a document-term
matrix as described on page 31.  Our objective is to maximize the similarity
of the documents in a cluster to the cluster centroid; this quantity is known
as thecohesionof the cluster.  For this objective it can be shown that the
cluster centroid is, as for Euclidean data, the mean.  The analogous quantity
to the total SSE is the total cohesion, which is given by Equation 8.3.
Total Cohesion =
K
∑
i=1
∑
x∈C
i
cosine(x,c
i
)(8.3)
The General CaseThere are a number of choices for the proximity func-
tion, centroid, and objective function that can be used in the basic K-means

8.2K-means501
Table 8.2.K-means: Common choices for proximity, centroids, and objective functions.
Proximity FunctionCentroidObjective Function
Manhattan (L
1
)medianMinimize sum of the L
1
distance of an ob-
ject to its cluster centroid
Squared Euclidean (L
2
2
)meanMinimize sum of the squared L
2
distance
of an object to its cluster centroid
cosinemeanMaximize sum of the cosine similarity of
an object to its cluster centroid
Bregman divergencemeanMinimize sum of the Bregman divergence
of an object to its cluster centroid
algorithm and that are guaranteed to converge. Table 8.2 shows some possible
choices, including the two that we have just discussed.  Notice that for Man-
hattan (L
1
) distance and the objective of minimizing the sum of the distances,
the appropriate centroid is the median of the points in a cluster.
The last entry in the table, Bregman divergence (Section 2.4.5), is actually
a class of proximity measures that includes the squared Euclidean distance, L
2
2
,
the Mahalanobis distance, and cosine similarity. The importance of Bregman
divergence functions is that any such function can be used as the basis of a K-
means style clustering algorithm with the mean as the centroid.  Specifically,
if we use a Bregman divergence as our proximity function, then the result-
ing clustering algorithm has the usual properties of K-means with respect to
convergence, local minima, etc. Furthermore, the properties of such a cluster-
ing algorithm can be developed for all possible Bregman divergences. Indeed,
K-means algorithms that use cosine similarity or squared Euclidean distance
are particular instances of a general clustering algorithm based on Bregman
divergences.
For the rest our K-means discussion, we use two-dimensional data since
it is easy to explain K-means and its properties for this type of data.  But,
as suggested by the last few paragraphs, K-means is a very general clustering
algorithm and can be used with a wide variety of data types, such as documents
and time series.
Choosing Initial Centroids
When random initialization of centroids is used, different runs of K-means
typically produce different total SSEs. We illustrate this with the set of two-
dimensional points shown in Figure 8.3, which has three natural clusters of
points. Figure 8.4(a) shows a clustering solution that is the global minimum of

502   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
(a) Optimal clustering.(b) Suboptimal clustering.
Figure 8.4.Three optimal and non-optimal clusters.
the SSE for three clusters, while Figure 8.4(b) shows a suboptimal clustering
that is only a local minimum.
Choosing the proper initial centroids is the key step of the basic K-means
procedure.  A common approach is to choose the initial centroids randomly,
but the resulting clusters are often poor.
Example 8.1 (Poor Initial Centroids).Randomly selected initial cen-
troids may be poor.  We provide an example of this using the same data set
used in Figures 8.3 and 8.4.  Figures 8.3 and 8.5 show the clusters that re-
sult from two particular choices of initial centroids.  (For both figures, the
positions of the cluster centroids in the various iterations are indicated by
crosses.) In Figure 8.3, even though all the initial centroids are from one natu-
ral cluster, the minimum SSE clustering is still found. In Figure 8.5, however,
even though the initial centroids seem to be better distributed, we obtain a
suboptimal clustering, with higher squared error.
Example 8.2 (Limits of Random Initialization).One technique that
is commonly used to address the problem of choosing initial centroids is to
perform multiple runs, each with a different set of randomly chosen initial
centroids, and then select the set of clusters with the minimum SSE. While
simple, this strategy may not work very well, depending on the data set and
the number of clusters sought. We demonstrate this using the sample data set
shown in Figure 8.6(a).  The data consists of two pairs of clusters, where the
clusters in each (top-bottom) pair are closer to each other than to the clusters
in the other pair.  Figure 8.6 (b–d) shows that if we start with two initial
centroids per pair of clusters, then even when both centroids are in a single

8.2K-means503
(a) Iteration 1.(b) Iteration 2.(c) Iteration 3.(d) Iteration 4.
Figure 8.5.Poor starting centroids for K-means.
cluster, the centroids will redistribute themselves so that the “true” clusters
are found.  However, Figure 8.7 shows that if a pair of clusters has only one
initial centroid and the other pair has three, then two of the true clusters will
be combined and one true cluster will be split.
Note that an optimal clustering will be obtained as long as two initial
centroids fall anywhere in a pair of clusters, since the centroids will redistribute
themselves,  one to each cluster.   Unfortunately,  as the number of clusters
becomes larger, it is increasingly likely that at least one pair of clusters will
have only one initial centroid.  (See Exercise 4 on page 559.)  In this case,
because the pairs of clusters are farther apart than clusters within a pair, the
K-means algorithm will not redistribute the centroids between pairs of clusters,
and thus, only a local minimum will be achieved.
Because of the problems with using randomly selected initial centroids,
which even repeated runs may not overcome, other techniques are often em-
ployed for initialization.  One effective approach is to take a sample of points
and cluster them using a hierarchical clustering technique.Kclusters are ex-
tracted from the hierarchical clustering, and the centroids of those clusters are
used as the initial centroids. This approach often works well, but is practical
only if (1) the sample is relatively small, e.g., a few hundred to a few thousand
(hierarchical clustering is expensive), and (2)Kis relatively small compared
to the sample size.
The following procedure is another approach to selecting initial centroids.
Select the first point at random or take the centroid of all points.  Then, for
each successive initial centroid, select the point that is farthest from any of
the initial centroids already selected.  In this way, we obtain a set of initial

504   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
(a) Initial points.(b) Iteration 1.
(c) Iteration 2.(d) Iteration 3.
Figure 8.6.Two pairs of clusters with a pair of initial centroids within each pair of clusters.
centroids that is guaranteed to be not only randomly selected but also well
separated.  Unfortunately, such an approach can select outliers, rather than
points in dense regions (clusters). Also, it is expensive to compute the farthest
point from the current set of initial centroids.  To overcome these problems,
this approach is often applied to a sample of the points.  Since outliers are
rare,  they tend  not  to  show up  in a random sample.   In contrast,  points
from every dense region are likely to be included unless the sample size is very
small. Also, the computation involved in finding the initial centroids is greatly
reduced because the sample size is typically much smaller than the number of
points.
Later on, we will discuss two other approaches that are useful for produc-
ing better-quality (lower SSE) clusterings:  using a variant of K-means that

8.2K-means505
(a) Iteration 1.(b) Iteration 2.
(c) Iteration 3.(d) Iteration 4.
Figure 8.7.Two pairs of clusters with more or fewer than two initial centroids within a pair of clusters.
is less susceptible to initialization problems (bisecting K-means) and using
postprocessing to “fixup” the set of clusters produced.
Time and Space Complexity
The space requirements for K-means are modest because only the data points
and centroids are stored.  Specifically, the storage required isO((m+K)n),
wheremis the number of points andnis the number of attributes. The time
requirements for K-means are also modest—basically linear in the number of
data points. In particular, the time required isO(I∗K∗m∗n), whereIis the
number of iterations required for convergence. As mentioned,Iis often small
and can usually be safely bounded, as most changes typically occur in the

506   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
first few iterations. Therefore, K-means is linear inm, the number of points,
and is efficient as well as simple provided thatK, the number of clusters, is
significantly less thanm.
8.2.2   K-means: Additional Issues
Handling Empty Clusters
One of the problems with the basic K-means algorithm given earlier is that
empty clusters can be obtained if no points are allocated to a cluster during
the assignment step.  If this happens, then a strategy is needed to choose a
replacement centroid, since otherwise, the squared error will be larger than
necessary.  One approach is to choose the point that is farthest away from
any current centroid. If nothing else, this eliminates the point that currently
contributes most to the total squared error.  Another approach is to choose
the replacement centroid from the cluster that has the highest SSE. This will
typically split the cluster and reduce the overall SSE of the clustering. If there
are several empty clusters, then this process can be repeated several times.
Outliers
When the squared error criterion is used, outliers can unduly influence the
clusters that are found. In particular, when outliers are present, the resulting
cluster centroids (prototypes) may not be as representative as they otherwise
would be and thus, the SSE will be higher as well. Because of this, it is often
useful to discover outliers and eliminate them beforehand.  It is important,
however, to appreciate that there are certain clustering applications for which
outliers should not be eliminated.   When clustering is used for data com-
pression, every point must be clustered, and in some cases, such as financial
analysis, apparent outliers, e.g., unusually profitable customers, can be the
most interesting points.
An obvious issue is how to identify outliers.  A number of techniques for
identifying outliers will be discussed in Chapter 10. If we use approaches that
remove outliers before clustering, we avoid clustering points that will not clus-
ter well. Alternatively, outliers can also be identified in a postprocessing step.
For instance, we can keep track of the SSE contributed by each point, and
eliminate those points with unusually high contributions, especially over mul-
tiple runs. Also, we may want to eliminate small clusters since they frequently
represent groups of outliers.

8.2K-means507
Reducing the SSE with Postprocessing
An obvious way to reduce the SSE is to find more clusters, i.e., to use a larger
K.  However, in many cases, we would like to improve the SSE, but don’t
want to increase the number of clusters.  This is often possible because K-
means typically converges to a local minimum.  Various techniques are used
to “fix up” the resulting clusters in order to produce a clustering that has
lower SSE. The strategy is to focus on individual clusters since the total SSE
is simply the sum of the SSE contributed by each cluster.  (We will use the
terminologytotal SSEandcluster SSE, respectively, to avoid any potential
confusion.)  We can change the total SSE by performing various operations
on the clusters, such as splitting or merging clusters.  One commonly used
approach is to use alternate cluster splitting and merging phases.  During a
splitting phase, clusters are divided, while during a merging phase, clusters
are combined. In this way, it is often possible to escape local SSE minima and
still produce a clustering solution with the desired number of clusters.  The
following are some techniques used in the splitting and merging phases.
Two strategies that decrease the total SSE by increasing the number of
clusters are the following:
Split a cluster:The cluster with the largest SSE is usually chosen, but we
could also split the cluster with the largest standard deviation for one
particular attribute.
Introduce a new cluster centroid:Often the point that is farthest from
any cluster center is chosen.  We can easily determine this if we keep
track of the SSE contributed by each point.  Another approach is to
choose randomly from all points or from the points with the highest
SSE.
Two strategies that decrease the number of clusters, while trying to mini-
mize the increase in total SSE, are the following:
Disperse a cluster:This is accomplished by removing the centroid that cor-
responds to the cluster and reassigning the points to other clusters. Ide-
ally, the cluster that is dispersed should be the one that increases the
total SSE the least.
Merge two clusters:The clusters with the closest centroids are typically
chosen, although another, perhaps better, approach is to merge the two
clusters that result in the smallest increase in total  SSE.  These two
merging strategies are the same ones that are used in the hierarchical

508   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
clustering techniques known as the centroid method and Ward’s method,
respectively. Both methods are discussed in Section 8.3.
Updating Centroids Incrementally
Instead of updating cluster centroids after all points have been assigned to a
cluster, the centroids can be updated incrementally, after each assignment of
a point to a cluster.  Notice that this requires either zero or two updates to
cluster centroids at each step, since a point either moves to a new cluster (two
updates) or stays in its current cluster (zero updates).  Using an incremental
update strategy guarantees that empty clusters are not produced since all
clusters start with a single point, and if a cluster ever has only one point, then
that point will always be reassigned to the same cluster.
In addition, if incremental updating is used, the relative weight of the point
being added may be adjusted; e.g., the weight of points is often decreased as
the clustering proceeds.  While this can result in better accuracy and faster
convergence, it can be difficult to make a good choice for the relative weight,
especially in a wide variety of situations.  These update issues are similar to
those involved in updating weights for artificial neural networks.
Yet another benefit of incremental updates has to do with using objectives
other than “minimize SSE.” Suppose that we are given an arbitrary objective
function to measure the goodness of a set of clusters.  When we process an
individual point, we can compute the value of the objective function for each
possible cluster assignment, and then choose the one that optimizes the objec-
tive.  Specific examples of alternative objective functions are given in Section
8.5.2.
On the negative side, updating centroids incrementally introduces an or-
der dependency.  In other words, the clusters produced may depend on the
order in which the points are processed.  Although this can be addressed by
randomizing the order in which the points are processed, the basic K-means
approach of updating the centroids after all points have been assigned to clus-
ters has no order dependency.  Also, incremental updates are slightly more
expensive.   However,  K-means converges rather quickly,  and therefore,  the
number of points switching clusters quickly becomes relatively small.
8.2.3   Bisecting K-means
The bisecting K-means algorithm is a straightforward extension of the basic
K-means algorithm that is based on a simple idea: to obtainKclusters, split
the set of all points into two clusters, select one of these clusters to split, and

8.2K-means509
so on, untilKclusters have been produced. The details of bisecting K-means
are given by Algorithm 8.2.
Algorithm 8.2Bisecting K-means algorithm.
1:Initialize the list of clusters to contain the cluster consisting of all points.
2:repeat
3:Remove a cluster from the list of clusters.
4:{Perform several “trial” bisections of the chosen cluster.}
5:fori=1tonumber of trialsdo
6:Bisect the selected cluster using basic K-means.
7:end for
8:Select the two clusters from the bisection with the lowest total SSE.
9:Add these two clusters to the list of clusters.
10:untilUntil the list of clusters containsKclusters.
There are a number of different ways to choose which cluster to split. We
can choose the largest cluster at each step, choose the one with the largest
SSE, or use a criterion based on both size and SSE. Different choices result in
different clusters.
We often refine the resulting clusters by using their centroids as the initial
centroids for the basic K-means algorithm. This is necessary because, although
the K-means algorithm is guaranteed to find a clustering that represents a local
minimum with respect to the SSE, in bisecting K-means we are using the K-
means algorithm “locally,” i.e., to bisect individual clusters.  Therefore, the
final set of clusters does not represent a clustering that is a local minimum
with respect to the total SSE.
Example 8.3 (Bisecting K-means and Initialization).To illustrate that
bisecting K-means is less susceptible to initialization problems, we show, in
Figure 8.8, how bisecting K-means finds four clusters in the data set originally
shown in Figure 8.6(a).   In iteration 1, two pairs of clusters are found;  in
iteration 2, the rightmost pair of clusters is split; and in iteration 3, the leftmost
pair of clusters is split. Bisecting K-means has less trouble with initialization
because it performs several trial bisections and takes the one with the lowest
SSE, and because there are only two centroids at each step.
Finally,  by recording the sequence of clusterings produced as K-means
bisects clusters, we can also use bisecting K-means to produce a hierarchical
clustering.

510   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
(a) Iteration 1.(b) Iteration 2.(c) Iteration 3.
Figure 8.8.Bisecting K-means on the four clusters example.
8.2.4   K-means and Different Types of Clusters
K-means and its variations have a number of limitations with respect to finding
different types of clusters. In particular, K-means has difficulty detecting the
“natural” clusters, when clusters have non-spherical shapes or widely different
sizes or densities. This is illustrated by Figures 8.9, 8.10, and 8.11. In Figure
8.9, K-means cannot find the three natural clusters because one of the clusters
is much larger than the other two, and hence, the larger cluster is broken, while
one of the smaller clusters is combined with a portion of the larger cluster. In
Figure 8.10, K-means fails to find the three natural clusters because the two
smaller clusters are much denser than the larger cluster.  Finally, in Figure
8.11, K-means finds two clusters that mix portions of the two natural clusters
because the shape of the natural clusters is not globular.
The difficulty in these three situations is that the K-means objective func-
tion is a mismatch for the kinds of clusters we are trying to find since it is
minimized by globular clusters of equal size and density or by clusters that are
well separated. However, these limitations can be overcome, in some sense, if
the user is willing to accept a clustering that breaks the natural clusters into a
number of subclusters. Figure 8.12 shows what happens to the three previous
data sets if we find six clusters instead of two or three. Each smaller cluster is
pure in the sense that it contains only points from one of the natural clusters.
8.2.5   Strengths and Weaknesses
K-means is simple and can be used for a wide variety of data types. It is also
quite efficient, even though multiple runs are often performed. Some variants,
including bisecting K-means, are even more efficient, and are less suscepti-
ble to initialization problems.  K-means is not suitable for all types of data,

8.2K-means511
(a) Original points.(b) Three K-means clusters.
Figure 8.9.K-means with clusters of different size.
(a) Original points.(b) Three K-means clusters.
Figure 8.10.K-means with clusters of different density.
(a) Original points.(b) Two K-means clusters.
Figure 8.11.K-means with non-globular clusters.

512   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
(a) Unequal sizes.
(b) Unequal densities.
(c) Non-spherical shapes.
Figure 8.12.Using K-means to find clusters that are subclusters of the natural clusters.

8.2K-means513
however.  It cannot handle non-globular clusters or clusters of different sizes
and densities, although it can typically find pure subclusters if a large enough
number of clusters is specified. K-means also has trouble clustering data that
contains outliers. Outlier detection and removal can help significantly in such
situations. Finally, K-means is restricted to data for which there is a notion of
a center (centroid).  A related technique, K-medoid clustering, does not have
this restriction, but is more expensive.
8.2.6   K-means as an Optimization Problem
Here, we delve into the mathematics behind K-means. This section, which can
be skipped without loss of continuity, requires knowledge of calculus through
partial derivatives. Familiarity with optimization techniques, especially those
based on gradient descent, may also be helpful.
As mentioned earlier, given an objective function such as “minimize SSE,”
clustering can be treated as an optimization problem.  One way to solve this
problem—to find a global optimum—is to enumerate all possible ways of di-
viding the points into clusters and then choose the set of clusters that best
satisfies the objective function, e.g., that minimizes the total SSE. Of course,
this exhaustive strategy is computationally infeasible and as a result, a more
practical approach is needed, even if such an approach finds solutions that are
not guaranteed to be optimal.  One technique, which is known asgradient
descent, is based on picking an initial solution and then repeating the fol-
lowing two steps: compute the change to the solution that best optimizes the
objective function and then update the solution.
We assume that the data is one-dimensional, i.e.,dist(x, y)=(x−y)
2
.
This does not change anything essential, but greatly simplifies the notation.
Derivation of K-means as an Algorithm to Minimize the SSE
In this section, we show how the centroid for the K-means algorithm can be
mathematically derived when the proximity function is Euclidean distance
and the objective is to minimize the SSE. Specifically, we investigate how we
can best update a cluster centroid so that the cluster SSE is minimized.  In
mathematical terms, we seek to minimize Equation 8.1, which we repeat here,
specialized for one-dimensional data.
SSE =
K
∑
i=1
∑
x∈C
i
(c
i
−x)
2
(8.4)

514   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
Here,C
i
is thei
th
cluster,xis a point inC
i
, andc
i
is the mean of thei
th
cluster. See Table 8.1 for a complete list of notation.
We can solve for thek
th
centroidc
k
, which minimizes Equation 8.4, by
differentiating the SSE, setting it equal to 0, and solving, as indicated below.
∂
∂c
k
SSE   =
∂
∂c
k
K
∑
i=1
∑
x∈C
i
(c
i
−x)
2
=
K
∑
i=1
∑
x∈C
i
∂
∂c
k
(c
i
−x)
2
=
∑
x∈C
k
2∗(c
k
−x
k
)=0
∑
x∈C
k
2∗(c
k
−x
k
)=0⇒m
k
c
k
=
∑
x∈C
k
x
k
⇒c
k
=
1
m
k
∑
x∈C
k
x
k
Thus, as previously indicated, the best centroid for minimizing the SSE of
a cluster is the mean of the points in the cluster.
Derivation of K-means for SAE
To demonstrate that the K-means algorithm can be applied to a variety of
different objective functions, we consider how to partition the data intoK
clusters such that the sum of the Manhattan (L
1
) distances of points from the
center of their clusters is minimized.  We are seeking to minimize the sum of
the L
1
absolute errors (SAE) as given by the following equation, wheredist
L
1
is the L
1
distance.  Again, for notational simplicity, we use one-dimensional
data, i.e.,dist
L
1
=|c
i
−x|.
SAE =
K
∑
i=1
∑
x∈C
i
dist
L
1
(c
i
,x)(8.5)
We can solve for thek
th
centroidc
k
, which minimizes Equation 8.5, by
differentiating the SAE, setting it equal to 0, and solving.

8.3Agglomerative Hierarchical Clustering515
∂
∂c
k
SAE   =
∂
∂c
k
K
∑
i=1
∑
x∈C
i
|c
i
−x|
=
K
∑
i=1
∑
x∈C
i
∂
∂c
k
|c
i
−x|
=
∑
x∈C
k
∂
∂c
k
|c
k
−x|=0
∑
x∈C
k
∂
∂c
k
|c
k
−x|=0⇒
∑
x∈C
k
sign(x−c
k
)=0
If we solve forc
k
, we find thatc
k
=median{x∈C
k
}, the median of the
points in the cluster.  The median of a group of points is straightforward to
compute and less susceptible to distortion by outliers.
8.3   Agglomerative Hierarchical Clustering
Hierarchical clustering techniques are a second important category of cluster-
ing methods. As with K-means, these approaches are relatively old compared
to many clustering algorithms, but they still enjoy widespread use. There are
two basic approaches for generating a hierarchical clustering:
Agglomerative:Start with the points as individual clusters and,  at each
step, merge the closest pair of clusters.  This requires defining a notion
of cluster proximity.
Divisive:Start with one, all-inclusive cluster and, at each step, split a cluster
until only singleton clusters of individual points remain. In this case, we
need to decide which cluster to split at each step and how to do the
splitting.
Agglomerative hierarchical clustering techniques are by far the most common,
and, in this section, we will focus exclusively on these methods.  A divisive
hierarchical clustering technique is described in Section 9.4.2.
A hierarchical clustering is often displayed graphically using a tree-like
diagram called adendrogram,  which displays both the cluster-subcluster

516   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
p1   p2   p3 p4
(a) Dendrogram.
p1
p2
p3
p4
(b) Nested cluster diagram.
Figure 8.13.A hierarchical clustering of four points shown as a dendrogram and as nested clusters.
relationships and the order in which the clusters were merged (agglomerative
view) or split (divisive view). For sets of two-dimensional points, such as those
that we will use as examples, a hierarchical clustering can also be graphically
represented using a nested cluster diagram. Figure 8.13 shows an example of
these two types of figures for a set of four two-dimensional points. These points
were clustered using the single-link technique that is described in Section 8.3.2.
8.3.1   Basic Agglomerative Hierarchical Clustering Algorithm
Many agglomerative hierarchical clustering techniques are variations on a sin-
gle approach:  starting with individual points as clusters, successively merge
the two closest clusters until only one cluster remains.  This approach is ex-
pressed more formally in Algorithm 8.3.
Algorithm 8.3Basic agglomerative hierarchical clustering algorithm.
1:Compute the proximity matrix, if necessary.
2:repeat
3:Merge the closest two clusters.
4:Update the proximity matrix to reflect the proximity between the new
cluster and the original clusters.
5:untilOnly one cluster remains.

8.3Agglomerative Hierarchical Clustering517
Defining Proximity between Clusters
The key operation of Algorithm 8.3 is the computation of the proximity be-
tween two clusters, and it is the definition of cluster proximity that differ-
entiates the various agglomerative hierarchical techniques that we will dis-
cuss.  Cluster proximity is typically defined with a particular type of cluster
in mind—see Section 8.1.2.   For example,  many agglomerative hierarchical
clustering techniques, such as MIN, MAX, and Group Average, come from
a graph-based view of clusters.MINdefines cluster proximity as the prox-
imity between the closest two points that are in different clusters, or using
graph terms, the shortest edge between two nodes in different subsets of nodes.
This yields contiguity-based clusters as shown in Figure 8.2(c). Alternatively,
MAXtakes the proximity between the farthest two points in different clusters
to be the cluster proximity, or using graph terms, the longest edge between
two nodes in different subsets of nodes. (If our proximities are distances, then
the names, MIN and MAX, are short and suggestive. For similarities, however,
where higher values indicate closer points, the names seem reversed. For that
reason, we usually prefer to use the alternative names,single linkandcom-
plete link, respectively.) Another graph-based approach, thegroup average
technique, defines cluster proximity to be the average pairwise proximities (av-
erage length of edges) of all pairs of points from different clusters. Figure 8.14
illustrates these three approaches.
(a) MIN (single link.)(b) MAX (complete link.)(c) Group average.
Figure 8.14.Graph-based definitions of cluster proximity
If, instead, we take a prototype-based view, in which each cluster is repre-
sented by a centroid, different definitions of cluster proximity are more natural.
When using centroids, the cluster proximity is commonly defined as the prox-
imity between cluster centroids.  An alternative technique,Ward’smethod,
also assumes that a cluster is represented by its centroid, but it measures the
proximity between two clusters in terms of the increase in the SSE that re-

518   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
sults from merging the two clusters. Like K-means, Ward’s method attempts
to minimize the sum of the squared distances of points from their cluster
centroids.
Time and Space Complexity
The basic agglomerative hierarchical clustering algorithm just presented uses
a proximity matrix.  This requires the storage of
1
2
m
2
proximities (assuming
the proximity matrix is symmetric) wheremis the number of data points.
The space needed to keep track of the clusters is proportional to the number
of clusters, which ism−1, excluding singleton clusters. Hence, the total space
complexity isO(m
2
).
The analysis of the basic agglomerative hierarchical clustering algorithm
is also straightforward with respect to computational complexity.O(m
2
)time
is required to compute the proximity matrix. After that step, there arem−1
iterations involving steps 3 and 4 because there aremclusters at the start and
two clusters are merged during each iteration. If performed as a linear search of
the proximity matrix, then for thei
th
iteration, step 3 requiresO((m−i+1)
2
)
time, which is proportional to the current number of clusters squared.  Step
4 only requiresO(m−i+ 1) time to update the proximity matrix after the
merger of two clusters. (A cluster merger affects onlyO(m−i+ 1) proximities
for the techniques that we consider.)  Without modification, this would yield
a time complexity ofO(m
3
).  If the distances from each cluster to all other
clusters are stored as a sorted list (or heap), it is possible to reduce the cost
of finding the two closest clusters toO(m−i+ 1).  However, because of the
additional complexity of keeping data in a sorted list or heap, the overall time
required for a hierarchical clustering based on Algorithm 8.3 isO(m
2
logm).
The space and time complexity of hierarchical clustering severely limits the
size of data sets that can be processed. We discuss scalability approaches for
clustering algorithms, including hierarchical clustering techniques, in Section
9.5.
8.3.2   Specific Techniques
Sample Data
To illustrate the behavior of the various hierarchical clustering algorithms,
we shall use sample data that consists of 6 two-dimensional points, which are
shown in Figure 8.15. Thexandycoordinates of the points and the Euclidean
distances between them are shown in Tables 8.3 and 8.4, respectively.

8.3Agglomerative Hierarchical Clustering519
0.6
0.5
0.4
0.3
0.2
0.1
0
5
2
3
4
6
1
00.10.20.30.40.50.6
Figure 8.15.Set of 6 two-dimensional points.
PointxCoordinateyCoordinate
p10.400.53
p20.220.38
p30.350.32
p40.260.19
p50.080.41
p60.450.30
Table 8.3.xycoordinates of 6 points.
p1p2p3p4p5p6
p10.000.240.220.370.340.23
p20.240.000.150.200.140.25
p30.220.150.000.150.280.11
p40.370.200.150.000.290.22
p50.340.140.280.290.000.39
p60.230.250.110.220.390.00
Table 8.4.Euclidean distance matrix for 6 points.
Single Link or MIN
For the single link or MIN version of hierarchical clustering, the proximity
of two clusters is defined as the minimum of the distance (maximum of the
similarity) between any two points in the two different clusters.  Using graph
terminology, if you start with all points as singleton clusters and add links
between points one at a time, shortest links first, then these single links com-
bine the points into clusters.  The single link technique is good at handling
non-elliptical shapes, but is sensitive to noise and outliers.
Example 8.4 (Single Link).Figure 8.16 shows the result of applying the
single link technique to our example data set of six points.  Figure 8.16(a)
shows the nested clusters as a sequence of nested ellipses, where the numbers
associated with the ellipses indicate the order of the clustering. Figure 8.16(b)
shows the same information, but as a dendrogram.  The height at which two
clusters are merged in the dendrogram reflects the distance of the two clusters.
For instance, from Table 8.4, we see that the distance between points 3 and 6

520   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
6
4
5
2
1
3
3
2
4
5
1
(a) Single link clustering.
0.2
0.15
0.1
0.05
0
362541
(b) Single link dendrogram.
Figure 8.16.Single link clustering of the six points shown in Figure 8.15.
is 0.11, and that is the height at which they are joined into one cluster in the
dendrogram.  As another example, the distance between clusters{3,6}and
{2,5}is given by
dist({3,6},{2,5})=min(dist(3,2),dist(6,2),dist(3,5),dist(6,5))
=   min(0.15,0.25,0.28,0.39)
=0.15.
Complete Link or MAX or CLIQUE
For the complete link or MAX version of hierarchical clustering, the proximity
of two clusters is defined as the maximum of the distance (minimum of the
similarity) between any two points in the two different clusters.  Using graph
terminology, if you start with all points as singleton clusters and add links
between points one at a time, shortest links first, then a group of points is
not a cluster until all the points in it are completely linked, i.e., form aclique.
Complete link is less susceptible to noise and outliers, but it can break large
clusters and it favors globular shapes.
Example 8.5 (Complete Link).Figure 8.17 shows the results of applying
MAX to the sample data set of six points. As with single link, points 3 and 6

8.3Agglomerative Hierarchical Clustering521
6
4
5
2
1
3
3
2
4
5
1
(a) Complete link clustering.
0.4
0.3
0.2
0.1
0
364125
(b) Complete link dendrogram.
Figure 8.17.Complete link clustering of the six points shown in Figure 8.15.
are merged first. However,{3,6}is merged with{4}, instead of{2,5}or{1}
because
dist({3,6},{4})=max(dist(3,4),dist(6,4))
=   max(0.15,0.22)
=0.22.
dist({3,6},{2,5})=max(dist(3,2),dist(6,2),dist(3,5),dist(6,5))
=   max(0.15,0.25,0.28,0.39)
=0.39.
dist({3,6},{1})=max(dist(3,1),dist(6,1))
=   max(0.22,0.23)
=0.23.
Group Average
For the group average version of hierarchical clustering, the proximity of two
clusters is defined as the average pairwise proximity among all pairs of points
in the different clusters. This is an intermediate approach between the single
and complete link approaches.  Thus, for group average, the cluster proxim-

522   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
6
4
5
2
1
3
3
2
4
5
1
(a) Group average clustering.
0.2
0.25
0.1
0
0.15
0.05
364251
(b) Group average dendrogram.
Figure 8.18.Group average clustering of the six points shown in Figure 8.15.
ityproximity(C
i
,C
j
) of clustersC
i
andC
j
, which are of sizem
i
andm
j
,
respectively, is expressed by the following equation:
proximity(C
i
,C
j
)=
∑
x∈C
i
y∈C
j
proximity(x,y)
m
i
∗m
j
.(8.6)
Example 8.6 (Group Average).Figure 8.18 shows the results of applying
the group average approach to the sample data set of six points. To illustrate
how group average works, we calculate the distance between some clusters.
dist({3,6,4},{1})=(0.22 + 0.37 + 0.23)/(3∗1)
=0.28
dist({2,5},{1})=(0.2357 + 0.3421)/(2∗1)
=0.2889
dist({3,6,4},{2,5})=(0.15 + 0.28 + 0.25 + 0.39 + 0.20 + 0.29)/(6∗2)
=0.26
Becausedist({3,6,4}
,{2,5}) is smaller thandist({3,6,4},{1}) anddist({2,5},{1}),
clusters{3,6,4}and{2,5}are merged at the fourth stage.

8.3Agglomerative Hierarchical Clustering523
6
5
2
1
3
3
2
4
5
1
4
(a) Ward’s clustering.
0.2
0.25
0.1
0
0.15
0.05
364125
(b) Ward’s dendrogram.
Figure 8.19.Ward’s clustering of the six points shown in Figure 8.15.
Ward’s Method and Centroid Methods
For Ward’s method, the proximity between two clusters is defined as the in-
crease in the squared error that results when two clusters are merged.  Thus,
this method uses the same objective function as K-means clustering.  While
it may seem that this feature makes Ward’s method somewhat distinct from
other hierarchical techniques, it can be shown mathematically that Ward’s
method is very similar to the group average method when the proximity be-
tween two points is taken to be the square of the distance between them.
Example 8.7 (Ward’s Method).Figure 8.19 shows the results of applying
Ward’s method to the sample data set of six points.  The clustering that is
produced is different from those produced by single link, complete link, and
group average.
Centroid methods calculate the proximity between two clusters by calcu-
lating the distance between the centroids of clusters.  These techniques may
seem similar to K-means, but as we have remarked, Ward’s method is the
correct hierarchical analog.
Centroid methods also have a characteristic—often considered bad—that
is not possessed by the other hierarchical clustering techniques that we have
discussed:  the possibility ofinversions.  Specifically, two clusters that are
merged may be more similar (less distant) than the pair of clusters that were
merged  in  a  previous  step.   For  the  other  methods,  the  distance  between

524   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
Table 8.5.Table of Lance-Williams coefficients for common hierarchical clustering approaches.
Clustering Methodα
A
α
B
βγ
Single Link1/21/20−1/2
Complete Link1/21/201/2
Group Average
m
A
m
A
+m
B
m
B
m
A
+m
B
00
Centroid
m
A
m
A
+m
B
m
B
m
A
+m
B
−m
A
m
B
(m
A
+m
B
)
2
0
Ward’s
m
A
+m
Q
m
A
+m
B
+m
Q
m
B
+m
Q
m
A
+m
B
+m
Q
−m
Q
m
A
+m
B
+m
Q
0
merged clusters monotonically increases (or is, at worst, non-increasing) as
we proceed from singleton clusters to one all-inclusive cluster.
8.3.3   The Lance-Williams Formula for Cluster Proximity
Any of the cluster proximities that we have discussed in this section can be
viewed as a choice of different parameters (in the Lance-Williams formula
shown below in Equation 8.7) for the proximity between clustersQandR,
whereRis formed by merging clustersAandB.  In this equation,p(., .)is
a proximity function, whilem
A
,m
B
, andm
Q
are the number of points in
clustersA,B, andQ, respectively. In other words, after we merge clustersA
andBto form clusterR, the proximity of the new cluster,R,toanexisting
cluster,Q, is a linear function of the proximities ofQwith respect to the
original clustersAandB. Table 8.5 shows the values of these coefficients for
the techniques that we have discussed.
p(R, Q)=α
A
p(A, Q)+α
B
p(B, Q)+βp(A, B)+γ|p(A, Q)−p(B, Q)|(8.7)
Any  hierarchical  clustering  technique  that  can  be  expressed  using  the
Lance-Williams formula does not need to keep the original data points.  In-
stead, the proximity matrix is updated as clustering occurs.  While a general
formula is appealing, especially for implementation, it is easier to understand
the different hierarchical methods by looking directly at the definition of clus-
ter proximity that each method uses.
8.3.4   Key Issues in Hierarchical Clustering
Lack of a Global Objective Function
We previously mentioned that agglomerative hierarchical clustering cannot be
viewed as globally optimizing an objective function.  Instead, agglomerative
hierarchical clustering techniques use various criteria to decide locally, at each

8.3Agglomerative Hierarchical Clustering525
step, which clusters should be merged (or split for divisive approaches). This
approach yields clustering algorithms that avoid the difficulty of attempting
to solve a hard combinatorial optimization problem.  (It can be shown that
the general clustering problem for an objective function such as “minimize
SSE” is computationally infeasible.)  Furthermore, such approaches do not
have problems with local minima or difficulties in choosing initial points.  Of
course, the time complexity ofO(m
2
logm) and the space complexity ofO(m
2
)
are prohibitive in many cases.
Ability to Handle Different Cluster Sizes
One aspect of agglomerative hierarchical clustering that we have not yet dis-
cussed is how to treat the relative sizes of the pairs of clusters that are merged.
(This discussion applies only to cluster proximity schemes that involve sums,
such as centroid,  Ward’s,  and group average.)   There are two approaches:
weighted, which treats all clusters equally, andunweighted, which takes
the number of points in each cluster into account. Note that the terminology
of weighted or unweighted refers to the data points, not the clusters. In other
words, treating clusters of unequal size equally gives different weights to the
points in different clusters, while taking the cluster size into account gives
points in different clusters the same weight.
We will illustrate this using the group average technique discussed in Sec-
tion 8.3.2, which is the unweighted version of the group average technique.
In the clustering literature, the full name of this approach is the Unweighted
Pair Group Method using Arithmetic averages (UPGMA). In Table 8.5, which
gives the formula for updating cluster similarity, the coefficients for UPGMA
involve the size of each of the clusters that were merged:α
A
=
m
A
m
A
+m
B
,α
B
=
m
B
m
A
+m
B
,β=0,γ= 0.  For the weighted version of group average—known as
WPGMA—the coefficients are constants:α
A
=1/2,α
B
=1/2,β=0,γ=0.
In general, unweighted approaches are preferred unless there is reason to be-
lieve that individual points should have different weights; e.g., perhaps classes
of objects have been unevenly sampled.
Merging Decisions Are Final
Agglomerative hierarchical clustering algorithms tend to make good local de-
cisions about combining two clusters since they can use information about the
pairwise similarity of all points.  However, once a decision is made to merge
two clusters, it cannot be undone at a later time.  This approach prevents
a local optimization criterion from becoming a global optimization criterion.

526   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
For example, although the “minimize squared error” criterion from K-means
is used in deciding which clusters to merge in Ward’s method, the clusters at
each level do not represent local minima with respect to the total SSE. Indeed,
the clusters are not even stable, in the sense that a point in one cluster may
be closer to the centroid of some other cluster than it is to the centroid of its
current cluster. Nonetheless, Ward’s method is often used as a robust method
of initializing a K-means clustering, indicating that a local “minimize squared
error” objective function does have a connection to a global “minimize squared
error” objective function.
There are some techniques that attempt to overcome the limitation that
merges are final. One approach attempts to fix up the hierarchical clustering
by moving branches of the tree around so as to improve a global objective
function. Another approach uses a partitional clustering technique such as K-
means to create many small clusters, and then performs hierarchical clustering
using these small clusters as the starting point.
8.3.5   Strengths and Weaknesses
The strengths and weakness of specific agglomerative hierarchical clustering
algorithms were discussed above.  More generally, such algorithms are typi-
cally used because the underlying application, e.g., creation of a taxonomy,
requires a hierarchy.  Also, there have been some studies that suggest that
these algorithms can produce better-quality clusters. However, agglomerative
hierarchical clustering algorithms are expensive in terms of their computa-
tional and storage requirements.  The fact that all merges are final can also
cause trouble for noisy, high-dimensional data, such as document data.  In
turn, these two problems can be addressed to some degree by first partially
clustering the data using another technique, such as K-means.
8.4   DBSCAN
Density-based clustering locates regions of high density that are separated
from one another by regions of low density.  DBSCAN is a simple and effec-
tive density-based clustering algorithm that illustrates a number of important
concepts that are important for any density-based clustering approach. In this
section, we focus solely on DBSCAN after first considering the key notion of
density.  Other algorithms for finding density-based clusters are described in
the next chapter.

8.4DBSCAN527
8.4.1   Traditional Density: Center-Based Approach
Although there are not as many approaches for defining density as there are for
defining similarity, there are several distinct methods.  In this section we dis-
cuss the center-based approach on which DBSCAN is based. Other definitions
of density will be presented in Chapter 9.
In the center-based approach, density is estimated for a particular point in
the data set by counting the number of points within a specified radius,Eps,
of that point.  This includes the point itself.  This technique is graphically
illustrated by Figure 8.20.  The number of points within a radius ofEpsof
pointAis 7, includingAitself.
This method is simple to implement, but the density of any point will
depend on the specified radius.  For instance, if the radius is large enough,
then all points will have a density ofm, the number of points in the data set.
Likewise, if the radius is too small, then all points will have a density of 1.
An approach for deciding on the appropriate radius for low-dimensional data
is given in the next section in the context of our discussion of DBSCAN.
Classification of Points According to Center-Based Density
The center-based approach to density allows us to classify a point as being (1)
in the interior of a dense region (a core point), (2) on the edge of a dense region
(a border point), or (3) in a sparsely occupied region (a noise or background
point).  Figure 8.21 graphically illustrates the concepts of core, border, and
noise points using a collection of two-dimensional points.  The following text
provides a more precise description.
Core points:These points are in the interior of a density-based cluster.  A
point is a core point if the number of points within a given neighborhood
around the point as determined by the distance function and a user-
specified distance parameter,Eps, exceeds a certain threshold,M inP ts,
which is also a user-specified parameter.  In Figure 8.21, pointAis a
core point, for the indicated radius (Eps)ifM inP ts≤7.
Border points:A border point is not a core point, but falls within the neigh-
borhood of a core point.  In Figure 8.21, pointBis a border point.  A
border point can fall within the neighborhoods of several core points.
Noise points:A noise point is any point that is neither a core point nor a
border point. In Figure 8.21, pointCis a noise point.

528   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
A
Eps
Figure 8.20.Center-based
density.
C
noise point
B
border point
A
core point
Eps
Eps
Eps
Figure 8.21.Core, border, and noise points.
8.4.2   The DBSCAN Algorithm
Given the previous definitions of core points, border points, and noise points,
the DBSCAN algorithm can be informally described as follows. Any two core
points that are close enough—within a distanceEpsof one another—are put
in the same cluster. Likewise, any border point that is close enough to a core
point is put in the same cluster as the core point. (Ties may need to be resolved
if a border point is close to core points from different clusters.)  Noise points
are discarded. The formal details are given in Algorithm 8.4. This algorithm
uses the same concepts and finds the same clusters as the original DBSCAN,
but is optimized for simplicity, not efficiency.
Algorithm 8.4DBSCAN algorithm.
1:Label all points as core, border, or noise points.
2:Eliminate noise points.
3:Put an edge between all core points that are withinEpsof each other.
4:Make each group of connected core points into a separate cluster.
5:Assign each border point to one of the clusters of its associated core points.
Time and Space Complexity
The basic time complexity of the DBSCAN algorithm isO(m×time to find
points in theEps-neighborhood), wheremis the number of points.  In the
worst case, this complexity isO(m
2
).  However, in low-dimensional spaces,
there are data structures, such as kd-trees, that allow efficient retrieval of all

8.4DBSCAN529
points within a given distance of a specified point, and the time complexity
can be as low asO(mlogm).  The space requirement of DBSCAN, even for
high-dimensional data, isO(m) because it is only necessary to keep a small
amount of data for each point, i.e., the cluster label and the identification of
each point as a core, border, or noise point.
Selection of DBSCAN Parameters
There is, of course, the issue of how to determine the parametersEpsand
M inP ts.  The basic approach is to look at the behavior of the distance from
a point to itsk
th
nearest neighbor, which we will call thek-dist.  For points
that belong to some cluster, the value ofk-dist will be small ifkis not larger
than the cluster size. Note that there will be some variation, depending on the
density of the cluster and the random distribution of points, but on average,
the range of variation will not be huge if the cluster densities are not radically
different.  However, for points that are not in a cluster, such as noise points,
thek-dist will be relatively large.  Therefore, if we compute thek-dist for
all the data points for somek, sort them in increasing order, and then plot
the sorted values, we expect to see a sharp change at the value ofk-dist that
corresponds to a suitable value ofEps.  If we select this distance as theEps
parameter and take the value ofkas theM inP tsparameter, then points for
whichk-dist is less thanEpswill be labeled as core points, while other points
will be labeled as noise or border points.
Figure 8.22 shows a sample data set, while thek-dist graph for the data is
given in Figure 8.23. The value ofEpsthat is determined in this way depends
onk, but does not change dramatically askchanges.  If the value ofkis too
small, then even a small number of closely spaced points that are noise or
outliers will be incorrectly labeled as clusters.  If the value ofkis too large,
then small clusters (of size less thank) are likely to be labeled as noise. The
original DBSCAN algorithm used a value ofk= 4, which appears to be a
reasonable value for most two-dimensional data sets.
Clusters of Varying Density
DBSCAN can have trouble with density if the density of clusters varies widely.
Consider Figure 8.24, which shows four clusters embedded in noise. The den-
sity of the clusters and noise regions is indicated by their darkness. The noise
around the pair of denser clusters,AandB, has the same density as clusters
CandD. If theEpsthreshold is low enough that DBSCAN findsCandDas
clusters, thenAandBand the points surrounding them will become a single

530   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
Figure 8.22.Sample data.
50
40
30
20
10
0
050010001500200025003000
Points Sorted by Distance to 4th Nearest Neighbor
4th Nearest Neighbor Distance
Figure 8.23.K-dist plot for sample data.
Cluster CCluster BCluster ACluster D
NoiseNoise
Figure 8.24.Four clusters embedded in noise.
cluster. If theEpsthreshold is high enough that DBSCAN findsAandBas
separate clusters, and the points surrounding them are marked as noise, then
CandDand the points surrounding them will also be marked as noise.
An Example
To illustrate the use of DBSCAN, we show the clusters that it finds in the
relatively complicated two-dimensional data set shown in Figure 8.22.  This
data set consists of 3000 two-dimensional points.  TheEpsthreshold for this
data was found by plotting the sorted distances of the fourth nearest neighbor
of each point (Figure 8.23) and identifying the value at which there is a sharp
increase.  We selectedEps= 10, which corresponds to the knee of the curve.
The clusters found by DBSCAN using these parameters, i.e.,M inP ts= 4 and
Eps= 10, are shown in Figure 8.25(a).  The core points, border points, and
noise points are displayed in Figure 8.25(b).
8.4.3   Strengths and Weaknesses
Because DBSCAN uses a density-based definition of a cluster, it is relatively
resistant to noise and can handle clusters of arbitrary shapes and sizes. Thus,

8.4DBSCAN531
(a) Clusters found by DBSCAN.
x – Noise Point          + – Border Point             – Core Point
(b) Core, border, and noise points.
Figure 8.25.DBSCAN clustering of 3000 two-dimensional points.

532   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
DBSCAN can find many clusters that could not be found using K-means,
such as those in Figure 8.22. As indicated previously, however, DBSCAN has
trouble when the clusters have widely varying densities.  It also has trouble
with high-dimensional data because density is more difficult to define for such
data.  One possible approach to dealing with such issues is given in Section
9.4.8.  Finally, DBSCAN can be expensive when the computation of nearest
neighbors requires computing all pairwise proximities, as is usually the case
for high-dimensional data.
8.5   Cluster Evaluation
In supervised classification, the evaluation of the resulting classification model
is an integral part of the process of developing a classification model,  and
there are well-accepted evaluation measures and procedures,  e.g.,  accuracy
and cross-validation, respectively. However, because of its very nature, cluster
evaluation is not a well-developed or commonly used part of cluster analysis.
Nonetheless, cluster evaluation, orcluster validationas it is more tradition-
ally called, is important, and this section will review some of the most common
and easily applied approaches.
There might be some confusion as to why cluster evaluation is necessary.
Many times, cluster analysis is conducted as a part of an exploratory data
analysis.  Hence, evaluation seems like an unnecessarily complicated addition
to  what  is supposed  to  be  an  informal  process.   Furthermore,  since there
are a number of different types of clusters—in some sense,  each clustering
algorithm defines its own type of cluster—it may seem that each situation
might require a different evaluation measure.  For instance, K-means clusters
might be evaluated in terms of the SSE, but for density-based clusters, which
need not be globular, SSE would not work well at all.
Nonetheless, cluster evaluation should be a part of any cluster analysis.
A key motivation is that almost every clustering algorithm will find clusters
in a data set,  even if that data set has no natural cluster structure.   For
instance, consider Figure 8.26, which shows the result of clustering 100 points
that are randomly (uniformly) distributed on the unit square.  The original
points are shown in Figure 8.26(a), while the clusters found by DBSCAN, K-
means, and complete link are shown in Figures 8.26(b), 8.26(c), and 8.26(d),
respectively. Since DBSCAN found three clusters (after we setEpsby looking
at the distances of the fourth nearest neighbors), we set K-means and complete
link to find three clusters as well.  (In Figure 8.26(b) the noise is shown by
the small markers.)  However, the clusters do not look compelling for any of

8.5Cluster Evaluation533
the three methods.  In higher dimensions, such problems cannot be so easily
detected.
8.5.1   Overview
Being able to distinguish whether there is non-random structure in the data
is just one important aspect of cluster validation.  The following is a list of
several important issues for cluster validation.
1.  Determining theclustering tendencyof a set of data, i.e., distinguish-
ing whether non-random structure actually exists in the data.
2.  Determining the correct number of clusters.
3.  Evaluating how well the results of a cluster analysis fit the datawithout
reference to external information.
4.  Comparing the results of a cluster analysis to externally known results,
such as externally provided class labels.
5.  Comparing two sets of clusters to determine which is better.
Notice that items 1, 2, and 3 do not make use of any external information—
they are unsupervised techniques—while item 4 requires external information.
Item 5 can be performed in either a supervised or an unsupervised manner. A
further distinction can be made with respect to items 3, 4, and 5: Do we want
to evaluate the entire clustering or just individual clusters?
While it is possible to develop various numerical measures to assess the
different aspects of cluster validity mentioned above, there are a number of
challenges.  First, a measure of cluster validity may be quite limited in the
scope of its applicability.  For example, most work on measures of clustering
tendency has been done for two- or three-dimensional spatial data.  Second,
we need a framework to interpret any measure. If we obtain a value of 10 for a
measure that evaluates how well cluster labels match externally provided class
labels, does this value represent a good, fair, or poor match?  The goodness
of a match often can be measured by looking at the statistical distribution of
this value, i.e., how likely it is that such a value occurs by chance. Finally, if
a measure is too complicated to apply or to understand, then few will use it.
The evaluation measures,  or indices,  that are applied to judge various
aspects of cluster validity are traditionally classified into the following three
types.

534   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
(a) Original points.(b) Three clusters found by DBSCAN.
(c) Three clusters found by K-means.(d)  Three  clusters  found  by  complete
link.
Figure 8.26.Clustering of 100 uniformly distributed points.

8.5Cluster Evaluation535
Unsupervised.Measures the goodness of a clustering structure without re-
spect to external information.  An example of this is the SSE. Unsu-
pervised measures of cluster validity are often further divided into two
classes: measures ofcluster cohesion(compactness, tightness), which
determine how closely related the objects in a cluster are, and measures
ofcluster separation(isolation), which determine how distinct or well-
separated a cluster is from other clusters.  Unsupervised measures are
often calledinternal indicesbecause they use only information present
in the data set.
Supervised.Measures the extent to which the clustering structure discovered
by a clustering algorithm matches some external structure. An example
of a supervised index is entropy, which measures how well cluster labels
match externally supplied class labels.  Supervised measures are often
calledexternal indicesbecause they use information not present in
the data set.
Relative.Compares different clusterings or clusters. A relative cluster eval-
uation measure is a supervised or unsupervised evaluation measure that
is used for the purpose of comparison.  Thus, relative measures are not
actually a separate type of cluster evaluation measure, but are instead a
specific use of such measures.  As an example, two K-means clusterings
can be compared using either the SSE or entropy.
In the remainder of this section, we provide specific details concerning clus-
ter validity. We first describe topics related to unsupervised cluster evaluation,
beginning with (1) measures based on cohesion and separation, and (2) two
techniques based on the proximity matrix.  Since these approaches are useful
only for partitional sets of clusters, we also describe the popular cophenetic
correlation coefficient, which can be used for the unsupervised evaluation of
a hierarchical clustering.  We end our discussion of unsupervised evaluation
with brief discussions about finding the correct number of clusters and evalu-
ating clustering tendency. We then consider supervised approaches to cluster
validity, such as entropy, purity, and the Jaccard measure.  We conclude this
section with a short discussion of how to interpret the values of (unsupervised
or supervised) validity measures.

536   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
8.5.2   Unsupervised  Cluster  Evaluation  Using  Cohesion  and
Separation
Many internal measures of cluster validity for partitional clustering schemes
are based on the notions of cohesion or separation.  In this section, we use
cluster validity measures for prototype- and graph-based clustering techniques
to explore these notions in some detail.  In the process, we will also see some
interesting relationships between prototype- and graph-based clustering.
In general, we can consider expressing overall cluster validity for a set of
Kclusters as a weighted sum of the validity of individual clusters,
overall validity=
K
∑
i=1
w
i
validity(C
i
).(8.8)
Thevalidityfunction can be cohesion, separation, or some combination of these
quantities.  The weights will vary depending on the cluster validity measure.
In some cases, the weights are simply 1 or the size of the cluster, while in other
cases they reflect a more complicated property, such as the square root of the
cohesion. See Table 8.6. If the validity function is cohesion, then higher values
are better. If it is separation, then lower values are better.
Graph-Based View of Cohesion and Separation
For graph-based clusters, the cohesion of a cluster can be defined as the sum of
the weights of the links in the proximity graph that connect points within the
cluster. See Figure 8.27(a). (Recall that the proximity graph has data objects
as nodes, a link between each pair of data objects, and a weight assigned to
each link that is the proximity between the two data objects connected by the
link.)  Likewise, the separation between two clusters can be measured by the
sum of the weights of the links from points in one cluster to points in the other
cluster. This is illustrated in Figure 8.27(b).
Mathematically, cohesion and separation for a graph-based cluster can be
expressed using Equations 8.9 and 8.10, respectively. Theproximityfunction
can be a similarity, a dissimilarity, or a simple function of these quantities.
cohesion(C
i
)=
∑
x∈C
i
y∈C
i
proximity(x,y)(8.9)
separation(C
i
,C
j
)=
∑
x∈C
i
y∈C
j
proximity(x,y)(8.10)

8.5Cluster Evaluation537
(a) Cohesion.(b) Separation.
Figure 8.27.Graph-based view of cluster cohesion and separation.
Prototype-Based View of Cohesion and Separation
For prototype-based clusters, the cohesion of a cluster can be defined as the
sum of the proximities with respect to the prototype (centroid or medoid) of
the cluster.  Similarly, the separation between two clusters can be measured
by the proximity of the two cluster prototypes.  This is illustrated in Figure
8.28, where the centroid of a cluster is indicated by a “+”.
Cohesion for a prototype-based cluster is given in Equation 8.11, while
two measures for separation are given in Equations 8.12 and 8.13,  respec-
tively, wherec
i
is the prototype (centroid) of clusterC
i
andcis the overall
prototype (centroid).  There are two measures for separation because, as we
will see shortly, the separation of cluster prototypes from an overall prototype
is sometimes directly related to the separation of cluster prototypes from one
another. Note that Equation 8.11 is the cluster SSE if we let proximity be the
squared Euclidean distance.
cohesion(C
i
)=
∑
x∈C
i
proximity(x,c
i
)(8.11)
separation(C
i
,C
j
)=proximity(c
i
,c
j
)(8.12)
separation(C
i
)=proximity(c
i
,c)(8.13)
Overall Measures of Cohesion and Separation
The previous definitions of cluster cohesion and separation gave us some sim-
ple and well-defined measures of cluster validity that can be combined into
an overall measure of cluster validity by using a weighted sum, as indicated

538   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
+
(a) Cohesion.
+
+
(b) Separation.
Figure 8.28.Prototype-based view of cluster cohesion and separation.
in Equation 8.8.  However, we need to decide what weights to use.  Not sur-
prisingly, the weights used can vary widely, although typically they are some
measure of cluster size.
Table 8.6 provides examples of validity measures based on cohesion and
separation.I
1
is a measure of cohesion in terms of the pairwise proximity of
objects in the cluster divided by the cluster size.I
2
is a measure of cohesion
based on the sum of the proximities of objects in the cluster to the cluster
centroid.E
1
is a measure of separation defined as the proximity of a cluster
centroid to the overall centroid multiplied by the number of objects in the
cluster.G
1
, which is a measure based on both cohesion and separation, is
the sum of the pairwise proximity of all objects in the cluster with all objects
outside the cluster—the total weight of the edges of the proximity graph that
must be cut to separate the cluster from all other clusters—divided by the
sum of the pairwise proximity of objects in the cluster.
Table 8.6.Table of graph-based cluster evaluation measures.
NameCluster MeasureCluster WeightType
I
1
∑
x∈C
i
y∈C
i
proximity(x,y)
1
m
i
graph-based
cohesion
I
2
∑
x∈C
i
proximity(x,c
i
)
1
prototype-based
cohesion
E
1
proximity(c
i
,c)m
i
prototype-based
separation
G
1
∑
k
j=1
j=i
∑
x∈C
i
y∈C
j
proximity(x,y)
1
∑
x∈C
i
y∈C
i
proximity(x,y)
graph-based
separation and
cohesion

8.5Cluster Evaluation539
Note that any unsupervised measure of cluster validity potentially can be
used as an objective function for a clustering algorithm and vice versa.  The
CLUstering TOolkit (CLUTO) (see the bibliographic notes) uses the cluster
evaluation measures described in Table 8.6, as well as some other evaluation
measures not mentioned here, to drive the clustering process. It does this by
using an algorithm that is similar to the incremental K-means algorithm dis-
cussed in Section 8.2.2. Specifically, each point is assigned to the cluster that
produces the best value for the cluster evaluation function.  The cluster eval-
uation measureI
2
corresponds to traditional K-means and produces clusters
that have good SSE values. The other measures produce clusters that are not
as good with respect to SSE, but that are more optimal with respect to the
specified cluster validity measure.
Relationship between Prototype-Based Cohesion and Graph-Based
Cohesion
While the graph-based and prototype-based approaches to measuring the co-
hesion and separation of a cluster seem distinct, for some proximity measures
they are equivalent. For instance, for the SSE and points in Euclidean space,
it can be shown (Equation 8.14) that the average pairwise distance between
the points in a cluster is equivalent to the SSE of the cluster. See Exercise 27
on page 566.
Cluster SSE =
∑
x∈C
i
dist(c
i
,x)
2
=
1
2m
i
∑
x∈C
i
∑
y∈C
i
dist(x,y)
2
(8.14)
Two Approaches to Prototype-Based Separation
When proximity is measured by Euclidean distance, the traditional measure of
separation between clusters is the between group sum of squares (SSB), which
is the sum of the squared distance of a cluster centroid,c
i
, to the overall mean,
c, of all the data points. By summing the SSB over all clusters, we obtain the
total SSB, which is given by Equation 8.15, wherec
i
is the mean of thei
th
cluster andcis the overall mean.  The higher the total SSB of a clustering,
the more separated the clusters are from one another.
Total SSB =
K
∑
i=1
m
i
dist(c
i
,c)
2
(8.15)
It is straightforward to show that the total SSB is directly related to the
pairwise distances between the centroids. In particular, if the cluster sizes are

540   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
equal, i.e.,m
i
=m/K, then this relationship takes the simple form given by
Equation 8.16. (See Exercise 28 on page 566.) It is this type of equivalence that
motivates the definition of prototype separation in terms of both Equations
8.12 and 8.13.
Total SSB =
1
2K
K
∑
i=1
K
∑
j=1
m
K
dist(c
i
,c
j
)
2
(8.16)
Relationship between Cohesion and Separation
In some cases, there is also a strong relationship between cohesion and separa-
tion. Specifically, it is possible to show that the sum of the total SSE and the
total SSB is a constant; i.e., that it is equal to the total sum of squares (TSS),
which is the sum of squares of the distance of each point to the overall mean
of the data. The importance of this result is that minimizing SSE (cohesion)
is equivalent to maximizing SSB (separation).
We provide the proof of this fact below,  since the approach illustrates
techniques that are also applicable to proving the relationships stated in the
last two sections.  To simplify the notation, we assume that the data is one-
dimensional, i.e.,dist(x, y)=(x−y)
2
. Also, we use the fact that the cross-term
∑
K
i=1
∑
x∈C
i
(x−c
i
)(c−c
i
) is 0. (See Exercise 29 on page 566.)
TSS   =
K
∑
i=1
∑
x∈C
i
(x−c)
2
=
K
∑
i=1
∑
x∈C
i
((x−c
i
)−(c−c
i
))
2
=
K
∑
i=1
∑
x∈C
i
(x−c
i
)
2
−2
K
∑
i=1
∑
x∈C
i
(x−c
i
)(c−c
i
)+
K
∑
i=1
∑
x∈C
i
(c−c
i
)
2
=
K
∑
i=1
∑
x∈C
i
(x−c
i
)
2
+
K
∑
i=1
∑
x∈C
i
(c−c
i
)
2
=
K
∑
i=1
∑
x∈C
i
(x−c
i
)
2
+
K
∑
i=1
|C
i
|(c−c
i
)
2
=   SSE + SSB

8.5Cluster Evaluation541
Evaluating Individual Clusters and Objects
So far, we have focused on using cohesion and separation in the overall eval-
uation of a group of clusters.  Many of these measures of cluster validity also
can be used to evaluate individual clusters and objects. For example, we can
rank individual clusters according to their specific value of cluster validity, i.e.,
cluster cohesion or separation. A cluster that has a high value of cohesion may
be considered better than a cluster that has a lower value.  This information
often can be used to improve the quality of a clustering.  If, for example, a
cluster is not very cohesive, then we may want to split it into several subclus-
ters.  On the other hand, if two clusters are relatively cohesive, but not well
separated, we may want to merge them into a single cluster.
We can also evaluate the objects within a cluster in terms of their con-
tribution to the overall cohesion or separation of the cluster.  Objects that
contribute more to the cohesion and separation are near the “interior” of the
cluster.  Those objects for which the opposite is true are probably near the
“edge” of the cluster.  In the following section, we consider a cluster evalua-
tion measure that uses an approach based on these ideas to evaluate points,
clusters, and the entire set of clusters.
The Silhouette Coefficient
The popular method of silhouette coefficients combines both cohesion and sep-
aration. The following steps explain how to compute the silhouette coefficient
for an individual point, a process that consists of the following three steps.
We use distances, but an analogous approach can be used for similarities.
1.  For thei
th
object, calculate its average distance to all other objects in
its cluster. Call this valuea
i
.
2.  For thei
th
object and any cluster not containing the object, calculate
the object’s average distance to all the objects in the given cluster. Find
the minimum such value with respect to all clusters; call this valueb
i
.
3.  For thei
th
object, the silhouette coefficient iss
i
=(b
i
−a
i
)/max(a
i
,b
i
).
The value of the silhouette coefficient can vary between−1 and 1.   A
negative value is undesirable because this corresponds to a case in whicha
i
,
the average distance to points in the cluster, is greater thanb
i
, the minimum
average distance to points in another cluster. We want the silhouette coefficient
to be positive (a
i
<b
i
), and fora
i
to be as close to 0 as possible, since the
coefficient assumes its maximum value of 1 whena
i
=0.

542   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
00.10.20.30.40.50.60.70.80.91
Silhouette Coefficient
Figure 8.29.Silhouette coefficients for points in ten clusters.
We can compute the average silhouette coefficient of a cluster by simply
taking the average of the silhouette coefficients of points belonging to the
cluster. An overall measure of the goodness of a clustering can be obtained by
computing the average silhouette coefficient of all points.
Example 8.8 (Silhouette Coefficient).Figure 8.29 shows a plot of the
silhouette coefficients for points in 10 clusters.  Darker shades indicate lower
silhouette coefficients.
8.5.3   Unsupervised Cluster Evaluation Using the Proximity
Matrix
In this section, we examine a couple of unsupervised approaches for assessing
cluster validity that are based on the proximity matrix. The first compares an
actual and idealized proximity matrix, while the second uses visualization.
Measuring Cluster Validity via Correlation
If we are given the similarity matrix for a data set and the cluster labels from
a cluster analysis of the data set,  then we can evaluate the “goodness” of
the clustering by looking at the correlation between the similarity matrix and
an ideal version of the similarity matrix based on the cluster labels.  (With
minor changes, the following applies to proximity matrices, but for simplicity,
we discuss only similarity matrices.) More specifically, an ideal cluster is one
whose points have a similarity of 1 to all points in the cluster, and a similarity
of 0 to all points in other clusters.  Thus, if we sort the rows and columns
of the similarity matrix so that all objects belonging to the same class are
together, then an ideal similarity matrix has ablock diagonalstructure. In
other words, the similarity is non-zero, i.e., 1, inside the blocks of the similarity

8.5Cluster Evaluation543
matrix whose entries represent intra-cluster similarity, and 0 elsewhere.  The
ideal similarity matrix is constructed by creating a matrix that has one row
and one column for each data point—just like an actual similarity matrix—
and assigning a 1 to an entry if the associated pair of points belongs to the
same cluster. All other entries are 0.
High correlation between the ideal and actual similarity matrices indicates
that the points that belong to the same cluster are close to each other, while
low correlation indicates the opposite.  (Since the actual and ideal similarity
matrices are symmetric, the correlation is calculated only among then(n−1)/2
entries below or above the diagonal of the matrices.) Consequently, this is not
a good measure for many density- or contiguity-based clusters, because they
are not globular and may be closely intertwined with other clusters.
Example 8.9 (Correlation of Actual and Ideal Similarity Matrices).
To illustrate this measure, we calculated the correlation between the ideal and
actual similarity matrices for the K-means clusters shown in Figure 8.26(c)
(random data) and Figure 8.30(a) (data with three well-separated clusters).
The correlations were 0.5810 and 0.9235, respectively, which reflects the ex-
pected result that the clusters found by K-means in the random data are worse
than the clusters found by K-means in data with well-separated clusters.
Judging a Clustering Visually by Its Similarity Matrix
The previous technique suggests a more general, qualitative approach to judg-
ing a set of clusters: Order the similarity matrix with respect to cluster labels
and then plot it.  In theory, if we have well-separated clusters, then the simi-
larity matrix should be roughly block-diagonal. If not, then the patterns dis-
played in the similarity matrix can reveal the relationships between clusters.
Again, all of this can be applied to dissimilarity matrices, but for simplicity,
we will only discuss similarity matrices.
Example 8.10 (Visualizing a Similarity Matrix).Consider the points in
Figure 8.30(a), which form three well-separated clusters. If we use K-means to
group these points into three clusters, then we should have no trouble finding
these clusters since they are well-separated.  The separation of these clusters
is illustrated by the reordered similarity matrix shown in Figure 8.30(b). (For
uniformity, we have transformed the distances into similarities using the for-
mulas=1−(d−min
d)/(maxd−mind).) Figure 8.31 shows the reordered
similarity matrices for clusters found in the random data set of Figure 8.26 by
DBSCAN, K-means, and complete link.

544   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
00.20.40.60.81
0
0.2
0.4
0.6
0.8
1
x
y
(a) Well-separated clusters.
Points
Points
20406080100
10
20
30
40
50
60
70
80
90
100
Similarity
0
1
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
(b) Similarity matrix sorted by K-means
cluster labels.
Figure 8.30.Similarity matrix for well-separated clusters.
The  well-separated  clusters  in  Figure  8.30  show  a  very  strong,  block-
diagonal pattern in the reordered similarity matrix.  However, there are also
weak block diagonal patterns—see Figure 8.31—in the reordered similarity
matrices of the clusterings found by K-means, DBSCAN, and complete link
in the random data.  Just as people can find patterns in clouds, data mining
algorithms can find clusters in random data.  While it is entertaining to find
patterns in clouds, it is pointless and perhaps embarrassing to find clusters in
noise.
This approach may seem hopelessly expensive for large data sets, since
the computation of the proximity matrix takesO(m
2
) time, wheremis the
number of objects, but with sampling, this method can still be used. We can
take a sample of data points from each cluster, compute the similarity between
these points, and plot the result.  It may be necessary to oversample small
clusters and undersample large ones to obtain an adequate representation of
all clusters.
8.5.4   Unsupervised Evaluation of Hierarchical Clustering
The previous approaches to cluster evaluation are intended for partitional
clusterings.  Here we discuss the cophenetic correlation, a popular evaluation
measure for hierarchical clusterings. Thecophenetic distancebetween two
objects is the proximity at which an agglomerative hierarchical clustering tech-

8.5Cluster Evaluation545
Points
Points
20406080100
10
20
30
40
50
60
70
80
90
100
Similarity
0
1
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
(a)  Similarity  matrix
sorted   by   DBSCAN
cluster labels.
Points
Points
20406080100
10
20
30
40
50
60
70
80
90
100
Similarity
0
1
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
(b)  Similarity  matrix
sorted    by    K-means
cluster labels.
Points
Points
20406080100
10
20
30
40
50
60
70
80
90
100
Similarity
0
1
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
(c)  Similarity  matrix
sorted by complete link
cluster labels.
Figure 8.31.Similarity matrices for clusters from random data.
nique puts the objects in the same cluster for the first time. For example, if at
some point in the agglomerative hierarchical clustering process, the smallest
distance between the two clusters that are merged is 0.1, then all points in
one cluster have a cophenetic distance of 0.1 with respect to the points in the
other cluster. In a cophenetic distance matrix, the entries are the cophenetic
distances between each pair of objects.  The cophenetic distance is different
for each hierarchical clustering of a set of points.
Example 8.11 (Cophenetic Distance Matrix).Table 8.7 shows the cophen-
tic distance matrix for the single link clustering shown in Figure 8.16.  (The
data for this figure consists of the 6 two-dimensional points given in Table
8.3.)
Table 8.7.Cophenetic distance matrix for single link and data in table 8.3
PointP1P2P3P4P5P6
P100.2220.2220.2220.2220.222
P20.22200.1480.1510.1390.148
P30.2220.14800.1510.1480.110
P40.2220.1510.15100.1510.151
P50.2220.1390.1480.15100.148
P60.2220.1480.1100.1510.1480
TheCoPhenetic Correlation Coefficient(CPCC) is the correlation
between the entries of this matrix and the original dissimilarity matrix and is

546   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
a standard measure of how well a hierarchical clustering (of a particular type)
fits the data.  One of the most common uses of this measure is to evaluate
which type of hierarchical clustering is best for a particular type of data.
Example 8.12 (Cophenetic Correlation Coefficient).We calculated the
CPCC for the hierarchical clusterings shown in Figures 8.16–8.19.These values
are shown in Table 8.8.  The hierarchical clustering produced by the single
link technique seems to fit the data less well than the clusterings produced by
complete link, group average, and Ward’s method.
Table 8.8.Cophenetic correlation coefficient for data of Table 8.3 and four agglomerative hierarchical
clustering techniques.
TechniqueCPCC
Single Link0.44
Complete Link0.63
Group Average0.66
Ward’s0.64
8.5.5   Determining the Correct Number of Clusters
Various  unsupervised  cluster  evaluation  measures  can  be  used  to  approxi-
mately determine the correct or natural number of clusters.
Example 8.13 (Number of Clusters).The data set of Figure 8.29 has 10
natural clusters.  Figure 8.32 shows a plot of the SSE versus the number of
clusters for a (bisecting) K-means clustering of the data set, while Figure 8.33
shows the average silhouette coefficient versus the number of clusters for the
same data.  There is a distinct knee in the SSE and a distinct peak in the
silhouette coefficient when the number of clusters is equal to 10.
Thus, we can try to find the natural number of clusters in a data set by
looking for the number of clusters at which there is a knee, peak, or dip in
the plot of the evaluation measure when it is plotted against the number of
clusters. Of course, such an approach does not always work well. Clusters may
be considerably more intertwined or overlapping than those shown in Figure
8.29.  Also, the data may consist of nested clusters.  Actually, the clusters in
Figure 8.29 are somewhat nested; i.e., there are 5 pairs of clusters since the
clusters are closer top to bottom than they are left to right.  There is a knee
that indicates this in the SSE curve, but the silhouette coefficient curve is not

8.5Cluster Evaluation547
10
8
6
4
2
0
051015202530
Number of Clusters
SSE
Figure 8.32.SSE versus number of clusters for
the data of Figure 8.29.
0.75
0.7
0.55
0.4
0.35
0.3
051015202530
Number of Clusters
Silhouette Coefficient
0.65
0.6
0.45
0.5
Figure 8.33.Average silhouette coefficient ver-
sus number of clusters for the data of Figure
8.29.
as clear.  In summary, while caution is needed, the technique we have just
described can provide insight into the number of clusters in the data.
8.5.6   Clustering Tendency
One obvious way to determine if a data set has clusters is to try to cluster
it. However, almost all clustering algorithms will dutifully find clusters when
given data. To address this issue, we could evaluate the resulting clusters and
only claim that a data set has clusters if at least some of the clusters are of good
quality.  However, this approach does not address the fact the clusters in the
data can be of a different type than those sought by our clustering algorithm.
To handle this additional problem, we could use multiple algorithms and again
evaluate the quality of the resulting clusters. If the clusters are uniformly poor,
then this may indeed indicate that there are no clusters in the data.
Alternatively, and this is the focus of measures of clustering tendency, we
can try to evaluate whether a data set has clusters without clustering.  The
most common approach, especially for data in Euclidean space, has been to
use statistical tests for spatial randomness.  Unfortunately, choosing the cor-
rect model, estimating the parameters, and evaluating the statistical signifi-
cance of the hypothesis that the data is non-random can be quite challenging.
Nonetheless, many approaches have been developed, most of them for points
in low-dimensional Euclidean space.
Example 8.14 (Hopkins Statistic).For this approach, we generateppoints
that are randomly distributed across the data space and also samplepactual

548   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
data points. For both sets of points we find the distance to the nearest neigh-
bor in the original data set. Let theu
i
be the nearest neighbor distances of the
artificially generated points, while thew
i
are the nearest neighbor distances
of the sample of points from the original data set. The Hopkins statisticHis
then defined by Equation 8.17.
H=
∑
p
i=1
w
i
∑
p
i=1
u
i
+
∑
p
i=1
w
i
(8.17)
If  the  randomly  generated  points  and  the  sample  of  data  points  have
roughly the same nearest neighbor distances, thenHwill be near 0.5. Values
ofHnear 0 and 1 indicate, respectively, data that is highly clustered and
data that is regularly distributed in the data space.  To give an example, the
Hopkins statistic for the data of Figure 8.26 was computed forp= 20 and 100
different trials.  The average value ofHwas 0.56 with a standard deviation
of 0.03. The same experiment was performed for the well-separated points of
Figure 8.30.  The average value ofHwas 0.95 with a standard deviation of
0.006.
8.5.7   Supervised Measures of Cluster Validity
When we have external information about data, it is typically in the form of
externally derived class labels for the data objects.  In such cases, the usual
procedure is to measure the degree of correspondence between the cluster labels
and the class labels. But why is this of interest? After all, if we have the class
labels, then what is the point in performing a cluster analysis? Motivations for
such an analysis are the comparison of clustering techniques with the “ground
truth” or the evaluation of the extent to which a manual classification process
can be automatically produced by cluster analysis.
We consider two different kinds of approaches. The first set of techniques
use measures from classification, such as entropy, purity, and the F-measure.
These measures evaluate the extent to which a cluster contains objects of a
single class. The second group of methods is related to the similarity measures
for binary data, such as the Jaccard measure that we saw in Chapter 2. These
approaches measure the extent to which two objects that are in the same class
are in the same cluster and vice versa. For convenience, we will refer to these
two types of measures asclassification-orientedandsimilarity-oriented,
respectively.

8.5Cluster Evaluation549
Classification-Oriented Measures of Cluster Validity
There are a number of measures—entropy, purity, precision, recall, and the
F-measure—that are commonly used to evaluate the performance of a classi-
fication model.  In the case of classification, we measure the degree to which
predicted class labels correspond to actual class labels, but for the measures
just mentioned, nothing fundamental is changed by using cluster labels in-
stead of predicted class labels. Next, we quickly review the definitions of these
measures, which were discussed in Chapter 4.
Entropy:The degree to which each cluster consists of objects of a single class.
For each cluster, the class distribution of the data is calculated first, i.e.,
for clusterjwe computep
ij
, the probability that a member of clusteri
belongs to classjasp
ij
=m
ij
/m
i
, wherem
i
is the number of objects in
clusteriandm
ij
is the number of objects of classjin clusteri.Using
this class distribution, the entropy of each clusteriis calculated using
the standard formula,e
i
=−
∑
L
j=1
p
ij
log
2
p
ij
, whereLis the number of
classes.  The total entropy for a set of clusters is calculated as the sum
of the entropies of each cluster weighted by the size of each cluster, i.e.,
e=
∑
K
i=1
m
i
m
e
i
, whereKis the number of clusters andmis the total
number of data points.
Purity:Another measure of the extent to which a cluster contains objects of
a single class.  Using the previous terminology, the purity of clusteriis
p
i
=max
j
p
ij
, the overall purity of a clustering ispurity=
∑
K
i=1
m
i
m
p
i
.
Precision:The fraction of a cluster that consists of objects of a specified class.
The precision of clusteriwith respect to classjisprecision(i, j)=p
ij
.
Recall:The extent to which a cluster contains all objects of a specified class.
The recall of clusteriwith respect to classjisrecall(i, j)=m
ij
/m
j
,
wherem
j
is the number of objects in classj.
F-measureA combination of both precision and recall that measures the
extent to which a cluster containsonlyobjects of a particular class andall
objects of that class. The F-measure of clusteriwith respect to classjis
F(i, j)=(2×precision(i, j)×recall(i, j))/(precision(i, j)+recall(i, j)).
Example 8.15 (Supervised Evaluation Measures).We present an exam-
ple to illustrate these measures. Specifically, we use K-means with the cosine
similarity measure to cluster 3204 newspaper articles from theLos Angeles

550   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
Table 8.9.K-means clustering results for theLA Timesdocument data set.
ClusterEnter-
tainment
FinancialForeignMetroNationalSportsEntropyPurity
1354050696271.22700.7474
247280293921.14720.7756
3111746710.18130.9796
41016231197321.74870.4390
53312257013231.39760.7134
653581221248131.55230.5525
Total3545553419432737381.14500.7203
Times.  These articles come from six different classes: Entertainment, Finan-
cial, Foreign, Metro, National, and Sports.  Table 8.9 shows the results of a
K-means clustering to find six clusters.  The first column indicates the clus-
ter, while the next six columns together form the confusion matrix; i.e., these
columns indicate how the documents of each category are distributed among
the clusters. The last two columns are the entropy and purity of each cluster,
respectively.
Ideally, each cluster will contain documents from only one class. In reality,
each cluster contains documents from many classes. Nevertheless, many clus-
ters contain documents primarily from just one class.  In particular, cluster
3, which contains mostly documents from the Sports section, is exceptionally
good, both in terms of purity and entropy.  The purity and entropy of the
other clusters is not as good, but can typically be greatly improved if the data
is partitioned into a larger number of clusters.
Precision, recall, and the F-measure can be calculated for each cluster. To
give a concrete example, we consider cluster 1 and the Metro class of Table
8.9. The precision is 506/677 = 0.75, recall is 506/943 = 0.26, and hence, the
F value is 0.39. In contrast, the F value for cluster 3 and Sports is 0.94.
Similarity-Oriented Measures of Cluster Validity
The measures that we discuss in this section are all based on the premise
that any two objects that are in the same cluster should be in the same class
and vice versa.  We can view this approach to cluster validity as involving
the comparison of two matrices:  (1) theideal cluster similarity matrix
discussed previously, which has a 1 in theij
th
entry if two objects,iandj,
are in the same cluster and 0, otherwise, and (2) anideal class similarity
matrixdefined with respect to class labels, which has a 1 in theij
th
entry if

8.5Cluster Evaluation551
two objects,iandj, belong to the same class, and a 0 otherwise. As before, we
can take the correlation of these two matrices as the measure of cluster validity.
This measure is known as the Γ statistic in clustering validation literature.
Example 8.16 (Correlation between Cluster and Class Matrices).To
demonstrate this idea more concretely, we give an example involving five data
points,p
1
,p
2
,p
3
,p
4
,p
5
, two clusters,C
1
={p
1
,p
2
,p
3
}andC
2
={p
4
,p
5
}, and
two classes,L
1
={p
1
,p
2
}andL2={p
3
,p
4
,p
5
}.  The ideal cluster and class
similarity matrices are given in Tables 8.10 and 8.11. The correlation between
the entries of these two matrices is 0.359.
Table 8.10.Ideal cluster similarity matrix.
Pointp1    p2    p3    p4    p5
p111100
p211100
p311100
p400011
p500011
Table 8.11.Ideal class similarity matrix.
Pointp1    p2    p3    p4    p5
p111000
p211000
p300111
p400111
p500111
More generally, we can use any of the measures for binary similarity that
we saw in Section 2.4.5. (For example, we can convert these two matrices into
binary vectors by appending the rows.) We repeat the definitions of the four
quantities used to define those similarity measures, but modify our descriptive
text to fit the current context. Specifically, we need to compute the following
four quantities for all pairs of distinct objects.  (There arem(m−1)/2 such
pairs, ifmis the number of objects.)
f
00
= number of pairs of objects having a different class and a different cluster
f
01
= number of pairs of objects having a different class and the same cluster
f
10
= number of pairs of objects having the same class and a different cluster
f
11
= number of pairs of objects having the same class and the same cluster
In particular, the simple matching coefficient, which is known as the Rand
statistic in this context, and the Jaccard coefficient are two of the most fre-
quently used cluster validity measures.
Rand statistic =
f
00
+f
11
f
00
+f
01
+f
10
+f
11
(8.18)

552   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
Jaccard coefficient =
f
11
f
01
+f
10
+f
11
(8.19)
Example 8.17 (Rand and Jaccard Measures).Based on these formulas,
we can readily compute the Rand statistic and Jaccard coefficient for the
example based on Tables 8.10 and 8.11. Noting thatf
00
=4,f
01
=2,f
10
=2,
andf
11
= 2, the Rand statistic = (2 + 4)/10 = 0.6 and the Jaccard coefficient
= 2/(2+2+2 ) = 0.33.
We also note that the four quantities,f
00
,f
01
,f
10
, andf
11
, define acon-
tingencytable as shown in Table 8.12.
Table 8.12.Two-way contingency table for determining whether pairs of objects are in the same class
and same cluster.
Same ClusterDifferent Cluster
Same Classf
11
f
10
Different Classf
01
f
00
Previously, in the context of association analysis—see Section 6.7.1—we
presented an extensive discussion of measures of association that can be used
for this type of contingency table. (Compare Table 8.12 with Table 6.7.) Those
measures can also be applied to cluster validity.
Cluster Validity for Hierarchical Clusterings
So far in this section, we have discussed supervised measures of cluster va-
lidity only for partitional clusterings.  Supervised evaluation of a hierarchical
clustering is more difficult for a variety of reasons, including the fact that a
preexisting hierarchical structure often does not exist.  Here, we will give an
example of an approach for evaluating a hierarchical clustering in terms of a
(flat) set of class labels, which are more likely to be available than a preexisting
hierarchical structure.
The key idea of this approach is to evaluate whether a hierarchical clus-
tering contains, for each class, at least one cluster that is relatively pure and
includes most of the objects of that class.  To evaluate a hierarchical cluster-
ing with respect to this goal, we compute, for each class, the F-measure for
each cluster in the cluster hierarchy. For each class, we take the maximum F-
measure attained for any cluster. Finally, we calculate an overall F-measure for
the hierarchical clustering by computing the weighted average of all per-class
F-measures, where the weights are based on the class sizes.  More formally,

8.5Cluster Evaluation553
this hierarchical F-measure is defined as follows:
F=
∑
j
m
j
m
max
i
F(i, j)
where the maximum is taken over all clustersiat all levels,m
j
is the number
of objects in classj, andmis the total number of objects.
8.5.8   Assessing the Significance of Cluster Validity Measures
Cluster validity measures are intended to help us measure the goodness of the
clusters that we have obtained. Indeed, they typically give us a single number
as a measure of that goodness. However, we are then faced with the problem
of interpreting the significance of this number, a task that may be even more
difficult.
The minimum and maximum values of cluster evaluation measures may
provide some guidance in many cases. For instance, by definition, a purity of
0 is bad, while a purity of 1 is good, at least if we trust our class labels and
want our cluster structure to reflect the class structure. Likewise, an entropy
of 0 is good, as is an SSE of 0.
Sometimes, however, there may not be a minimum or maximum value,
or the scale of the data may affect the interpretation.   Also,  even if there
are minimum and maximum values with obvious interpretations, intermediate
values still need to be interpreted.  In some cases, we can use an absolute
standard.  If, for example, we are clustering for utility, we may be willing to
tolerate only a certain level of error in the approximation of our points by a
cluster centroid.
But if this is not the case, then we must do something else.  A common
approach is to interpret the value of our validity measure in statistical terms.
Specifically, we attempt to judge how likely it is that our observed value may
be achieved by random chance. The value is good if it is unusual; i.e., if it is
unlikely to be the result of random chance. The motivation for this approach
is that we are only interested in clusters that reflect non-random structure in
the data, and such structures should generate unusually high (low) values of
our cluster validity measure, at least if the validity measures are designed to
reflect the presence of strong cluster structure.
Example 8.18 (Significance of SSE).To show how this works, we present
an example based on K-means and the SSE. Suppose that we want a measure of
how good the well-separated clusters of Figure 8.30 are with respect to random
data. We generate many random sets of 100 points having the same range as

554   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
0.0150.020.0250.030.0350.04
0
10
20
30
40
50
SSE
Count
Figure 8.34.Histogram of SSE for 500 random data sets.
the points in the three clusters, find three clusters in each data set using K-
means, and accumulate the distribution of SSE values for these clusterings. By
using this distribution of the SSE values, we can then estimate the probability
of the SSE value for the original clusters. Figure 8.34 shows the histogram of
the SSE from 500 random runs. The lowest SSE shown in Figure 8.34 is 0.0173.
For the three clusters of Figure 8.30, the SSE is 0.0050.  We could therefore
conservatively claim that there is less than a 1% chance that a clustering such
as that of Figure 8.30 could occur by chance.
To conclude, we stress that there is more to cluster evaluation—supervised
or unsupervised—than obtaining a numerical measure of cluster validity. Un-
less this value has a natural interpretation based on the definition of the mea-
sure, we need to interpret this value in some way.  If our cluster evaluation
measure is defined such that lower values indicate stronger clusters, then we
can use statistics to evaluate whether the value we have obtained is unusually
low, provided we have a distribution for the evaluation measure. We have pre-
sented an example of how to find such a distribution, but there is considerably
more to this topic, and we refer the reader to the bibliographic notes for more
pointers.
Finally, even when an evaluation measure is used as a relative measure,
i.e., to compare two clusterings, we still need to assess the significance in the
difference between the evaluation measures of the two clusterings.  Although
one value will almost always be better than another, it can be difficult to
determine if the difference is significant.  Note that there are two aspects to
this significance: whether the difference is statistically significant (repeatable)

8.6Bibliographic Notes555
and whether the magnitude of the difference is meaningful with respect to the
application. Many would not regard a difference of 0.1% as significant, even if
it is consistently reproducible.
8.6   Bibliographic Notes
Discussion in this chapter has been most heavily influenced by the books on
cluster analysis written by Jain and Dubes [396], Anderberg [374], and Kauf-
man and Rousseeuw [400].  Additional clustering books that may also be of
interest include those by Aldenderfer and Blashfield [373], Everitt et al. [388],
Hartigan [394], Mirkin [405], Murtagh [407], Romesburg [409], and Sp ̈ath [413].
A more statistically oriented approach to clustering is given by the pattern
recognition book of Duda et al.  [385], the machine learning book of Mitchell
[406], and the book on statistical learning by Hastie et al.  [395].  A general
survey of clustering is given by Jain et al. [397], while a survey of spatial data
mining techniques is provided by Han et al.  [393].  Behrkin [379] provides a
survey of clustering techniques for data mining.  A good source of references
to clustering outside of the data mining field is the article by Arabie and Hu-
bert [376].  A paper by Kleinberg [401] provides a discussion of some of the
trade-offs that clustering algorithms make and proves that it is impossible to
for a clustering algorithm to simultaneously possess three simple properties.
The K-means algorithm has a long history, but is still the subject of current
research.  The original K-means algorithm was proposed by MacQueen [403].
The ISODATA algorithm by Ball and Hall [377] was an early, but sophisticated
version of K-means that employed various pre- and postprocessing techniques
to improve on the basic algorithm.  The K-means algorithm and many of its
variations are described in detail in the books by Anderberg [374] and Jain
and Dubes [396].  The bisecting K-means algorithm discussed in this chapter
was described in a paper by Steinbach et al.  [414], and an implementation
of this and other clustering approaches is freely available for academic use in
the CLUTO (CLUstering TOolkit) package created by Karypis [382].  Boley
[380] has created a divisive partitioning clustering algorithm (PDDP) based
on finding the first principal direction (component) of the data, and Savaresi
and Boley [411] have explored its relationship to bisecting K-means.  Recent
variations of K-means are a new incremental version of K-means (Dhillon et al.
[383]), X-means (Pelleg and Moore [408]), and K-harmonic means (Zhang et al
[416]). Hamerly and Elkan [392] discuss some clustering algorithms that pro-
duce better results than K-means.  While some of the previously mentioned
approaches address the initialization problem of K-means in some manner,

556   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
other approaches to improving K-means initialization can also be found in the
work of Bradley and Fayyad [381].  Dhillon and Modha [384] present a gen-
eralization of K-means, called spherical K-means, that works with commonly
used similarity functions.  A general framework for K-means clustering that
uses dissimilarity functions based on Bregman divergences was constructed by
Banerjee et al. [378].
Hierarchical clustering techniques also have a long history.  Much of the
initial activity was in the area of taxonomy and is covered in books by Jardine
and Sibson [398] and Sneath and Sokal [412].  General-purpose discussions of
hierarchical clustering are also available in most of the clustering books men-
tioned above. Agglomerative hierarchical clustering is the focus of most work
in the area of hierarchical clustering, but divisive approaches have also received
some attention. For example, Zahn [415] describes a divisive hierarchical tech-
nique that uses the minimum spanning tree of a graph.  While both divisive
and agglomerative approaches typically take the view that merging (splitting)
decisions are final, there has been some work by Fisher [389] and Karypis et
al. [399] to overcome these limitations.
Ester et al.  proposed DBSCAN [387], which was later generalized to the
GDBSCAN algorithm by Sander et al.  [410] in order to handle more general
types of data and distance measures, such as polygons whose closeness is mea-
sured by the degree of intersection.  An incremental version of DBSCAN was
developed by Kriegel et al.  [386].  One interesting outgrowth of DBSCAN is
OPTICS (Ordering Points To Identify the Clustering Structure) (Ankerst et
al.  [375]), which allows the visualization of cluster structure and can also be
used for hierarchical clustering.
An authoritative discussion of cluster validity, which strongly influenced
the discussion in this chapter, is provided in Chapter 4 of Jain and Dubes’
clustering book [396].   More recent reviews of cluster validity are those of
Halkidi et al. [390, 391] and Milligan [404]. Silhouette coefficients are described
in Kaufman and Rousseeuw’s clustering book [400]. The source of the cohesion
and separation measures in Table 8.6 is a paper by Zhao and Karypis [417],
which also contains a discussion of entropy, purity, and the hierarchical F-
measure.  The original source of the hierarchical F-measure is an article by
Larsen and Aone [402].
Bibliography
[373]  M. S. Aldenderfer and R. K. Blashfield.Cluster Analysis.  Sage Publications, Los
Angeles, 1985.
[374]  M. R. Anderberg.Cluster Analysis for Applications.   Academic Press,  New York,
December 1973.

Bibliography557
[375]  M. Ankerst, M. M. Breunig, H.-P. Kriegel, and J. Sander. OPTICS: Ordering Points
To Identify the Clustering Structure.  InProc. of 1999 ACM-SIGMOD Intl. Conf. on
Management of Data, pages 49–60, Philadelphia, Pennsylvania, June 1999. ACM Press.
[376]  P. Arabie, L. Hubert, and G. D. Soete.   An overview of combinatorial data analysis.
In P. Arabie, L. Hubert, and G. D. Soete, editors,Clustering and Classification, pages
188–217. World Scientific, Singapore, January 1996.
[377]  G. Ball and D. Hall.  A Clustering Technique for Summarizing Multivariate Data.
Behavior Science, 12:153–155, March 1967.
[378]  A. Banerjee, S. Merugu, I. S. Dhillon, and J. Ghosh. Clustering with Bregman Diver-
gences.  InProc. of the 2004 SIAM Intl. Conf. on Data Mining, pages 234–245, Lake
Buena Vista, FL, April 2004.
[379]  P. Berkhin. Survey Of Clustering Data Mining Techniques. Technical report, Accrue
Software, San Jose, CA, 2002.
[380]  D. Boley.   Principal Direction Divisive Partitioning.Data Mining and Knowledge
Discovery, 2(4):325–344, 1998.
[381]  P. S. Bradley and U. M. Fayyad.  Refining Initial Points for K-Means Clustering.  In
Proc. of the 15th Intl. Conf. on Machine Learning, pages 91–99, Madison, WI, July
1998. Morgan Kaufmann Publishers Inc.
[382]  CLUTO2.1.1:SoftwareforClusteringHigh-DimensionalDatasets.
/www.cs.umn.edu/∼karypis, November 2003.
[383]  I. S. Dhillon, Y. Guan, and J. Kogan.  Iterative Clustering of High Dimensional Text
Data Augmented by Local Search.  InProc. of the 2002 IEEE Intl. Conf. on Data
Mining, pages 131–138. IEEE Computer Society, 2002.
[384]  I. S. Dhillon and D. S. Modha.  Concept Decompositions for Large Sparse Text Data
Using Clustering.Machine Learning, 42(1/2):143–175, 2001.
[385]  R. O. Duda, P. E. Hart, and D. G. Stork.Pattern Classification. John Wiley & Sons,
Inc., New York, second edition, 2001.
[386]  M. Ester, H.-P. Kriegel, J. Sander, M. Wimmer, and X. Xu.  Incremental Clustering
for Mining in a Data Warehousing Environment.  InProc. of the 24th VLDB Conf.,
pages 323–333, New York City, August 1998. Morgan Kaufmann.
[387]  M. Ester, H.-P. Kriegel, J. Sander, and X. Xu.  A Density-Based Algorithm for Dis-
covering Clusters in Large Spatial Databases with Noise. InProc. of the 2nd Intl. Conf.
on Knowledge Discovery and Data Mining, pages 226–231, Portland, Oregon, August
1996. AAAI Press.
[388]  B. S. Everitt, S. Landau, and M. Leese.Cluster Analysis. Arnold Publishers, London,
fourth edition, May 2001.
[389]  D. Fisher. Iterative Optimization and Simplification of Hierarchical Clusterings.Jour-
nal of Artificial Intelligence Research, 4:147–179, 1996.
[390]  M. Halkidi, Y. Batistakis, and M. Vazirgiannis.   Cluster validity methods:  part I.
SIGMOD Record (ACM Special Interest Group on Management of Data), 31(2):40–45,
June 2002.
[391]  M. Halkidi, Y. Batistakis, and M. Vazirgiannis. Clustering validity checking methods:
part II.SIGMOD Record (ACM Special Interest Group on Management of Data),31
(3):19–27, Sept. 2002.
[392]  G. Hamerly and C. Elkan.  Alternatives to the k-means algorithm that find better
clusterings. InProc. of the 11th Intl. Conf. on Information and Knowledge Management,
pages 600–607, McLean, Virginia, 2002. ACM Press.

558   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
[393]  J. Han, M. Kamber, and A. Tung.   Spatial Clustering Methods in Data Mining:  A
review.  In H. J. Miller and J. Han, editors,Geographic Data Mining and Knowledge
Discovery, pages 188–217. Taylor and Francis, London, December 2001.
[394]  J. Hartigan.Clustering Algorithms. Wiley, New York, 1975.
[395]  T. Hastie, R. Tibshirani, and J. H. Friedman.The Elements of Statistical Learning:
Data Mining, Inference, Prediction. Springer, New York, 2001.
[396]  A.  K.  Jain  and  R.  C.  Dubes.Algorithms for Clustering Data.    Prentice  Hall
Advanced  Reference  Series.  Prentice  Hall,  March  1988.   Book  available  online  at
http://www.cse.msu.edu/∼jain/Clustering
JainDubes.pdf.
[397]  A. K. Jain, M. N. Murty, and P. J. Flynn. Data clustering: A review.ACM Computing
Surveys, 31(3):264–323, September 1999.
[398]  N. Jardine and R. Sibson.Mathematical Taxonomy. Wiley, New York, 1971.
[399]  G. Karypis, E.-H. Han, and V. Kumar.  Multilevel Refinement for Hierarchical Clus-
tering. Technical Report TR 99-020, University of Minnesota, Minneapolis, MN, 1999.
[400]  L. Kaufman and P. J. Rousseeuw.Finding Groups in Data: An Introduction to Cluster
Analysis.  Wiley Series in Probability and Statistics. John Wiley and Sons, New York,
November 1990.
[401]  J. M. Kleinberg. An Impossibility Theorem for Clustering. InProc. of the 16th Annual
Conf. on Neural Information Processing Systems, December, 9–14 2002.
[402]  B. Larsen and C. Aone. Fast and Effective Text Mining Using Linear-Time Document
Clustering.  InProc. of the 5th Intl. Conf. on Knowledge Discovery and Data Mining,
pages 16–22, San Diego, California, 1999. ACM Press.
[403]  J. MacQueen.  Some methods for classification and analysis of multivariate observa-
tions.  InProc. of the 5th Berkeley Symp. on Mathematical Statistics and Probability,
pages 281–297. University of California Press, 1967.
[404]  G. W. Milligan.  Clustering Validation: Results and Implications for Applied Analyses.
In P. Arabie, L. Hubert, and G. D. Soete, editors,Clustering and Classification, pages
345–375. World Scientific, Singapore, January 1996.
[405]  B. Mirkin.Mathematical Classification and Clustering, volume 11 ofNonconvex Opti-
mization and Its Applications. Kluwer Academic Publishers, August 1996.
[406]  T. Mitchell.Machine Learning. McGraw-Hill, Boston, MA, 1997.
[407]  F. Murtagh.Multidimensional Clustering Algorithms. Physica-Verlag, Heidelberg and
Vienna, 1985.
[408]  D. Pelleg and A. W. Moore.X-means: ExtendingK-means with Efficient Estimation
of the Number of Clusters. InProc. of the 17th Intl. Conf. on Machine Learning, pages
727–734. Morgan Kaufmann, San Francisco, CA, 2000.
[409]  C. Romesburg.Cluster Analysis for Researchers.  Life Time Learning, Belmont, CA,
1984.
[410]  J. Sander, M. Ester, H.-P. Kriegel, and X. Xu.  Density-Based Clustering in Spatial
Databases: The Algorithm GDBSCAN and its Applications.Data Mining and Knowl-
edge Discovery, 2(2):169–194, 1998.
[411]  S. M. Savaresi and D. Boley.  A comparative analysis on the bisecting K-means and
the PDDP clustering algorithms.Intelligent Data Analysis, 8(4):345–362, 2004.
[412]  P. H. A. Sneath and R. R. Sokal.Numerical Taxonomy. Freeman, San Francisco, 1971.
[413]  H. Sp ̈ath.Cluster Analysis Algorithms for Data Reduction and Classification of Ob-
jects, volume 4 ofComputers and Their Application. Ellis Horwood Publishers, Chich-
ester, 1980. ISBN 0-85312-141-9.

8.7Exercises559
[414]  M. Steinbach, G. Karypis, and V. Kumar.  A Comparison of Document Clustering
Techniques.  InProc. of KDD Workshop on Text Mining, Proc. of the 6th Intl. Conf.
on Knowledge Discovery and Data Mining, Boston, MA, August 2000.
[415]  C. T. Zahn. Graph-Theoretical Methods for Detecting and Describing Gestalt Clusters.
IEEE Transactions on Computers, C-20(1):68–86, Jan. 1971.
[416]  B. Zhang, M. Hsu, and U. Dayal. K-Harmonic Means—A Data Clustering Algorithm.
Technical Report HPL-1999-124, Hewlett Packard Laboratories, Oct. 29 1999.
[417]  Y. Zhao and G. Karypis.  Empirical and theoretical comparisons of selected criterion
functions for document clustering.Machine Learning, 55(3):311–331, 2004.
8.7   Exercises
1.  Consider a data set consisting of 2
20
data vectors, where each vector has 32
components and each component is a 4-byte value. Suppose that vector quan-
tization is used for compression and that 2
16
prototype vectors are used. How
many bytes of storage does that data set take before and after compression and
what is the compression ratio?
2.  Find all well-separated clusters in the set of points shown in Figure 8.35.
Figure 8.35.Points for Exercise 2.
3.  Many partitional clustering algorithms that automatically determine the num-
ber of clusters claim that this is an advantage. List two situations in which this
is not the case.
4.  GivenKequally sized clusters, the probability that a randomly chosen initial
centroid will come from any given cluster is 1/K, but the probability that each
cluster will have exactly one initial centroid is much lower. (It should be clear
that having one initial centroid in each cluster is a good starting situation for
K-means.) In general, if there areKclusters and each cluster hasnpoints, then
the probability,p, of selecting in a sample of sizeKone initial centroid from each
cluster is given by Equation 8.20.  (This assumes sampling with replacement.)
From this formula we can calculate, for example, that the chance of having one
initial centroid from each of four clusters is 4!/4
4
=0.0938.

560   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
p=
number of ways to select one centroid from each cluster
number of ways to selectKcentroids
=
K!n
K
(Kn)
K
=
K!
K
K
(8.20)
(a)  Plot the probability of obtaining one point from each cluster in a sample
of sizeKfor values ofKbetween 2 and 100.
(b)  ForKclusters,K=10,100,and 1000, find the probability that a sample
of size 2Kcontains at least one point from each cluster.  You can use
either mathematical methods or statistical simulation to determine the
answer.
5.  Identify the clusters in Figure 8.36 using the center-, contiguity-, and density-
based definitions.  Also indicate the number of clusters for each case and give
a brief indication of your reasoning. Note that darkness or the number of dots
indicates density. If it helps, assume center-based means K-means, contiguity-
based means single link, and density-based means DBSCAN.
(a)(b)(c)(d)
Figure 8.36.Clusters for Exercise 5.
6.  For the following sets of two-dimensional points, (1) provide a sketch of how
they would be split into clusters by K-means for the given number of clusters
and (2) indicate approximately where the resulting centroids would be. Assume
that we are using the squared error objective function. If you think that there
is more than one possible solution, then please indicate whether each solution
is a global or local minimum.  Note that the label of each diagram in Figure
8.37 matches the corresponding part of this question, e.g., Figure 8.37(a) goes
with part (a).
(a)K= 2. Assuming that the points are uniformly distributed in the circle,
how many possible ways are there (in theory) to partition  the points
into two clusters?   What can you  say about the positions of the two
centroids?  (Again, you don’t need to provide exact centroid locations,
just a qualitative description.)

8.7Exercises561
(a)(b)(c)(d)(e)
Figure 8.37.Diagrams for Exercise 6.
(b)K= 3.  The distance between the edges of the circles is slightly greater
than the radii of the circles.
(c)K= 3.  The distance between the edges of the circles is much less than
the radii of the circles.
(d)K=2.
(e)K= 3.  Hint:  Use the symmetry of the situation and remember that we
are looking for a rough sketch of what the result would be.
7.  Suppose that for a data set
•there arempoints andKclusters,
•half the points and clusters are in “more dense” regions,
•half the points and clusters are in “less dense” regions, and
•the two regions are well-separated from each other.
For the given data set, which of the following should occur in order to minimize
the squared error when findingKclusters:
(a)  Centroids should be equally distributed between more dense and less dense
regions.
(b)  More centroids should be allocated to the less dense region.
(c)  More centroids should be allocated to the denser region.
Note:  Do not get distracted by special cases or bring in factors other than
density. However, if you feel the true answer is different from any given above,
justify your response.
8.  Consider the mean of a cluster of objects from a binary transaction data set.
What are the minimum and maximum values of the components of the mean?
What is the interpretation of components of the cluster mean? Which compo-
nents most accurately characterize the objects in the cluster?
9.  Give an example of a data set consisting of three natural clusters, for which
(almost always) K-means would likely find the correct clusters, but bisecting
K-means would not.

562   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
10.  Would the cosine measure be the appropriate similarity measure to use with K-
means clustering for time series data? Why or why not? If not, what similarity
measure would be more appropriate?
11.  Total SSE is the sum of the SSE for each separate attribute. What does it mean
if the SSE for one variable is low for all clusters? Low for just one cluster? High
for all clusters? High for just one cluster? How could you use the per variable
SSE information to improve your clustering?
12.  The leader algorithm (Hartigan [394]) represents each cluster using a point,
known as aleader, and assigns each point to the cluster corresponding to the
closest leader, unless this distance is above a user-specified threshold.  In that
case, the point becomes the leader of a new cluster.
(a)  What are the advantages and disadvantages of the leader algorithm as
compared to K-means?
(b)  Suggest ways in which the leader algorithm might be improved.
13.  The Voronoi diagram for a set ofKpoints in the plane is a partition of all
the points of the plane intoKregions, such that every point (of the plane)
is assigned to the closest point among theKspecified points.   (See Figure
8.38.)  What is the relationship between Voronoi diagrams and K-means clus-
ters? What do Voronoi diagrams tell us about the possible shapes of K-means
clusters?
Figure 8.38.Voronoi diagram for Exercise 13.
14.  You are given a data set with 100 records and are asked to cluster the data.
You use K-means to cluster the data, but for all values ofK,1≤K≤100,
the K-means algorithm returns only one non-empty cluster.  You then apply
an incremental version of K-means, but obtain exactly the same result. How is
this possible? How would single link or DBSCAN handle such data?
15.  Traditional agglomerative hierarchical clustering routines merge two clusters at
each step.  Does it seem likely that such an approach accurately captures the

8.7Exercises563
(nested) cluster structure of a set of data points? If not, explain how you might
postprocess the data to obtain a more accurate view of the cluster structure.
16.  Use the similarity matrix in Table 8.13 to perform single and complete link
hierarchical clustering. Show your results by drawing a dendrogram. The den-
drogram should clearly show the order in which the points are merged.
Table 8.13.Similarity matrix for Exercise 16.
p1p2p3p4p5
p11.000.100.410.550.35
p20.101.000.640.470.98
p30.410.641.000.440.85
p40.550.470.441.000.76
p50.350.980.850.761.00
17.  Hierarchical clustering is sometimes used to generateKclusters,K>1by
taking the clusters at theK
th
level of the dendrogram. (Root is at level 1.) By
looking at the clusters produced in this way, we can evaluate the behavior of
hierarchical clustering on different types of data and clusters, and also compare
hierarchical approaches to K-means.
The following is a set of one-dimensional points:{6,12,18,24,30,42,48}.
(a)  For each of the following sets of initial centroids, create two clusters by
assigning each point to the nearest centroid, and then calculate the total
squared error for each set of two clusters. Show both the clusters and the
total squared error for each set of centroids.
i.{18,45}
ii.{15,40}
(b)  Do both sets of centroids represent stable solutions; i.e., if the K-means
algorithm was run on this set of points using the given centroids as the
starting centroids, would there be any change in the clusters generated?
(c)  What are the two clusters produced by single link?
(d)  Which technique, K-means or single link, seems to produce the “most
natural” clustering in this situation?  (For K-means, take the clustering
with the lowest squared error.)
(e)  What definition(s) of clustering does this natural clustering correspond
to? (Well-separated, center-based, contiguous, or density.)
(f)  What well-known characteristic of the K-means algorithm explains the
previous behavior?

564   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
18.  Suppose we findKclusters using Ward’s method, bisecting K-means, and ordi-
nary K-means. Which of these solutions represents a local or global minimum?
Explain.
19.  Hierarchical clustering algorithms requireO(m
2
log(m)) time, and consequently,
are impractical to use directly on larger data sets.  One possible technique for
reducing the time required is to sample the data set. For example, ifKclusters
are desired and
√
mpoints are sampled from thempoints, then a hierarchi-
cal clustering algorithm will produce a hierarchical clustering in roughlyO(m)
time.Kclusters can be extracted from this hierarchical clustering by taking
the clusters on theK
th
level of the dendrogram.  The remaining points can
then be assigned to a cluster in linear time, by using various strategies. To give
a specific example, the centroids of theKclusters can be computed, and then
each of them−
√
mremaining points can be assigned to the cluster associated
with the closest centroid.
For each of the following types of data or clusters, discuss briefly if (1) sampling
will cause problems for this approach and (2) what those problems are. Assume
that the sampling technique randomly chooses points from the total set ofm
points and that any unmentioned characteristics of the data or clusters are as
optimal as possible.  In other words, focus only on problems caused by the
particular characteristic mentioned.  Finally, assume thatKis very much less
thanm.
(a)  Data with very different sized clusters.
(b)  High-dimensional data.
(c)  Data with outliers, i.e., atypical points.
(d)  Data with highly irregular regions.
(e)  Data with globular clusters.
(f)  Data with widely different densities.
(g)  Data with a small percentage of noise points.
(h)  Non-Euclidean data.
(i)  Euclidean data.
(j)  Data with many and mixed attribute types.
20.  Consider the following four faces shown in Figure 8.39.  Again, darkness or
number of dots represents density.  Lines are used only to distinguish regions
and do not represent points.
(a)  For each figure, could you use single link to find the patterns represented
by the nose, eyes, and mouth? Explain.
(b)  For each figure, could you use K-means to find the patterns represented
by the nose, eyes, and mouth? Explain.

8.7Exercises565
(a)(b)(c)(d)
Figure 8.39.Figure for Exercise 20.
(c)  What limitation does clustering have in detecting all the patterns formed
by the points in Figure 8.39(c)?
21.  Compute the entropy and purity for the confusion matrix in Table 8.14.
Table 8.14.Confusion matrix for Exercise 21.
ClusterEntertainmentFinancialForeignMetroNationalSportsTotal
#1110114676693
#22789333827253331562
#332646581051629949
Total3545553419432737383204
22.  You are given two sets of 100 points that fall within the unit square.  One set
of points is arranged so that the points are uniformly spaced. The other set of
points is generated from a uniform distribution over the unit square.
(a)  Is there a difference between the two sets of points?
(b)  If so,  which set of points will typically have a smaller SSE for K=10
clusters?
(c)  What will be the behavior of DBSCAN on the uniform data set?  The
random data set?
23.  Using the data in Exercise 24, compute the silhouette coefficient for each point,
each of the two clusters, and the overall clustering.
24.  Given the set of cluster labels and similarity matrix shown in Tables 8.15 and
8.16, respectively, compute the correlation between the similarity matrix and
the ideal similarity matrix, i.e., the matrix whoseij
th
entry is 1 if two objects
belong to the same cluster, and 0 otherwise.

566   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
Table 8.15.Table of cluster labels for Exercise 24.
PointCluster Label
P11
P21
P32
P42
Table 8.16.Similarity matrix for Exercise 24.
PointP1P2P3P4
P110.80.650.55
P20.810.70.6
P30.650.710.9
P40.550.60.91
25.  Compute the hierarchical F-measure for the eight objects{p1, p2, p3, p4, p5,
p6, p7, p8}and hierarchical clustering shown in Figure 8.40. Class A contains
points p1, p2, and p3, while p4, p5, p6, p7, and p8 belong to class B.
{p1, p2, p3, p4, p5, p6, p7, p8}
{p3, p6, p7, p8}
{p1, p2}{p4, p5}{p3, p6}{p7, p8}
{p1, p2, p4, p5,}
Figure 8.40.Hierarchical clustering for Exercise 25.
26.  Compute the cophenetic correlation coefficient for the hierarchical clusterings
in Exercise 16. (You will need to convert the similarities into dissimilarities.)
27.  Prove Equation 8.14.
28.  Prove Equation 8.16.
29.  Prove that
∑
K
i=1
∑
x∈C
i
(x−m
i
)(m−m
i
) = 0. This fact was used in the proof
that TSS = SSE + SSB in Section 8.5.2.
30.  Clusters of documents can be summarized by finding the top terms (words) for
the documents in the cluster, e.g., by taking the most frequentkterms, where
kis a constant, say 10, or by taking all terms that occur more frequently than
a specified threshold.  Suppose that K-means is used to find clusters of both
documents and words for a document data set.
(a)  How might a set of term clusters defined by the top terms in a document
cluster differ from the word clusters found by clustering the terms with
K-means?
(b)  How could term clustering be used to define clusters of documents?
31.  We can represent a data set as a collection of object nodes and a collection of
attribute nodes, where there is a link between each object and each attribute,

8.7Exercises567
and where the weight of that link is the value of the object for that attribute. For
sparse data, if the value is 0, the link is omitted. Bipartite clustering attempts
to partition this graph into disjoint clusters, where each cluster consists of a
set of object nodes and a set of attribute nodes. The objective is to maximize
the weight of links between the object and attribute nodes of a cluster, while
minimizing the weight of links between object and attribute links in different
clusters.   This type of clustering is also known asco-clusteringsince the
objects and attributes are clustered at the same time.
(a)  How is bipartite clustering (co-clustering) different from clustering the
sets of objects and attributes separately?
(b)  Are there any cases in which these approaches yield the same clusters?
(c)  What are the strengths and weaknesses of co-clustering as compared to
ordinary clustering?
32.  In Figure 8.41, match the similarity matrices, which are sorted according to
cluster labels, with the sets of points. Differences in shading and marker shape
distinguish between clusters, and each set of points contains 100 points and
three clusters. In the set of points labeled 2, there are three very tight, equal-
sized clusters.

568   Chapter 8Cluster Analysis: Basic Concepts and Algorithms
1
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
0
00.20.40.60.81
x
y
1
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
0
00.20.40.60.81
x
y
1
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
0
00.20.40.60.81
x
y
1
0.9
0.8
0.7
0.6
0.5
0.4
0.3
0.2
0.1
0
00.20.40.60.81
x
y
1
3
2
4
Figure 8.41.Points and similarity matrices for Exercise 32.

## Document Information
- **Source**: PDF Document (82 pages)
- **Category**: lab-material
- **Difficulty**: intermediate
- **Relevant Labs**: lab2,lab4,lab5
- **Topics**: classification, clustering, gis, machine learning, vector

## AI Assistant Usage
Ask the chatbot:
- "Explain ch8.pdf"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- classification
- clustering
- gis
- machine learning
- vector
