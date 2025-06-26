---
title: "AnIntroductiontoMachineLearning"
category: "lab-material"
difficulty: "advanced"
lab: "lab2,lab3,lab4,lab5"
topics: ["classification", "clustering", "coordinate system", "gee", "gis", "machine learning", "mapping", "projection", "vector"]
source: "C:/Users/cuadrodo/Documents/GitHub/Wookshop_GIS_AI/GIS_AI_062325/documents/ML_Book.pdf"
type: "pdf"
pages: 234
processedAt: "2025-06-26T18:56:41.048Z"
---

# AnIntroductiontoMachineLearning



INTRODUCTION TO MACHINE LEARNING



Introduction to Machine Learning
Alex Smola and S.V.N. Vishwanathan
Yahoo! Labs
Santa Clara
–and–
Departments of Statistics and Computer Science
Purdue University
–and–
College of Engineering and Computer Science
Australian National University

published by the press syndicate of the university of cambridge
The Pitt Building, Trumpington Street, Cambridge, United Kingdom
cambridge university press
The Edinburgh Building, Cambridge CB2 2RU, UK
40 West 20th Street, New York, NY 10011–4211, USA
477 Williamstown Road, Port Melbourne, VIC 3207, Australia
Ruiz de Alarc ́on 13, 28014 Madrid, Spain
Dock House, The Waterfront, Cape Town 8001, South Africa
http://www.cambridge.org
c
©Cambridge University Press 2008
This book is in copyright. Subject to statutory exception
and to the provisions of relevant collective licensing agreements,
no reproduction of any part may take place without
the written permission of Cambridge University Press.
First published 2008
Printed in the United Kingdom at the University Press, Cambridge
TypefaceMonotype Times 10/13ptSystemL
A
T
E
X 2
ε
[Alexander J. Smola and S.V.N.
Vishwanathan]
A catalogue record for this book is available from the British Library
Library of Congress Cataloguing in Publication data available
ISBN 0 521 82583 0 hardback
Author: vishy
Revision: 252
Timestamp: October 1, 2010
URL: svn://smola@repos.stat.purdue.edu/thebook/trunk/Book/thebook.tex

Contents
Prefacepage1
1Introduction3
1.1A Taste of Machine Learning3
1.1.1    Applications3
1.1.2    Data7
1.1.3    Problems9
1.2Probability Theory12
1.2.1    Random Variables12
1.2.2    Distributions13
1.2.3    Mean and Variance15
1.2.4    Marginalization, Independence, Conditioning, and
Bayes Rule16
1.3Basic Algorithms20
1.3.1    Naive Bayes22
1.3.2    Nearest Neighbor Estimators24
1.3.3    A Simple Classifier27
1.3.4    Perceptron29
1.3.5    K-Means32
2Density Estimation37
2.1Limit Theorems37
2.1.1    Fundamental Laws38
2.1.2    The Characteristic Function42
2.1.3    Tail Bounds45
2.1.4    An Example48
2.2Parzen Windows51
2.2.1    Discrete Density Estimation51
2.2.2    Smoothing Kernel52
2.2.3    Parameter Estimation54
2.2.4    Silverman’s Rule57
2.2.5    Watson-Nadaraya Estimator59
2.3Exponential Families60
2.3.1    Basics60
v

vi0  Contents
2.3.2    Examples62
2.4Estimation66
2.4.1    Maximum Likelihood Estimation66
2.4.2    Bias, Variance and Consistency68
2.4.3    A Bayesian Approach71
2.4.4    An Example75
2.5Sampling77
2.5.1    Inverse Transformation78
2.5.2    Rejection Sampler82
3Optimization91
3.1Preliminaries91
3.1.1    Convex Sets92
3.1.2    Convex Functions92
3.1.3    Subgradients96
3.1.4    Strongly Convex Functions97
3.1.5    Convex Functions with Lipschitz Continous Gradient  98
3.1.6    Fenchel Duality98
3.1.7    Bregman Divergence100
3.2Unconstrained Smooth Convex Minimization102
3.2.1    Minimizing a One-Dimensional Convex Function102
3.2.2    Coordinate Descent104
3.2.3    Gradient Descent104
3.2.4    Mirror Descent108
3.2.5    Conjugate Gradient111
3.2.6    Higher Order Methods115
3.2.7    Bundle Methods121
3.3Constrained Optimization125
3.3.1    Projection Based Methods125
3.3.2    Lagrange Duality127
3.3.3    Linear and Quadratic Programs131
3.4Stochastic Optimization135
3.4.1    Stochastic Gradient Descent136
3.5Nonconvex Optimization137
3.5.1    Concave-Convex Procedure137
3.6Some Practical Advice139
4Online Learning and Boosting143
4.1Halving Algorithm143
4.2Weighted Majority144

Contentsvii
5Conditional Densities149
5.1Logistic Regression150
5.2Regression151
5.2.1    Conditionally Normal Models151
5.2.2    Posterior Distribution151
5.2.3    Heteroscedastic Estimation151
5.3Multiclass Classification151
5.3.1    Conditionally Multinomial Models151
5.4What is a CRF?152
5.4.1    Linear Chain CRFs152
5.4.2    Higher Order CRFs152
5.4.3    Kernelized CRFs152
5.5Optimization Strategies152
5.5.1    Getting Started152
5.5.2    Optimization Algorithms152
5.5.3    Handling Higher order CRFs152
5.6Hidden Markov Models153
5.7Further Reading153
5.7.1    Optimization153
6Kernels and Function Spaces155
6.1The Basics155
6.1.1    Examples156
6.2Kernels161
6.2.1    Feature Maps161
6.2.2    The Kernel Trick161
6.2.3    Examples of Kernels161
6.3Algorithms161
6.3.1    Kernel Perceptron161
6.3.2    Trivial Classifier161
6.3.3    Kernel Principal Component Analysis161
6.4Reproducing Kernel Hilbert Spaces161
6.4.1    Hilbert Spaces163
6.4.2    Theoretical Properties163
6.4.3    Regularization163
6.5Banach Spaces164
6.5.1    Properties164
6.5.2    Norms and Convex Sets164
7Linear Models165
7.1Support Vector Classification165

viii0  Contents
7.1.1    A Regularized Risk Minimization Viewpoint170
7.1.2    An Exponential Family Interpretation170
7.1.3    Specialized Algorithms for Training SVMs172
7.2Extensions177
7.2.1    Theνtrick177
7.2.2    Squared Hinge Loss179
7.2.3    Ramp Loss180
7.3Support Vector Regression181
7.3.1    Incorporating General Loss Functions184
7.3.2    Incorporating theνTrick186
7.4Novelty Detection186
7.5Margins and Probability189
7.6Beyond Binary Classification189
7.6.1    Multiclass Classification190
7.6.2    Multilabel Classification191
7.6.3    Ordinal Regression and Ranking192
7.7Large Margin Classifiers with Structure193
7.7.1    Margin193
7.7.2    Penalized Margin193
7.7.3    Nonconvex Losses193
7.8Applications193
7.8.1    Sequence Annotation193
7.8.2    Matching193
7.8.3    Ranking193
7.8.4    Shortest Path Planning193
7.8.5    Image Annotation193
7.8.6    Contingency Table Loss193
7.9Optimization193
7.9.1    Column Generation193
7.9.2    Bundle Methods193
7.9.3    Overrelaxation in the Dual193
7.10   CRFs vs Structured Large Margin Models194
7.10.1  Loss Function194
7.10.2  Dual Connections194
7.10.3  Optimization194
Appendix 1Linear Algebra and Functional Analysis197
Appendix 2Conjugate Distributions201
Appendix 3Loss Functions203
Bibliography221

Preface
Since this is a textbook we biased our selection of references towards easily
accessible work rather than the original references. While this may not be
in the interest of the inventors of these concepts, it greatly simplifies access
to those topics. Hence we encourage the reader to follow the references in
the  cited  works  should  they  be  interested  in  finding  out  who  may  claim
intellectual ownership of certain key ideas.
1

20  Preface
Structure of the Book
Introduction
Density 
Estimation
Graphical 
Models
KernelsOptimization
Conditional 
Densities
Conditional 
Random Fields
Linear Models
Structured 
Estimation
Duality and 
Estimation
Moment
Methods
Reinforcement 
Learning
Introduction
Density 
Estimation
Graphical 
Models
KernelsOptimization
Conditional 
Densities
Conditional 
Random Fields
Linear Models
Structured 
Estimation
Duality and 
Estimation
Moment
Methods
Reinforcement 
Learning
Introduction
Density 
Estimation
Graphical 
Models
KernelsOptimization
Conditional 
Densities
Conditional 
Random Fields
Linear Models
Structured 
Estimation
Duality and 
Estimation
Moment
Methods
Reinforcement 
Learning
Canberra, August 2008

1
Introduction
Over the past two decades Machine Learning has become one of the main-
stays of information technology and with that, a rather central, albeit usually
hidden, part of our life. With the ever increasing amounts of data becoming
available there is good reason to believe that smart data analysis will become
even more pervasive as a necessary ingredient for technological progress.
The purpose of this chapter is to provide the reader with an overview over
the vast range of applications which have at their heart a machine learning
problem  and  to  bring  some  degree  of  order  to  the  zoo  of  problems.  After
that, we will discuss some basic tools from statistics and probability theory,
since they form the language in which many machine learning problems must
be phrased to become amenable to solving. Finally, we will outline a set of
fairly basic yet effective algorithms to solve an important problem, namely
that of classification. More sophisticated tools, a discussion of more general
problems and a detailed analysis will follow in later parts of the book.
1.1  A Taste of Machine Learning
Machine learning can appear in many guises. We now discuss a number of
applications, the types of data they deal with, and finally, we formalize the
problems in a somewhat more stylized fashion. The latter is key if we want to
avoid reinventing the wheel for every new application. Instead, much of the
artof machine learning is to reduce a range of fairly disparate problems to
a set of fairly narrow prototypes. Much of thescienceof machine learning is
then to solve those problems and provide good guarantees for the solutions.
1.1.1  Applications
Most readers will be familiar with the concept of web pageranking. That
is, the process of submitting a query to a search engine, which then finds
webpages  relevant  to  the  query  and  which  returns  them  in  their  order  of
relevance. See e.g. Figure 1.1 for an example of the query results for “ma-
chine learning”. That is, the search engine returns a sorted list of webpages
given a query. To achieve this goal, a search engine needs to ‘know’ which
3

41  Introduction
Web Images Maps News Shopping Gmail more !
 
    
Sponsored Links
Machine Learning
Google Sydney needs machine
learning experts. Apply today!
www.google.com.au/jobs
Sign in
 Search
  Advanced Search
  Preferences
 Web    Scholar   Results 1 - 10 of about 10,500,000 for machine learning. (0.06 seconds) 
Machine learning - Wikipedia, the free encyclopedia
As a broad subfield of artificial intelligence, machine learning is concerned with the design
and development of algorithms and techniques that allow ...
en.wikipedia.org/wiki/Machine_learning - 43k - Cached - Similar pages
Machine Learning textbook
Machine Learning is the study of computer algorithms that improve automatically through
experience. Applications range from datamining programs that ...
www.cs.cmu.edu/~tom/mlbook.html - 4k - Cached - Similar pages
machine learning
www.aaai.org/AITopics/html/machine.html - Similar pages
Machine Learning
A list of links to papers and other resources on machine learning.
www.machinelearning.net/ - 14k - Cached - Similar pages
Introduction to Machine Learning
This page has pointers to my draft book on Machine Learning and to its individual
chapters. They can be downloaded in Adobe Acrobat format. ...
ai.stanford.edu/~nilsson/mlbook.html - 15k - Cached - Similar pages
Machine Learning - Artificial Intelligence (incl. Robotics ...
Machine Learning - Artificial Intelligence. Machine Learning is an international forum for
research on computational approaches to learning.
www.springer.com/computer/artificial/journal/10994 - 39k - Cached - Similar pages
Machine Learning (Theory)
Graduating students in Statistics appear to be at a substantial handicap compared to
graduating students in Machine Learning, despite being in substantially ...
hunch.net/ - 94k - Cached - Similar pages
Amazon.com: Machine Learning: Tom M. Mitchell: Books
Amazon.com: Machine Learning: Tom M. Mitchell: Books.
www.amazon.com/Machine-Learning-Tom-M-Mitchell/dp/0070428077 - 210k -
Cached - Similar pages
Machine Learning Journal
Machine Learning publishes articles on the mechanisms through which intelligent systems
improve their performance over time. We invite authors to submit ...
pages.stern.nyu.edu/~fprovost/MLJ/ - 3k - Cached - Similar pages
CS 229: Machine Learning
STANFORD. CS229 Machine Learning Autumn 2007. Announcements. Final reports from
this year's class projects have been posted here. ...
cs229.stanford.edu/ - 10k - Cached - Similar pages
12345678910
Next
 
 Search
Search within results | Language Tools | Search Tips | Dissatisfied? Help us improve | Try Google Experimental
©2008 Google - Google Home - Advertising Programs - Business Solutions - About Google
machine learning
machine learning
Google
Fig. 1.1.  The 5 top scoring webpages for the query “machine learning”
pages are relevant and which pages match the query. Such knowledge can be
gained from several sources: the link structure of webpages, their content,
the frequency with which users will follow the suggested links in a query, or
from examples of queries in combination with manually ranked webpages.
Increasingly machine learning rather than guesswork and clever engineering
is used toautomatethe process of designing a good search engine [RPB06].
A rather related application iscollaborative filtering. Internet book-
stores such as Amazon, or video rental sites such as Netflix use this informa-
tion extensively to entice users to purchase additional goods (or rent more
movies). The problem is quite similar to the one of web page ranking. As
before, we want to obtain a sorted list (in this case of articles). The key dif-
ference is that an explicit query is missing and instead we can only use past
purchase  and  viewing  decisions  of  the  user  to  predict  future  viewing  and
purchase habits. The key side information here are the decisions made by
similarusers, hence the collaborative nature of the process. See Figure 1.2
for an example. It is clearly desirable to have an automatic system to solve
this problem, thereby avoiding guesswork and time [BK07].
An equally ill-defined problem is that ofautomatic translationof doc-
uments. At one extreme, we could aim at fullyunderstandinga text before
translating it using a curated set of rules crafted by a computational linguist
well versed in the two languages we would like to translate. This is a rather
arduous task, in particular given that text is not always grammatically cor-
rect, nor is the document understanding part itself a trivial one. Instead, we
could simply useexamplesof translated documents, such as the proceedings
of the Canadian parliament or other multilingual entities (United Nations,
European Union,  Switzerland)  tolearnhow  to  translate  between  the  two

1.1  A Taste of Machine Learning5
languages. In other words, we could use examples of translations to learn
how  to  translate.  This  machine  learning  approach  proved  quite  successful
[?].
Many security applications, e.g. for access control, use face recognition as
one  of  its  components.  That  is,  given  the  photo  (or  video  recording)  of  a
person, recognize who this person is. In other words, the system needs to
classifythe faces into one of many categories (Alice, Bob, Charlie, . . . ) or
decide that it is an unknown face. A similar, yet conceptually quite different
problem is that of verification. Here the goal is to verify whether the person
in  question  is  who  he  claims  to  be.  Note  that  differently  to  before,  this
is now a yes/no question. To deal with different lighting conditions, facial
expressions, whether a person is wearing glasses, hairstyle, etc., it is desirable
to have a system whichlearnswhich features are relevant for identifying a
person.
Another application where learning helps is the problem ofnamed entity
recognition(see Figure 1.4). That is, the problem of identifying entities,
such as places, titles, names, actions, etc. from documents. Such steps are
crucial in the automatic digestion and understanding of documents. Some
modern  e-mail  clients,  such  as  Apple’s  Mail.app  nowadays  ship  with  the
ability  to  identify  addresses  in  mails  and  filing  them  automatically  in  an
address book. While systems using hand-crafted rules can lead to satisfac-
tory results, it is far more efficient to use examples of marked-up documents
to  learn  such  dependencies  automatically,  in  particular  if  we  want  to  de-
ploy  our  system  in  many  languages.  For  instance,  while  ’bush’  and  ’rice’
Your Amazon.com Today's DealsGifts & Wish Lists Gift Cards 
Your Account  |  Help
Advertise on Amazon
5 star: (23)
4 star: (2)
3 star: (3)
2 star: (2)
1 star:  (0)
   
Quantity: 1
 
or
Sign in to turn on 1-Click ordering.
 
  
More Buying Choices
16 used & new from
$52.00
Have one to sell? 
 
  
 
 
Share your own customer images
Search inside another edition of this book
Are You an Author or
Publisher? 
Find out how to publish
your own Kindle Books
 
  
Hello. Sign in to get personalized recommendations. New customer? Start here.
  
 
Books   
Books
Advanced SearchBrowse SubjectsHot New  ReleasesBestsellersThe New  York Times®  Best  SellersLibros En EspañolBargain BooksTextbooks
Join Amazon Prime and ship Two-Day for free and Overnight for $3.99. Already a member? Sign in.
Machine Learning (Mcgraw-Hill International Edit)
(Paperback)
by Thomas Mitchell (Author) "Ever since computers were invented, we have wondered whether
they might be made to learn..." (more)
    (30 customer reviews)  
List Price:$87.47
Price:$87.47 & this item ships for FREE with Super Saver Shipping.
Details
Availability: Usually ships within 4 to 7 weeks. Ships from and sold by Amazon.com. Gift-
wrap available.
16 used & new available from $52.00
Also Available in:List Price:Our Price:Other Offers:
Hardcover (1)$153.44$153.4434 used & new from $67.00
 
  
Better Together
Buy this book with Introduction to Machine Learning (Adaptive Computation and Machine Learning) by Ethem Alpaydin today!
Buy Together Today: $130.87
Customers Who Bought This Item Also Bought
Pattern Recognition and
Machine Learning
(Information Science and
Statistics) by Christopher
M. Bishop
 (30)  $60.50
Artificial Intelligence: A
Modern Approach (2nd
Edition) (Prentice Hall
Series in Artificial
Intelligence) by Stuart
Russell
 (76)  $115.00
The Elements of Statistical
Learning by T. Hastie
 (25)  $72.20
Pattern Classification (2nd
Edition) by Richard O.
Duda
 (25)  $115.00
Data Mining: Practical
Machine Learning Tools
and Techniques, Second
Edition (Morgan Kaufmann
Series in Data
Management Systems) by
Ian H. Witten
 (21)  $39.66
› Explore similar items : Books (50)
Editorial Reviews
Book Description
This exciting addition to the McGraw-Hill Series in Computer Science focuses on the concepts and techniques that contribute to the rapidly
changing field of machine learning--including probability and statistics, artificial intelligence, and neural networks--unifying them all in a logical
and coherent manner. Machine Learning serves as a useful reference tool for software developers and researchers, as well as an outstanding text
for college students. --This text refers to the Hardcover edition. 
Book Info
Presents the key algorithms and theory that form the core of machine learning. Discusses such theoretical issues as How does learning
performance vary with the number of training examples presented? and Which learning algorithms are most appropriate for various types of
learning tasks? DLC: Computer algorithms. --This text refers to the Hardcover edition.
Product Details
Paperback: 352 pages
Publisher: McGraw-Hill Education (ISE Editions); 1st edition (October 1, 1997)
Language: English
ISBN-10: 0071154671
ISBN-13: 978-0071154673
Product Dimensions: 9 x 5.9 x 1.1 inches
Shipping Weight: 1.2 pounds (View shipping rates and policies)
Average Customer Review:   (30 customer reviews)
Amazon.com Sales Rank: #104,460 in Books (See Bestsellers in Books)
Popular in this category: (What's this?)
#11 in Books > Computers & Internet > Computer Science > Artificial Intelligence > Machine Learning
(Publishers and authors: Improve Your Sales)
In-Print Editions: Hardcover (1) |  All Editions
 Would you like to update product info or give feedback on images? (We'll ask you to sign in so we can get back to you)
Inside This Book (learn more) 
Browse and search another edition of this book.
First Sentence:
Ever since computers were invented, we have wondered whether they might be made to learn. Read the first page
Browse Sample Pages:
Front Cover | Copyright | Table of Contents | Excerpt | Index | Back Cover | Surprise Me!
Search Inside This Book:
 
Customers viewing this page may be interested in these Sponsored Links (What's this?)
Online Law Degree
http://www.edu-onlinedegree.org Juris Doctor JD & LLM Masters Low tuition, Free Textbooks 
Learning CDs
www.mindperk.com Save on powerful mind-boosting CDs & DVDs. Huge Selection 
Video Edit Magic
www.deskshare.com/download Video Editing Software trim, modify color, and merge video 
Tags Customers Associate with This Product (What's this?)
Click on a tag to find related items, discussions, and people.
machine learning (6)
artificial intelligence (2)
computer science (1)
pattern recognition (1)
Your tags: Add your first tag
Help others find this product - tag it for Amazon search
No one has tagged this product for Amazon search yet. Why not be the first to
suggest a search for which it should appear?
Search Products Tagged with
 
Are you the publisher or author? Learn how Amazon can help you make this book an eBook. 
If you are a publisher or author and hold the digital rights to a book, you can make it available as an eBook on Amazon.com. Learn more
Rate This Item to Improve Your Recommendations
I own itNot rated
Your rating
Don't like it < > I love it!
Save your
rating
  
?12345
 
Customer Reviews
30 Reviews
 
 
Average Customer Review
(30 customer reviews)
 
 
  
Share your thoughts with other customers:
Most Helpful Customer Reviews
 44 of 44 people found the following review helpful:
 An excellent overview for the adv. undergrad or beg. grad,
September 30, 2002
By Todd Ebert (Long Beach California) - See all my reviews
This review is from: Machine Learning (Hardcover)
I agree with some of the previous reviews which criticize the book for its lack of
depth, but I believe this to be an asset rather than a liability given its target
audience (seniors and beginning grad. students). The average college senior typically
knows very little about subjects like neural networks, genetic algorithms, or Baysian
networks, and this book goes a long way in demystifying these subjects in a very
clear, concise, and understandable way. Moreover, the first-year grad. student who is
interested in possibly doing research in this field needs more of an overview than to
dive deeply into 
one of the many branches which themselves have had entire books written about
them. This is one of the few if only books where one will find diverse areas of
learning (e.g. analytical, reinforcment, Bayesian, neural-network, genetic-algorithmic)
all within the same cover.
But more than just an encyclopedic introduction, the author makes a number of
connections between the different paradigms. For example, he explains that
associated with each paradigm is the notion of an inductive-learning bias, i.e. the
underlying assumptions that lend validity to a given learning approach. These end-of-
chapter discussions on bias seem very interesting and unique to this book.
Finally, I used this book for part of the reading material for an intro. AI class, and
received much positive feedback from the students, although some did find the
presentation a bit too abstract for their undergraduate tastes
 Comment | Permalink | Was this review helpful to you?   (Report this) 
 22 of 27 people found the following review helpful:
 Great compilation, May 18, 2001
By Steven Burns (-) - See all my reviews
This review is from: Machine Learning (Hardcover)
This book is completely worth the price, and worth the hardcover to take care of it.
The main chapters of the book are independent, so you can read them in any order.
The way it explains the different learning approaches is beautiful because: 1)it
explains them nicely 2)it gives examples and 3)it presents pseudocode summaries of
the algorithms. As a software developer, what else could I possibly ask for?
 Comment | Permalink | Was this review helpful to you?   (Report this) 
 23 of 23 people found the following review helpful:
 Venerable, in both senses, April 4, 2004
By eldil (Albuquerque NM) - See all my reviews
This review is from: Machine Learning (Hardcover)
It's pretty well done, it covers theory and core areas but - maybe it was more the
state of the field when it was written - I found it unsatisfyingly un-synthesized,
unconnected, and short of detail (but this is subjective). I found the 2nd edition of
Russell and Norvig to be a better introduction where it covers the same topic, which
it does for everything I can think of, except VC dimension.
The book sorely needs an update, it was written in 1997 and the field has moved
fast. A comparison with Mitchell's current course (materials generously available
online) shows that about 1/4 of the topics taught have arisen since the book was
published; Boosting, Support Vector Machines and Hidden Markov Models to name
the best-known. The book also does not cover statistical or data mining methods.
Despite the subjective complaint about lack of depth it does give the theoretical
roots and many fundamental techniques decently and readably. For many purposes
though it may have been superceded by R&N 2nd ed.
 Comment | Permalink | Was this review helpful to you?   (Report this) 
Share your thoughts with other customers: 
› See all 30 customer reviews...
 
 
Most Recent Customer Reviews
 Outstanding
I read this book about 7 years ago while in
the PhD program at Stanford University. I
consider this book not only the best
Machine Learning book, but one of the best
books in all... Read more
Published 6 months ago by Husam Abu-Haimed
 Great Start to Machine Learning
I have used this book during my masters
and found it to be an extremely helpful and
a gentle introduction to the thick and things
of machine learning applications.
Read more
Published 6 months ago by Subrat Nanda
 Best book I've seen on topic
I have this book listed as one of the best
and most interesting I've ever read. I loved
the book just as much as I loved the course
we used it in. Read more
Published 13 months ago by Lars Kristensson
 too expensive I would say
great book if you wanna start sth anywhere
in machine learning, but it is toooooo
expensive.
Published 17 months ago by X. Wu
 Excellent book, concise and
readable
This is a great book if you're starting out
with machine learning. It's rare to come
across a book like this that is very well
written and has technical depth. Read more
Published 20 months ago by Part Time Reader
 great book
This is a great book because it focuses on
machine learning techniques. It has been
used as textbook in my class.
Published on November 11, 2005 by Jay
 Great introduction book for
students in data mining and machine
learning class
Although this text book is not required in
my data mining class, but I found it is very
helpful for my study. Read more
Published on October 24, 2005 by Thanh Doan
 Excellently written
I am using this textbook for a Machine
Learning class. While my professor is
excellent, I must say that this book is a
welcome addition to class. Read more
Published on October 12, 2005 by Gregor Kronenberger
 Just a brief introduction to ML
...
First of all, the statistical part of machine
learning is JUST a real subset of
mathematical statisitcs, whatever Bayesian
or frequentist. Read more
Published on September 12, 2005 by supercutepig
 Excellent reference book
I liked the book. But I think author must
provide more figures in the book like Duda
and Hart's Pattern Classification book.
Read more
Published on December 25, 2004 by Fatih Nar
Search Customer Reviews
 Only search this product's reviews
› See all 30 customer reviews...
 
Customer Discussions Beta (What's this?)
New! See recommended Discussions for You
This product's forum (0 discussions)
DiscussionRepliesLatest Post
No discussions yet
Ask questions, Share opinions, Gain insight
Start a new discussion
Topic:
   
Related forums
machine learning (start the discussion)
artificial intelligence  (1 discussion)
Product Information from the Amapedia Community Beta (What's this?)
Be the first person to add an article about this item at Amapedia.com. 
› See featured Amapedia.com articles 
Listmania!
 
Machine Learning and Graphs: A list by J. Chan "PhD Student (Computer
Science)"
 Bayesian Network Books: A list by Tincture Of Iodine "TOI"
 Books on Algorithms on a variety of topics: A list by calvinnme "Texan refugee"
Create a Listmania! list
Search Listmania!
So You'd Like to...
 
Learn Advanced Mathematics on Your Own: A guide by Gal Gross "Wir müssen
wissen, wir werden wissen. - David Hilbert"
 Learn more about Artificial Intelligence (AI) and Games: A guide by John Funge
 
study curriculum of B.S. computer science (honors mode): A guide by
"josie_roberts"
Create a guide
Search Guides
Look for Similar Items by Category
Computers & Internet > Computer Science > Artificial Intelligence > Machine Learning
Look for Similar Items by Subject
 Machine learning
 Computer Books: General
Find books matching ALL checked subjects 
i.e., each book must be in subject 1 AND subject 2 AND ... 
Harry Potter Store
Our Harry
Potter
Store
features
all things
Harry,
including
books, audio CDs and
cassettes, DVDs,
soundtracks, and more.
 
Got Your Neti Pot?
Give your
sinuses a
bath with
one of the many neti
pots in our Health &
Personal Care Store.
›See more
 
Drop It Like It's
Waterproof
And
shockproof,
crushproof,
and
freezeproof. All that, in
addition to 7-megapixel
resolution and Bright
Capture technology,
makes the Olympus
Stylus 770SW the
perfect vacation
companion. Plus, it's now
available for only
$289.94 from
Amazon.com.
 
Editors' Faves in
Books
Save
40%
on The
Significant 7, our favorite
picks for the month.
 
 
  
Feedback 
 If you need help or have a question for Customer Service, contact us.
 Would you like to update product info or give feedback on images? (We'll ask you to sign in so we can get back to you)
 Is there any other feedback you would like to provide? Click here
Where's My Stuff?
Track your recent orders.
View or change your orders in Your Account.
Shipping & Returns
See our shipping rates & policies.
Return an item (here's our Returns Policy).
Need Help?
Forgot your password? Click here.
Redeem or buy a gift certificate/card.
Visit our Help department.
Search Amazon.com    
Your Recent History (What's this?)
 
Recently Viewed Products
After viewing product detail pages or search results, look here to find an easy way to navigate back to pages you are interested in.
Look to the right column to find helpful suggestions for your shopping session.
› View & edit Your Browsing History
   
 Amazon.com Home  |   Directory of All Stores
International Sites:  Canada  |  United Kingdom  |  Germany  |  Japan  |  France  |  China
Help  |  View Cart  |  Your Account  |  Sell Items  |  1-Click Settings
  
 
  
 
  
 
Fig. 1.2.  Books recommended by Amazon.com when viewing Tom Mitchell’s Ma-
chine Learning Book [Mit97]. It is desirable for the vendor to recommend relevant
books which a user might purchase.
Fig.  1.3.  11  Pictures  of  the  same  person  taken  from  the  Yale  face  recognition
database.  The  challenge  is  to  recognize  that  we  are  dealing  with  the  same  per-
son in all 11 cases.

61  Introduction
HAVANA (Reuters) - The European Union’s top development aid official
left Cuba on Sunday convinced that EU diplomatic sanctions against
the communist island should be dropped after Fidel Castro’s
retirement, his main aide said.
<TYPE="ORGANIZATION">HAVANA</>(<TYPE="ORGANIZATION">Reuters</>) - The
<TYPE="ORGANIZATION">European Union</>’s top development aid official left
<TYPE="ORGANIZATION">Cuba</>on Sunday convinced that EU diplomatic sanctions
against the communist<TYPE="LOCATION">island</>should be dropped after
<TYPE="PERSON">Fidel Castro</>’s retirement, his main aide said.
Fig.  1.4.  Named  entity  tagging  of  a  news  article  (using  LingPipe).  The  relevant
locations, organizations and persons are tagged for further information extraction.
are clearly terms from agriculture, it is equally clear that in the context of
contemporary politics they refer to members of the Republican Party.
Other applications which take advantage of learning arespeech recog-
nition(annotate an audio sequence with text, such as the system shipping
with Microsoft Vista), the recognition of handwriting (annotate a sequence
of strokes with text, a feature common to many PDAs), trackpads of com-
puters (e.g. Synaptics, a major manufacturer of such pads derives its name
from the synapses of a neural network), the detection of failure in jet en-
gines,  avatar  behavior  in  computer  games  (e.g.  Black  and  White),  direct
marketing (companies use past purchase behavior to guesstimate whether
you might be willing to purchase even more) and floor cleaning robots (such
as iRobot’s Roomba). The overarching theme of learning problems is that
there exists a nontrivial dependence between some observations, which we
will commonly refer to asxand a desired response, which we refer to asy,
for which a simple set of deterministic rules is not known. By using learning
we can infer such a dependency betweenxandyin a systematic fashion.
We  conclude  this  section  by  discussing  the  problem  ofclassification,
since  it  will  serve  as  a  prototypical  problem  for  a  significant  part  of  this
book. It occurs frequently in practice: for instance, when performing spam
filtering, we are interested in a yes/no answer as to whether an e-mail con-
tains relevant information or not. Note that this issue is quite user depen-
dent: for a frequent traveller e-mails from an airline informing him about
recent discounts might prove valuable information, whereas for many other
recipients this might prove more of an nuisance (e.g. when the e-mail relates
to  products  available  only  overseas).  Moreover,  the  nature  of  annoying  e-
mails might change over time, e.g. through the availability of new products
(Viagra, Cialis, Levitra, . . . ), different opportunities for fraud (the Nigerian
419 scam which took a new twist after the Iraq war), or different data types
(e.g. spam which consists mainly of images). To combat these problems we

1.1  A Taste of Machine Learning7
Fig. 1.5.  Binary classification; separate stars from diamonds. In this example we
are able to do so by drawing a straight line which separates both sets. We will see
later that this is an important example of what is called alinear classifier.
want to build a system which is able tolearnhow to classify new e-mails.
A seemingly unrelated problem, that of cancer diagnosis shares a common
structure: given histological data (e.g. from a microarray analysis of a pa-
tient’s tissue) infer whether a patient is healthy or not. Again, we are asked
to generate a yes/no answer given a set of observations. See Figure 1.5 for
an example.
1.1.2  Data
It is useful to characterize learning problems according to the type of data
they use. This is a great help when encountering new challenges, since quite
often problems on similar data types can be solved with very similar tech-
niques. For instance natural language processing and bioinformatics use very
similar  tools  for  strings  of  natural  language  text  and  for  DNA  sequences.
Vectorsconstitute the most basic entity we might encounter in our work.
For instance, a life insurance company might be interesting in obtaining the
vector  of  variables  (blood  pressure,  heart  rate,  height,  weight,  cholesterol
level, smoker, gender) to infer the life expectancy of a potential customer.
A farmer might be interested in determining the ripeness of fruit based on
(size, weight, spectral data). An engineer might want to find dependencies
in (voltage, current) pairs. Likewise one might want to represent documents
by a vector of counts which describe the occurrence of words. The latter is
commonly referred to as bag of words features.
One of the challenges in dealing with vectors is that thescalesand units
of different coordinates may vary widely. For instance, we could measure the
height in kilograms, pounds, grams, tons, stones, all of which would amount
to  multiplicative  changes.  Likewise,  when  representing  temperatures,  we
have  a  full  class  of  affine  transformations,  depending  on  whether  we  rep-
resent  them  in  terms  of  Celsius,  Kelvin  or  Farenheit.  One  way  of  dealing

81  Introduction
with those issues in an automatic fashion is to normalize the data. We will
discuss means of doing so in an automatic fashion.
Lists:In some cases the vectors we obtain may contain a variable number
of features. For instance, a physician might not necessarily decide to perform
a full battery of diagnostic tests if the patient appears to be healthy.
Setsmay appear in learning problems whenever there is a large number of
potential causes of an effect, which are not well determined. For instance, it is
relatively easy to obtain data concerning the toxicity of mushrooms. It would
be desirable to use such data to infer the toxicity of a new mushroom given
information about its chemical compounds. However, mushrooms contain a
cocktail of compounds out of which one or more may be toxic. Consequently
we need to infer the properties of an object given asetof features, whose
composition and number may vary considerably.
Matricesare a convenient means of representing pairwise relationships.
For instance, in collaborative filtering applications the rows of the matrix
may represent users whereas the columns correspond to products. Only in
some cases we will have knowledge about a given (user, product) combina-
tion, such as the rating of the product by a user.
A related situation occurs whenever we only have similarity information
between  observations,  as  implemented  by  a  semi-empirical  distance  mea-
sure.  Some  homology  searches  in  bioinformatics,  e.g.  variants  of  BLAST
[AGML90], only return a similarity score which does not necessarily satisfy
the requirements of a metric.
Imagescould be thought of as two dimensional arrays of numbers, that is,
matrices. This representation is very crude, though, since they exhibit spa-
tial coherence (lines, shapes) and (natural images exhibit) a multiresolution
structure. That is, downsampling an image leads to an object which has very
similar statistics to the original image. Computer vision and psychooptics
have created a raft of tools for describing these phenomena.
Videoadds a temporal dimension to images. Again, we could represent
them as a three dimensional array. Good algorithms, however, take the tem-
poral coherence of the image sequence into account.
Trees and Graphsare often used to describe relations between collec-
tions of objects. For instance the ontology of webpages of the DMOZ project
(www.dmoz.org) has  the  form of a  tree with topics becoming  increasingly
refined as we traverse from the root to one of the leaves (Arts→Animation
→Anime→General Fan Pages→Official Sites). In the case of gene ontol-
ogy the relationships form a directed acyclic graph, also referred to as the
GO-DAG [ABB
+
00].
Both examples above describe estimation problems where our observations

1.1  A Taste of Machine Learning9
are  vertices  of  a  tree  or  graph.  However,  graphs  themselves  may  be  the
observations.  For  instance,  the  DOM-tree  of  a  webpage,  the  call-graph  of
a computer program, or the protein-protein interaction networks may form
the basis upon which we may want to perform inference.
Stringsoccur frequently, mainly in the area of bioinformatics and natural
language processing. They may be the input to our estimation problems, e.g.
when classifying an e-mail as spam, when attempting to locate all names of
persons and organizations in a text, or when modeling the topic structure
of a document. Equally well they may constitute the output of a system.
For instance, we may want to perform document summarization, automatic
translation, or attempt to answer natural language queries.
Compound structuresare the most commonly occurring object. That
is, in most situations we will have a structured mix of different data types.
For instance, a webpage might contain images, text, tables, which in turn
contain numbers, and lists, all of which might constitute nodes on a graph of
webpages linked among each other. Good statistical modelling takes such de-
pendencies and structures into account in order to tailor sufficiently flexible
models.
1.1.3  Problems
The range of learning problems is clearly large, as we saw when discussing
applications. That said, researchers have identified an ever growing number
of templates which can be used to address a large set of situations. It is those
templates which make deployment of machine learning in practice easy and
our discussion will largely focus on a choice set of such problems. We now
give a by no means complete list of templates.
Binary Classificationis probably the most frequently studied problem
in machine learning and it has led to a large number of important algorithmic
and  theoretic  developments  over  the  past  century.  In  its  simplest  form  it
reduces to the question: given a patternxdrawn from a domainX, estimate
which  value  an  associated  binary  random  variabley∈ {±1}will  assume.
For instance, given pictures of apples and oranges, we might want to state
whether the object in question is an apple or an orange. Equally well, we
might  want  to  predict  whether  a  home  owner  might  default  on  his  loan,
given income data, his credit history, or whether a given e-mail is spam or
ham. The ability to solve this basic problem already allows us to address a
large variety of practical settings.
There are many variants exist with regard to the protocol in which we are
required to make our estimation:

101  Introduction
Fig. 1.6.  Left: binary classification. Right: 3-class classification. Note that in the
latter case we have much more degree for ambiguity. For instance, being able to
distinguish stars from diamonds may not suffice to identify either of them correctly,
since we also need to distinguish both of them from triangles.
•We might see a sequence of (x
i
,y
i
) pairs for whichy
i
needs to be estimated
in an instantaneous online fashion. This is commonly referred to as online
learning.
•We might observe a collectionX:={x
1
,...x
m
}andY:={y
1
,...y
m
}of
pairs (x
i
,y
i
) which are then used to estimateyfor a (set of) so-far unseen
X
′
=
{
x
′
1
,...,x
′
m
′
}
. This is commonly referred to as batch learning.
•We might be allowed to knowX
′
already at the time of constructing the
model. This is commonly referred to as transduction.
•We might be allowed to chooseXfor the purpose of model building. This
is known as active learning.
•We might not have full information aboutX, e.g. some of the coordinates
of  thex
i
might  be  missing,  leading  to  the  problem  of  estimation  with
missing variables.
•The setsXandX
′
might come from different data sources, leading to the
problem of covariate shift correction.
•We might be given observations stemming from two problems at the same
time with the side information that both problems are somehow related.
This is known as co-training.
•Mistakes of estimation might be penalized differently depending on the
type of error, e.g. when trying to distinguish diamonds from rocks a very
asymmetric loss applies.
Multiclass  Classificationis  the  logical  extension  of  binary  classifica-
tion. The main difference is that nowy∈ {1,...,n}may assume a range
of different values. For instance, we might want to classify a document ac-
cording to the language it was written in (English, French, German, Spanish,
Hindi, Japanese, Chinese, . . . ). See Figure 1.6 for an example. The main dif-
ference to before is that the cost of error may heavily depend on the type of

1.1  A Taste of Machine Learning11
Fig. 1.7.  Regression estimation. We are given a number of instances (indicated by
black dots) and would like to find some functionfmapping the observationsXto
Rsuch thatf(x) is close to the observed values.
error we make. For instance, in the problem of assessing the risk of cancer, it
makes a significant difference whether we mis-classify an early stage of can-
cer as healthy (in which case the patient is likely to die) or as an advanced
stage of cancer (in which case the patient is likely to be inconvenienced from
overly aggressive treatment).
Structured  Estimationgoes  beyond  simple  multiclass  estimation  by
assuming that the labelsyhave some additional structure which can be used
in the estimation process. For instance,ymight be a path in an ontology,
when  attempting  to  classify  webpages,ymight  be  a  permutation,  when
attempting to match objects, to perform collaborative filtering, or to rank
documents in a retrieval setting. Equally well,ymight be an annotation of
a text, when performing named entity recognition. Each of those problems
has  its  own  properties  in  terms  of  the  set  ofywhich  we  might  consider
admissible, or how to search this space. We will discuss a number of those
problems in Chapter??.
Regressionis another prototypical application. Here the goal is to esti-
mate a real-valued variabley∈Rgiven a patternx(see e.g. Figure 1.7). For
instance, we might want to estimate the value of a stock the next day, the
yield of a semiconductor fab given the current process, the iron content of
ore given mass spectroscopy measurements, or the heart rate of an athlete,
given accelerometer data. One of the key issues in which regression problems
differ from each other is the choice of a loss. For instance, when estimating
stock values our loss for a put option will be decidedly one-sided. On the
other hand, a hobby athlete might only care that our estimate of the heart
rate matches the actual on average.
Novelty Detectionis a rather ill-defined problem. It describes the issue
of  determining  “unusual”  observations  given  a  set  of  past  measurements.
Clearly, the choice of what is to be considered unusual is very subjective.
A commonly accepted notion is that unusual events occur rarely. Hence a
possible goal is to design a system which assigns to each observation a rating

121  Introduction
Fig.  1.8.  Left:  typical  digits  contained  in  the  database  of  the  US  Postal  Service.
Right:  unusual  digits  found  by  a  novelty  detection  algorithm  [SPST
+
01]  (for  a
description of the algorithm see Section 7.4). The score below the digits indicates
the degree of novelty. The numbers on the lower right indicate the class associated
with the digit.
as to how novel it is. Readers familiar with density estimation might contend
that the latter would be a reasonable solution. However, we neither need a
score which sums up to 1 on the entire domain, nor do we care particularly
much about novelty scores fortypicalobservations. We will later see how this
somewhat easier goal can be achieved directly. Figure 1.8 has an example of
novelty detection when applied to an optical character recognition database.
1.2  Probability Theory
In order to deal with the instances of where machine learning can be used, we
need to develop an adequate language which is able to describe the problems
concisely. Below we begin with a fairly informal overview over probability
theory. For more details and a very gentle and detailed discussion see the
excellent book of [BT03].
1.2.1  Random Variables
Assume that we cast a dice and we would like to know our chances whether
we would see 1 rather than another digit. If the dice is fair all six outcomes
X={1,...,6}are equally likely to occur, hence we would see a 1 in roughly
1 out of 6 cases. Probability theory allows us to model uncertainty in the out-
come of such experiments. Formally we state that 1 occurs with probability
1
6
.
In  many  experiments,  such  as  the  roll  of  a  dice,  the  outcomes  are  of  a
numerical nature and we can handle them easily. In other cases, the outcomes
may not be numerical,e.g.,if we toss a coin and observe heads or tails. In
these cases, it is useful to associate numerical values to the outcomes. This
is done via a random variable. For instance, we can let a random variable

1.2  Probability Theory13
Xtake  on  a  value  +1  whenever  the  coin  lands  heads  and  a  value  of−1
otherwise. Our notational convention will be to use uppercase letters,e.g.,
X,Yetc to denote random variables and lower case letters,e.g.,x,yetc to
denote the values they take.
X
weight
height
ξ(x)
x
Fig. 1.9.  The random variableξmaps from the set of outcomes of an experiment
(denoted  here  byX)  to  real  numbers.  As  an  illustration  hereXconsists  of  the
patients a physician might encounter, and they are mapped viaξto their weight
and height.
1.2.2  Distributions
Perhaps  the  most  important  way  to  characterize  a  random  variable  is  to
associate probabilities with the values it can take. If the random variable is
discrete,i.e.,it takes on a finite number of values, then this assignment of
probabilities is called aprobability mass functionor PMF for short. A PMF
must  be,  by  definition,  non-negative  and  must  sum  to  one.  For  instance,
if the coin is fair,i.e.,heads and tails are equally likely, then the random
variableXdescribed above takes on values of +1 and−1 with probability
0.5. This can be written as
Pr(X= +1) = 0.5 andPr(X=−1) = 0.5.(1.1)
When there is no danger of confusion we will use the slightly informal no-
tationp(x) :=Pr(X=x).
In case of a continuous random variable the assignment of probabilities
results in aprobability density functionor PDF for short. With some abuse
of terminology, but keeping in line with convention, we will often use density
or distribution instead of probability density function. As in the case of the
PMF, a PDF must also be non-negative and integrate to one. Figure 1.10
shows two distributions: the uniform distribution
p(x) =
{
1
b−a
ifx∈[a,b]
0otherwise,
(1.2)

141  Introduction
-4-2024
0.0
0.1
0.2
0.3
0.4
0.5
-4-2024
0.0
0.1
0.2
0.3
0.4
0.5
Fig.  1.10.  Two  common  densities.  Left:  uniform  distribution  over  the  interval
[−1,1]. Right: Normal distribution with zero mean and unit variance.
and the Gaussian distribution (also called normal distribution)
p(x) =
1
√
2πσ
2
exp
(
−
(x−μ)
2
2σ
2
)
.(1.3)
Closely associated with a PDF is the indefinite integral overp. It is com-
monly referred to as the cumulative distribution function (CDF).
Definition 1.1 (Cumulative Distribution Function)For a real valued
random variableXwith PDFpthe associated Cumulative Distribution Func-
tionFis given by
F(x
′
) := Pr
{
X≤x
′
}
=
∫
x
′
−∞
dp(x).(1.4)
The  CDFF(x
′
)  allows  us  to  perform  range  queries  onpefficiently.  For
instance, by integral calculus we obtain
Pr(a≤X≤b) =
∫
b
a
dp(x) =F(b)−F(a).(1.5)
The values ofx
′
for whichF(x
′
) assumes a specific value, such as 0.1 or 0.5
have a special name. They are called thequantilesof the distributionp.
Definition 1.2 (Quantiles)Letq∈(0,1). Then the value ofx
′
for which
Pr(X < x
′
)≤qandPr(X > x
′
)≤1−qis theq-quantile of the distribution
p. Moreover, the valuex
′
associated withq= 0.5is called the median.

1.2  Probability Theory15
p(x)
Fig. 1.11.  Quantiles of a distribution correspond to the area under the integral of
the densityp(x) for which the integral takes on a pre-specified value. Illustrated
are the 0.1, 0.5 and 0.9 quantiles respectively.
1.2.3  Mean and Variance
A common question to ask about a random variable is what its expected
value might be. For instance, when measuring the voltage of a device, we
might ask what its typical values might be. When deciding whether to ad-
minister a growth hormone to a child a doctor might ask what a sensible
range of height should be. For those purposes we need to define expectations
and related quantities of distributions.
Definition 1.3 (Mean)We define the mean of a random variableXas
E[X] :=
∫
xdp(x)(1.6)
More  generally,  iff:R→Ris  a  function,  thenf(X)is  also  a  random
variable. Its mean is mean given by
E[f(X)] :=
∫
f(x)dp(x).(1.7)
WheneverXis a discrete random variable the integral in (1.6) can be re-
placed by a summation:
E[X] =
∑
x
xp(x).(1.8)
For instance, in the case of a dice we have equal probabilities of 1/6 for all
6  possible  outcomes.  It  is  easy  to  see  that  this  translates  into  a  mean  of
(1 + 2 + 3 + 4 + 5 + 6)/6 = 3.5.
The mean of a random variable is useful in assessing expected losses and
benefits. For instance, as a stock broker we might be interested in the ex-
pected value of our investment in a year’s time. In addition to that, however,
we also might want to investigate theriskof our investment. That is, how
likely it is that the value of the investment might deviate from its expecta-
tion since this might be more relevant for our decisions. This means that we

161  Introduction
need a variable to quantify the risk inherent in a random variable. One such
measure is thevarianceof a random variable.
Definition 1.4 (Variance)We  define  the  variance  of  a  random  variable
Xas
Var[X] :=E
[
(X−E[X])
2
]
.(1.9)
As before, iff:R→Ris a function, then the variance off(X)is given by
Var[f(X)] :=E
[
(f(X)−E[f(X)])
2
]
.(1.10)
The variance measures by how much on averagef(X) deviates from its ex-
pected value. As we shall see in Section 2.1, an upper bound on the variance
can be used to give guarantees on the probability thatf(X) will be within
of its expected value. This is one of the reasons why the variance is often
associated with the risk of a random variable. Note that often one discusses
properties of a random variable in terms of itsstandard deviation, which is
defined as the square root of the variance.
1.2.4  Marginalization, Independence, Conditioning, and Bayes
Rule
Given  two  random  variablesXandY,  one  can  write  their  joint  density
p(x,y). Given the joint density, one can recoverp(x) by integrating outy.
This operation is called marginalization:
p(x) =
∫
y
dp(x,y).(1.11)
IfYis a discrete random variable, then we can replace the integration with
a summation:
p(x) =
∑
y
p(x,y).(1.12)
We say thatXandYare independent,i.e.,the values thatXtakes does
not depend on the values thatYtakes whenever
p(x,y) =p(x)p(y).(1.13)
Independence is useful when it comes to dealing with large numbers of ran-
dom  variables  whose  behavior  we  want  to  estimate  jointly.  For  instance,
whenever we perform repeated measurements of a quantity, such as when

1.2  Probability Theory17
-0.50.00.51.01.52.0
-0.5
0.0
0.5
1.0
1.5
2.0
-0.50.00.51.01.52.0
-0.5
0.0
0.5
1.0
1.5
2.0
Fig.  1.12.  Left:  a  sample  from  two  dependent  random  variables.  Knowing  about
first coordinate allows us to improve our guess about the second coordinate. Right:
a  sample  drawn  from  two  independent  random  variables,  obtained  by  randomly
permuting the dependent sample.
measuring the voltage of a device, we will typically assume that the individ-
ual measurements are drawn from the same distribution and that they are
independent of each other. That is, having measured the voltage a number
of times will not affect the value of the next measurement. We will call such
random variables to beindependently and identically distributed, or in short,
iidrandom variables. See Figure 1.12 for an example of a pair of random
variables drawn from dependent and independent distributions respectively.
Conversely, dependence can be vital in classification and regression prob-
lems. For instance, the traffic lights at an intersection are dependent of each
other. This allows a driver to perform the inference that when the lights are
green in his direction there will be no traffic crossing his path, i.e. the other
lights will indeed be red. Likewise, whenever we are given a picturexof a
digit, we hope that there will be dependence betweenxand its labely.
Especially in the case of dependent random variables, we are interested
in  conditional  probabilities,i.e.,probability  thatXtakes  on  a  particular
value given the value ofY. ClearlyPr(X=rain|Y=cloudy) is higher than
Pr(X=rain|Y=sunny). In other words, knowledge about the value ofY
significantly influences the distribution ofX. This is captured via conditional
probabilities:
p(x|y) :=
p(x,y)
p(y)
.(1.14)
Equation 1.14 leads to one of the key tools in statistical inference.
Theorem 1.5 (Bayes Rule)Denote  byXandYrandom  variables  then

181  Introduction
the following holds
p(y|x) =
p(x|y)p(y)
p(x)
.(1.15)
This follows from the fact thatp(x,y) =p(x|y)p(y) =p(y|x)p(x). The key
consequence  of  (1.15)  is  that  we  mayreversethe  conditioning  between  a
pair of random variables.
1.2.4.1  An Example
We illustrate our reasoning by means of a simple example — inference using
an AIDS test. Assume that a patient would like to have such a test carried
out on him. The physician recommends a test which is guaranteed to detect
HIV-positive whenever a patient is infected. On the other hand, for healthy
patients it has a 1% error rate. That is, with probability 0.01 it diagnoses
a patient as HIV-positive even when he is, in fact, HIV-negative. Moreover,
assume that 0.15% of the population is infected.
Now  assume  that  the  patient  has  the  test  carried  out  and  the  test  re-
turns ’HIV-negative’. In this case, logic implies that he is healthy, since the
test has 100% detection rate. In the converse case things are not quite as
straightforward. Denote byXandTthe random variables associated with
the health status of the patient and the outcome of the test respectively. We
are interested inp(X= HIV+|T= HIV+). By Bayes rule we may write
p(X= HIV+|T= HIV+) =
p(T= HIV+|X= HIV+)p(X= HIV+)
p(T= HIV+)
While we know all terms in the numerator,p(T= HIV+) itself is unknown.
That said, it can be computed via
p(T= HIV+) =
∑
x∈{HIV+,HIV-}
p(T= HIV+,x)
=
∑
x∈{HIV+,HIV-}
p(T= HIV+|x)p(x)
= 1.0·0.0015 + 0.01·0.9985.
Substituting back into the conditional expression yields
p(X= HIV+|T= HIV+) =
1.0·0.0015
1.0·0.0015 + 0.01·0.9985
= 0.1306.
In other words, even though our test is quite reliable, there is such a low
prior probability of having been infected with AIDS that there is not much
evidence to accept the hypothesis even after this test.

1.2  Probability Theory19
agex
test 1
test 2
Fig. 1.13.  A graphical description of our HIV testing scenario. Knowing the age of
the patient influences our prior on whether the patient is HIV positive (the random
variableX). The outcomes of the tests 1 and 2 are independent of each other given
the  statusX.  We  observe  the  shaded  random  variables  (age,  test  1,  test  2)  and
would like to infer the un-shaded random variableX. This is a special case of a
graphical model which we will discuss in Chapter??.
Let us now think how we could improve the diagnosis. One way is to ob-
tain further information about the patient and to use this in the diagnosis.
For instance, information about his age is quite useful. Suppose the patient
is 35 years old. In this case we would want to computep(X= HIV+|T=
HIV+,A= 35) where the random variableAdenotes the age. The corre-
sponding expression yields:
p(T= HIV+|X= HIV+,A)p(X= HIV+|A)
p(T= HIV+|A)
Here we simplyconditionedall random variables onAin order to take addi-
tional information into account. We may assume that the test isindependent
of the age of the patient, i.e.
p(t|x,a) =p(t|x).
What remains therefore isp(X= HIV+|A). Recent US census data pegs this
number at approximately 0.9%. Plugging all data back into the conditional
expression yields
1·0.009
1·0.009+0.01·0.991
= 0.48. What has happened here is that
by including additional observed random variables our estimate has become
more  reliable.  Combination  of  evidence  is  a  powerful  tool.  In  our  case  it
helped  us  make  the  classification  problem  of  whether  the  patient  is  HIV-
positive or not more reliable.
A second tool in our arsenal is the use of multiple measurements. After
the first test the physician is likely to carry out a second test to confirm the
diagnosis. We denote byT
1
andT
2
(andt
1
,t
2
respectively) the two tests.
Obviously, what we want is thatT
2
will give us an “independent” second
opinion  of  the  situation.  In  other  words,  we  want  to  ensure  thatT
2
does
not make the same mistakes asT
1
. For instance, it is probably a bad idea
to repeatT
1
without changes, since it might perform the same diagnostic

201  Introduction
mistake as before. What we want is that the diagnosis ofT
2
is independent
of that ofT
2
giventhe health statusXof the patient. This is expressed as
p(t
1
,t
2
|x) =p(t
1
|x)p(t
2
|x).(1.16)
See Figure 1.13 for a graphical illustration of the setting. Random variables
satisfying  the  condition  (1.16)  are  commonly  referred  to  asconditionally
independent. In shorthand we writeT
1
,T
2
⊥⊥X. For the sake of the argument
we assume that the statistics forT
2
are given by
p(t
2
|x)x= HIV-x= HIV+
t
2
= HIV-0.950.01
t
2
= HIV+    0.050.99
Clearly  this  test  is  less  reliable  than  the  first  one.  However,  we  may  now
combine  both  estimates  to  obtain  a  very  reliable  estimate  based  on  the
combination of both events. For instance, fort
1
=t
2
= HIV+ we have
p(X= HIV+|T
1
= HIV+,T
2
= HIV+) =
1.0·0.99·0.009
1.0·0.99·0.009 + 0.01·0.05·0.991
= 0.95.
In other words, by combining two tests we can now confirm with very high
confidence that the patient is indeed diseased. What we have carried out is a
combination of evidence. Strong experimental evidence of two positive tests
effectively overcame an initially very strong prior which suggested that the
patient might be healthy.
Tests  such  as  in  the  example  we  just  discussed  are  fairly  common.  For
instance, we might need to decide which manufacturing procedure is prefer-
able, which choice of parameters will give better results in a regression es-
timator, or whether to administer a certain drug. Note that often our tests
may not be conditionally independent and we would need to take this into
account.
1.3  Basic Algorithms
We conclude our introduction to machine learning by discussing four simple
algorithms,  namely  Naive  Bayes,  Nearest  Neighbors,  the  Mean  Classifier,
and the Perceptron, which can be used to solve a binary classification prob-
lem such as that described in Figure 1.5. We will also introduce the K-means
algorithm  which  can  be  employed  when  labeled  data  is  not  available.  All
these algorithms are readily usable and easily implemented from scratch in
their most basic form.
For the sake of concreteness assume that we are interested in spam filter-
ing. That is, we are given a set ofme-mailsx
i
, denoted byX:={x
1
,...,x
m
}

1.3  Basic Algorithms21
From: "LucindaParkison497072" <LucindaParkison497072@hotmail.com>
To: <kargr@earthlink.net>
Subject: we think ACGU is our next winner
Date: Mon, 25 Feb 2008 00:01:01 -0500
MIME-Version: 1.0
X-OriginalArrivalTime: 25 Feb 2008 05:01:01.0329 (UTC) FILETIME=[6A931810:01C8776B]
Return-Path: lucindaparkison497072@hotmail.com
(ACGU) .045 UP 104.5%
I do think that (ACGU) at it’s current levels looks extremely attractive.
Asset Capital Group, Inc., (ACGU) announced that it is expanding the marketing of bio-remediation fluids and cleaning equipment. After
its recent acquisition of interest in American Bio-Clean Corporation and an 80
News is expected to be released next week on this growing company and could drive the price even higher. Buy (ACGU) Monday at open. I
believe those involved at this stage could enjoy a nice ride up.
Fig. 1.14.  Example of a spam e-mail
x
1
:The quick brown fox jumped over the lazy dog.
x
2
:The dog hunts a fox.
the  quick  brown  fox  jumped  over  lazy  dog  hunts  a
x
1
2111111100
x
2
1001000111
Fig. 1.15.  Vector space representation of strings.
and associated labelsy
i
, denoted byY:={y
1
,...,y
m
}. Here the labels sat-
isfyy
i
∈ {spam,ham}. The key assumption we make here is that the pairs
(x
i
,y
i
)  are  drawn  jointly  from  some  distributionp(x,y)  which  represents
the  e-mail  generating  process  for  a  user.  Moreover,  we  assume  that  there
is sufficiently strong dependence betweenxandythat we will be able to
estimateygivenxand a set of labeled instancesX,Y.
Before we do so we need to address the fact that e-mails such as Figure 1.14
aretext,  whereas  the  three  algorithms  we  present  will  require  data  to  be
represented in avectorialfashion. One way of converting text into a vector
is by using the so-calledbag of wordsrepresentation [Mar61, Lew98]. In its
simplest version it works as follows: Assume we have a list of all possible
words occurring inX, that is a dictionary, then we are able to assign a unique
number with each of those words (e.g. the position in the dictionary). Now
we  may  simply  count  for  each  documentx
i
the  number  of  times  a  given
wordjis occurring. This is then used as the value of thej-th coordinate
ofx
i
. Figure 1.15 gives an example of such a representation. Once we have
the latter it is easy to compute distances, similarities, and other statistics
directly from the vectorial representation.

221  Introduction
1.3.1  Naive Bayes
In the example of the AIDS test we used the outcomes of the test to infer
whether the patient is diseased. In the context of spam filtering the actual
text of the e-mailxcorresponds to the test and the labelyis equivalent to
the diagnosis. Recall Bayes Rule (1.15). We could use the latter to infer
p(y|x) =
p(x|y)p(y)
p(x)
.
We may have a good estimate ofp(y), that is, the probability of receiving
a spam or ham mail. Denote bym
ham
andm
spam
the number of ham and
spam e-mails inX. In this case we can estimate
p(ham)≈
m
ham
m
andp(spam)≈
m
spam
m
.
The key problem, however, is that we do not knowp(x|y) orp(x). We may
dispose of the requirement of knowingp(x) by settling for a likelihood ratio
L(x) :=
p(spam|x)
p(ham|x)
=
p(x|spam)p(spam)
p(x|ham)p(ham)
.(1.17)
WheneverL(x) exceeds a given thresholdcwe decide thatxis spam and
consequently reject the e-mail. Ifcis large then our algorithm is conservative
and classifies an email as spam only ifp(spam|x)p(ham|x). On the other
hand, ifcis small then the algorithm aggressively classifies emails as spam.
The key obstacle is that we have no access top(x|y). This is where we make
our key approximation. Recall Figure 1.13. In order to model the distribution
of  the  test  outcomesT
1
andT
2
we  made  the  assumption  that  they  are
conditionally  independent  of  each  other  given  the  diagnosis.  Analogously,
we may now treat the occurrence of each word in a document as a separate
test and combine the outcomes in anaivefashion by assuming that
p(x|y) =
# of words inx
∏
j=1
p(w
j
|y),(1.18)
wherew
j
denotes  thej-th  word  in  documentx.  This  amounts  to  the  as-
sumption  that  the  probability  of  occurrence  of  a  word  in  a  document  is
independent of all other words given the category of the document. Even
though  this  assumption  does  not  hold  in  general – for  instance,  the  word
“York”  is  much  more  likely  to  after  the  word  “New” – it  suffices  for  our
purposes (see Figure 1.16).
This assumption reduces the difficulty of knowingp(x|y) to that of esti-
mating the probabilities of occurrence of individual wordsw. Estimates for

1.3  Basic Algorithms23
y
word 1word 2
...
word n
word 3
Fig. 1.16.  Naive Bayes model. The occurrence of individual words is independent
of each other, given the category of the text. For instance, the wordViagrais fairly
frequent ify= spam but it is considerably less frequent ify= ham, except when
considering the mailbox of a Pfizer sales representative.
p(w|y) can be obtained, for instance, by simply counting the frequency oc-
currence of the word within documents of a given class. That is, we estimate
p(w|spam)≈
∑
m
i=1
∑
# of words inx
i
j=1
{
y
i
= spam andw
j
i
=w
}
∑
m
i=1
∑
# of words inx
i
j=1
{y
i
= spam}
Here
{
y
i
= spam andw
j
i
=w
}
equals 1 if and only ifx
i
is labeled as spam
andwoccurs as thej-th word inx
i
. The denominator is simply the total
number of words in spam documents. Similarly one can computep(w|ham).
In principle we could perform the above summation whenever we see a new
documentx. This would be terribly inefficient, since each such computation
requires a full pass throughXandY. Instead, we can perform a single pass
throughXandYand store the resulting statistics as a good estimate of the
conditional  probabilities.  Algorithm  1.1  has  details  of  an  implementation.
Note that we performed a number of optimizations: Firstly, the normaliza-
tion bym
−1
spam
andm
−1
ham
respectively is independent ofx, hence we incor-
porate it as a fixed offset. Secondly, since we are computing a product over
a large number of factors the numbers might lead to numerical overflow or
underflow. This can be addressed by summing over the logarithm of terms
rather than computing products. Thirdly, we need to address the issue of
estimatingp(w|y) for wordswwhich we might not have seen before. One
way  of  dealing  with  this  is  to  increment  all  counts  by  1.  This  method  is
commonly referred to as Laplace smoothing. We will encounter a theoretical
justification for this heuristic in Section 2.3.
This simple algorithm is known to perform surprisingly well, and variants
of  it  can  be  found  in  most  modern  spam  filters.  It  amounts  to  what  is
commonly known as “Bayesian spam filtering”. Obviously, we may apply it
to problems other than document categorization, too.

241  Introduction
Algorithm 1.1Naive Bayes
Train(X,Y){reads documentsXand labelsY}
Compute dictionaryDofXwithnwords.
Computem,m
ham
andm
spam
.
Initializeb:= logc+ logm
ham
−logm
spam
to offset the rejection threshold
Initializep∈R
2×n
withp
ij
= 1,w
spam
=n,w
ham
=n.
{Count occurrence of each word}
{Herex
j
i
denotes the number of times wordjoccurs in documentx
i
}
fori= 1 tomdo
ify
i
= spamthen
forj= 1 tondo
p
0,j
←p
0,j
+x
j
i
w
spam
←w
spam
+x
j
i
end for
else
forj= 1 tondo
p
1,j
←p
1,j
+x
j
i
w
ham
←w
ham
+x
j
i
end for
end if
end for
{Normalize counts to yield word probabilities}
forj= 1 tondo
p
0,j
←p
0,j
/w
spam
p
1,j
←p
1,j
/w
ham
end for
Classify(x){classifies documentx}
Initialize score thresholdt=−b
forj= 1 tondo
t←t+x
j
(logp
0,j
−logp
1,j
)
end for
ift >0returnspamelse returnham
1.3.2  Nearest Neighbor Estimators
An even simpler estimator than Naive Bayes is nearest neighbors. In its most
basic form it assigns the label of its nearest neighbor to an observationx
(see Figure 1.17). Hence, all we need to implement it is a distance measure
d(x,x
′
) between pairs of observations. Note that this distance need not even
be symmetric. This means that nearest neighbor classifiers can be extremely

1.3  Basic Algorithms25
Fig. 1.17.  1 nearest neighbor classifier. Depending on whether the query pointxis
closest to the star, diamond or triangles, it uses one of the three labels for it.
Fig.  1.18.k-Nearest  neighbor  classifiers  using  Euclidean  distances.  Left:  decision
boundaries obtained from a 1-nearest neighbor classifier. Middle: color-coded sets
of where the number of red / blue points ranges between 7 and 0. Right: decision
boundary determining where the blue or red dots are in the majority.
flexible.  For  instance,  we  could  use  string  edit  distances  to  compare  two
documents or information theory based measures.
However, the problem with nearest neighbor classification is that the esti-
mates can be very noisy whenever the data itself is very noisy. For instance,
if  a  spam  email  is  erroneously  labeled  as  nonspam  then  all  emails  which
are  similar  to  this  email  will  share  the  same  fate.  See  Figure  1.18  for  an
example. In this case it is beneficial to pool together a number of neighbors,
say thek-nearest neighbors ofxand use a majority vote to decide the class
membership  ofx.  Algorithm  1.2  has  a  description  of  the  algorithm.  Note
that nearest neighbor algorithms can yield excellent performance when used
with a good distance measure. For instance, the technology underlying the
Netflix progress prize [BK07] was essentially nearest neighbours based.
Note that it is trivial to extend the algorithm to regression. All we need
to change in Algorithm 1.2 is to return the average of the valuesy
i
instead
of their majority vote. Figure 1.19 has an example.
Note that the distance computationd(x
i
,x) for all observations can be-

261  Introduction
Algorithm 1.2k-Nearest Neighbor Classification
Classify(X,Y,x){reads documentsX, labelsYand queryx}
fori= 1tomdo
Compute distanced(x
i
,x)
end for
Compute setIcontaining indices for theksmallest distancesd(x
i
,x).
returnmajority label of{y
i
wherei∈I}.
Fig. 1.19.k-Nearest neighbor regression estimator using Euclidean distances. Left:
some  points  (x,y)  drawn  from  a  joint  distribution.  Middle:  1-nearest  neighbour
classifier. Right: 7-nearest neighbour classifier. Note that the regression estimate is
much more smooth.
come extremely costly, in particular whenever the number of observations is
large or whenever the observationsx
i
live in a very high dimensional space.
Random projections are a technique that can alleviate the high computa-
tional cost of Nearest Neighbor classifiers. A celebrated lemma by Johnson
and Lindenstrauss [DG03] asserts that a set ofmpoints in high dimensional
Euclidean space can be projected into aO(logm/
2
) dimensional Euclidean
space such that the distance between any two points changes only by a fac-
tor of (1±). Since Euclidean distances are preserved, running the Nearest
Neighbor  classifier  on  this  mapped  data  yields  the  same  results  but  at  a
lower computational cost [GIM99].
The surprising fact is that the projection relies on a simple randomized
algorithm: to obtain ad-dimensional representation ofn-dimensional ran-
dom observations we pick a matrixR∈R
d×n
where each element is drawn
independently from a normal distribution withn
−
1
2
variance and zero mean.
Multiplyingxwith this projection matrix can be shown to achieve this prop-
erty with high probability. For details see [DG03].

1.3  Basic Algorithms27
w
μ
-
μ
+
x
Fig. 1.20.  A trivial classifier. Classification is carried out in accordance to which of
the two meansμ
−
orμ
+
is closer to the test pointx. Note that the sets of positive
and negative labels respectively form a half space.
1.3.3  A Simple Classifier
We can use geometry to design another simple classification algorithm [SS02]
for our problem. For simplicity we assume that the observationsx∈R
d
, such
as the bag-of-words representation of e-mails. We define the meansμ
+
and
μ
−
to correspond to the classesy∈{±1}via
μ
−
:=
1
m
−
∑
y
i
=−1
x
i
andμ
+
:=
1
m
+
∑
y
i
=1
x
i
.
Here we usedm
−
andm
+
to denote the number of observations with label
y
i
=−1 andy
i
= +1 respectively. An even simpler approach than using the
nearest neighbor classifier would be to use the class label which corresponds
to the mean closest to a new queryx, as described in Figure 1.20.
For Euclidean distances we have
‖μ
−
−x‖
2
=‖μ
−
‖
2
+‖x‖
2
−2〈μ
−
,x〉and(1.19)
‖μ
+
−x‖
2
=‖μ
+
‖
2
+‖x‖
2
−2〈μ
+
,x〉.(1.20)
Here〈·,·〉denotes the standard dot product between vectors. Taking differ-
ences between the two distances yields
f(x) :=‖μ
+
−x‖
2
−‖μ
−
−x‖
2
= 2〈μ
−
−μ
+
,x〉+‖μ
−
‖
2
−‖μ
+
‖
2
.
(1.21)
This is alinearfunction inxand its sign corresponds to the labels we esti-
mate forx. Our algorithm sports an important property: The classification
rule can be expressed via dot products. This follows from
‖μ
+
‖
2
=〈μ
+
,μ
+
〉=m
−2
+
∑
y
i
=y
j
=1
〈x
i
,x
j
〉and〈μ
+
,x〉=m
−1
+
∑
y
i
=1
〈x
i
,x〉.

281  Introduction
X
φ(x)
x
H
Fig. 1.21.  The feature mapφmaps observationsxfromXinto a feature spaceH.
The mapφis a convenient way of encoding pre-processing steps systematically.
Analogous expressions can be computed forμ
−
. Consequently we may ex-
press the classification rule (1.21) as
f(x) =
m
∑
i=1
α
i
〈x
i
,x〉+b(1.22)
whereb=m
−2
−
∑
y
i
=y
j
=−1
〈x
i
,x
j
〉−m
−2
+
∑
y
i
=y
j
=1
〈x
i
,x
j
〉andα
i
=y
i
/m
y
i
.
This offers a number of interesting extensions. Recall that when dealing
with documents we needed to perform pre-processing to map e-mails into a
vector space. In general, we may pick arbitrary mapsφ:X→Hmapping
the  space  of  observations  into  afeature  spaceH,  as  long  as  the  latter  is
endowed with a dot product (see Figure 1.21). This means that instead of
dealing with〈x,x
′
〉we will be dealing with〈φ(x),φ(x
′
)〉.
As we will see in Chapter 6, wheneverHis a so-called Reproducing Kernel
Hilbert Space, the inner product can be abbreviated in the form of a kernel
functionk(x,x
′
) which satisfies
k(x,x
′
) :=
〈
φ(x),φ(x
′
)
〉
.(1.23)
This small modification leads to a number of very powerful algorithm and
it  is  at  the  foundation  of  an  area  of  research  called  kernel  methods.  We
will  encounter  a  number  of  such  algorithms  for  regression,  classification,
segmentation, and density estimation over the course of the book. Examples
of suitablekare the polynomial kernelk(x,x
′
) =〈x,x
′
〉
d
ford∈Nand the
Gaussian RBF kernelk(x,x
′
) =e
−γ‖x−x
′
‖
2
forγ >0.
The upshot of (1.23) is that our basic algorithm can bekernelized. That
is, we may rewrite (1.21) as
f(x) =
m
∑
i=1
α
i
k(x
i
,x) +b(1.24)
where as beforeα
i
=y
i
/m
y
i
and the offsetbis computed analogously. As

1.3  Basic Algorithms29
Algorithm 1.3The Perceptron
Perceptron(X,Y){reads stream of observations (x
i
,y
i
)}
Initializew= 0 andb= 0
whileThere exists some (x
i
,y
i
) withy
i
(〈w,x
i
〉+b)≤0do
w←w+y
i
x
i
andb←b+y
i
end while
Algorithm 1.4The Kernel Perceptron
KernelPerceptron(X,Y){reads stream of observations (x
i
,y
i
)}
Initializef= 0
whileThere exists some (x
i
,y
i
) withy
i
f(x
i
)≤0do
f←f+y
i
k(x
i
,·) +y
i
end while
a consequence we have now moved from a fairly simple and pedestrian lin-
ear  classifier  to  one  which  yields  a  nonlinear  functionf(x)  with  a  rather
nontrivial decision boundary.
1.3.4  Perceptron
In the previous sections we assumed that our classifier had access to a train-
ing set of spam and non-spam emails. In real life, such a set might be difficult
to obtain all at once. Instead, a user might want to haveinstantresults when-
ever a new e-mail arrives and he would like the system to learn immediately
from any corrections to mistakes the system makes.
To overcome both these difficulties one could envisage working with the
following protocol: As emails arrive our algorithm classifies them as spam or
non-spam, and the user provides feedback as to whether the classification is
correct or incorrect. This feedback is then used to improve the performance
of the classifier over a period of time.
This  intuition  can  be  formalized  as  follows:  Our  classifier  maintains  a
parameter vector. At thet-th time instance it receives a data pointx
t
, to
which it assigns a label ˆy
t
using its current parameter vector. The true label
y
t
is then revealed, and used to update the parameter vector of the classifier.
Such  algorithms  are  said  to  beonline.  We  will  now  describe  perhaps  the
simplest classifier of this kind namely the Perceptron [Heb49, Ros58].
Let us assume that the data pointsx
t
∈R
d
, and labelsy
t
∈ {±1}. As
before we represent an email as a bag-of-words vector and we assign +1 to
spam emails and−1 to non-spam emails. The Perceptron maintains a weight

301  Introduction
w*
w
t
w*
w
t+1
x
t
x
t
Fig. 1.22.  The Perceptron without bias. Left: at timetwe have a weight vectorw
t
denoted by the dashed arrow with corresponding separating plane (also dashed).
For  reference  we  include  the  linear  separatorw
∗
and  its  separating  plane  (both
denoted  by  a  solid  line).  As  a  new  observationx
t
arrives  which  happens  to  be
mis-classified by the current weight vectorw
t
we perform an update. Also note the
margin between the pointx
t
and the separating hyperplane defined byw
∗
. Right:
This leads to the weight vectorw
t+1
which is more aligned withw
∗
.
vectorw∈R
d
and classifiesx
t
according to the rule
ˆy
t
:= sign{〈w,x
t
〉+b},(1.25)
where〈w,x
t
〉denotes the usual Euclidean dot product andbis an offset. Note
the similarity of (1.25) to (1.21) of the simple classifier. Just as the latter,
the Perceptron is alinearclassifier which separates its domainR
d
into two
halfspaces, namely{x|〈w,x〉+b >0}and its complement. If  ˆy
t
=y
t
then
no  updates  are  made.  On  the  other  hand,  if  ˆy
t
6=y
t
the  weight  vector  is
updated as
w←w+y
t
x
t
andb←b+y
t
.(1.26)
Figure 1.22 shows an update step of the Perceptron algorithm. For simplicity
we illustrate the case without bias, that is, whereb= 0 and where it remains
unchanged. A detailed description of the algorithm is given in Algorithm 1.3.
An important property of the algorithm is that it performs updates onw
by multiples of the observationsx
i
on which it makes a mistake. Hence we
may expresswasw=
∑
i∈Error
y
i
x
i
. Just as before, we can replacex
i
andx
byφ(x
i
) andφ(x) to obtain a kernelized version of the Perceptron algorithm
[FS99] (Algorithm 1.4).
If the dataset (X,Y) is linearly separable, then the Perceptron algorithm

1.3  Basic Algorithms31
eventually converges and correctly classifies all the points inX. The rate of
convergence however depends on the margin. Roughly speaking, the margin
quantifies how linearly separable a dataset is, and hence how easy it is to
solve a given classification problem.
Definition 1.6 (Margin)Letw∈R
d
be a weight vector and letb∈Rbe
an offset. The margin of an observationx∈R
d
with associated labelyis
γ(x,y) :=y(〈w,x〉+b).(1.27)
Moreover, the margin of an entire set of observationsXwith labelsYis
γ(X,Y) := min
i
γ(x
i
,y
i
).(1.28)
Geometrically speaking (see Figure 1.22) the margin measures the distance
ofxfrom the hyperplane defined by{x|〈w,x〉+b= 0}. Larger the margin,
the more well separated the data and hence easier it is to find a hyperplane
with correctly classifies the dataset. The following theorem asserts that if
there exists a linear classifier which can classify a dataset with a large mar-
gin, then the Perceptron will also correctly classify the same dataset after
making a small number of mistakes.
Theorem 1.7 (Novikoff ’s theorem)Let(X,Y)be a dataset with at least
one example labeled+1and one example labeled−1. LetR:= max
t
‖x
t
‖, and
assume that there exists(w
∗
,b
∗
)such that‖w
∗
‖= 1andγ
t
:=y
t
(〈w
∗
,x
t
〉+
b
∗
)≥γfor  allt.  Then,  the  Perceptron  will  make  at  most
(1+R
2
)(1+(b
∗
)
2
)
γ
2
mistakes.
This  result  is  remarkable  since  it  doesnotdepend  on  the  dimensionality
of  the  problem.  Instead,  it  only  depends  on  thegeometryof  the  setting,
as  quantified  via  the  marginγand  the  radiusRof  a  ball  enclosing  the
observations. Interestingly, a similar bound can be shown for Support Vector
Machines [Vap95] which we will be discussing in Chapter 7.
ProofWe can safely ignore the iterations where no mistakes were made
and hence no updates were carried out. Therefore, without loss of generality
assume that thet-th update was made after seeing thet-th observation and
letw
t
denote the weight vector after the update. Furthermore, for simplicity
assume that the algorithm started withw
0
= 0 andb
0
= 0. By the update
equation (1.26) we have
〈w
t
,w
∗
〉+b
t
b
∗
=〈w
t−1
,w
∗
〉+b
t−1
b
∗
+y
t
(〈x
t
,w
∗
〉+b
∗
)
≥〈w
t−1
,w
∗
〉+b
t−1
b
∗
+γ.

321  Introduction
By induction it follows that〈w
t
,w
∗
〉+b
t
b
∗
≥tγ. On the other hand we made
an update becausey
t
(〈x
t
,w
t−1
〉+b
t−1
)<0. By usingy
t
y
t
= 1,
‖w
t
‖
2
+b
2
t
=‖w
t−1
‖
2
+b
2
t−1
+y
2
t
‖x
t
‖
2
+ 1 + 2y
t
(〈w
t−1
,x
t
〉+b
t−1
)
≤‖w
t−1
‖
2
+b
2
t−1
+‖x
t
‖
2
+ 1
Since‖x
t
‖
2
=R
2
we can again apply induction to conclude that‖w
t
‖
2
+b
2
t
≤
t
[
R
2
+ 1
]
. Combining the upper and the lower bounds, using the Cauchy-
Schwartz inequality, and‖w
∗
‖= 1 yields
tγ≤〈w
t
,w
∗
〉+b
t
b
∗
=
〈[
w
t
b
t
]
,
[
w
∗
b
∗
]〉
≤
∥
∥
∥
∥
[
w
t
b
t
]
∥
∥
∥
∥
∥
∥
∥
∥
[
w
∗
b
∗
]
∥
∥
∥
∥
=
√
‖w
t
‖
2
+b
2
t
√
1 + (b
∗
)
2
≤
√
t(R
2
+ 1)
√
1 + (b
∗
)
2
.
Squaring both sides of the inequality and rearranging the terms yields an
upper bound on the number of updates and hence the number of mistakes.
The Perceptron  was the  building  block of research  on Neural Networks
[Hay98, Bis95]. The key insight was to combine large numbers of such net-
works, often in a cascading fashion, to larger objects and to fashion opti-
mization algorithms which would lead to classifiers with desirable properties.
In this book we will take a complementary route. Instead of increasing the
number of nodes we will investigate what happens when increasing the com-
plexity of the feature mapφand its associated kernelk. The advantage of
doing so is that we will reap the benefits from convex analysis and linear
models, possibly at the expense of a slightly more costly function evaluation.
1.3.5  K-Means
All the algorithms we discussed so far are supervised, that is, they assume
that labeled training data is available. In many applications this is too much
to hope for; labeling may be expensive, error prone, or sometimes impossi-
ble. For instance, it is very easy to crawl and collect every page within the
www.purdue.edudomain,  but  rather  time  consuming  to  assign  a  topic  to
each page based on its contents. In such cases, one has to resort to unsuper-
vised learning. A prototypical unsupervised learning algorithm is K-means,
which is clustering algorithm. GivenX={x
1
,...,x
m
}the goal of K-means
is to partition it intokclusters such that each point in a cluster is similar
to points from its own cluster than with points from some other cluster.

1.3  Basic Algorithms33
Towards  this  end,  define  prototype  vectorsμ
1
,...,μ
k
and  an  indicator
vectorr
ij
which is 1 if, and only if,x
i
is assigned to clusterj. To cluster our
dataset we will minimize the following distortion measure, which minimizes
the distance of each point from the prototype vector:
J(r,μ) :=
1
2
m
∑
i=1
k
∑
j=1
r
ij
‖x
i
−μ
j
‖
2
,(1.29)
wherer={r
ij
},μ={μ
j
}, and‖·‖
2
denotes the usual Euclidean square
norm.
Our goal is to findrandμ, but since it is not easy to jointly minimizeJ
with respect to bothrandμ, we will adapt a two stage strategy:
Stage 1Keep theμfixed and determiner. In this case, it is easy to see
that  the  minimization  decomposes  intomindependent  problems.
The solution for thei-th data pointx
i
can be found by setting:
r
ij
= 1 ifj= argmin
j
′
‖x
i
−μ
j
′
‖
2
,(1.30)
and 0 otherwise.
Stage 2Keep therfixed and determineμ. Since ther’s are fixed,Jis an
quadratic function ofμ. It can be minimized by setting the derivative
with respect toμ
j
to be 0:
m
∑
i=1
r
ij
(x
i
−μ
j
) = 0 for allj.(1.31)
Rearranging obtains
μ
j
=
∑
i
r
ij
x
i
∑
i
r
ij
.(1.32)
Since
∑
i
r
ij
counts the number of points assigned to clusterj, we are
essentially settingμ
j
to be the sample mean of the points assigned
to clusterj.
The  algorithm  stops  when  the  cluster  assignments  do  not  change  signifi-
cantly. Detailed pseudo-code can be found in Algorithm 1.5.
Two  issues  with  K-Means  are  worth  noting.  First,  it  is  sensitive  to  the
choice of the initial cluster centersμ. A number of practical heuristics have
been developed. For instance, one could randomly choosekpoints from the
given dataset as cluster centers. Other methods try to pickkpoints fromX
which are farthest away from each other. Second, it makes ahardassignment
of every point to a cluster center. Variants which we will encounter later in

341  Introduction
Algorithm 1.5K-Means
Cluster(X){Cluster datasetX}
Initialize cluster centersμ
j
forj= 1,...,krandomly
repeat
fori= 1tomdo
Computej
′
= argmin
j=1,...,k
d(x
i
,μ
j
)
Setr
ij
′
= 1 andr
ij
= 0 for allj
′
6=j
end for
forj= 1tokdo
Computeμ
j
=
∑
i
r
ij
x
i
∑
i
r
ij
end for
untilCluster assignmentsr
ij
are unchanged
return{μ
1
,...,μ
k
}andr
ij
the book will relax this. Instead of lettingr
ij
∈ {0,1}thesesoftvariants
will replace it with the probability that a givenx
i
belongs to clusterj.
The K-Means algorithm concludes our discussion of a set of basic machine
learning  methods  for  classification  and  regression.  They  provide  a  useful
starting point for an aspiring machine learning researcher. In this book we
will  see  many  more  such  algorithms  as  well  as  connections  between  these
basic algorithms and their more advanced counterparts.
Problems
Problem 1.1 (Eyewitness)Assume  that  an  eyewitness  is  90%  certain
that  a  given  person  committed  a  crime  in  a  bar.  Moreover,  assume  that
there were 50 people in the restaurant at the time of the crime. What is the
posterior probability of the person actually having committed the crime.
Problem 1.2 (DNA Test)Assume  the  police  have  a  DNA  library  of  10
million  records.  Moreover,  assume  that  the  false  recognition  probability  is
below0.00001% per record. Suppose a match is found after a database search
for an individual. What are the chances that the identification is correct? You
can  assume  that  the  total  population  is  100  million  people.  Hint:  compute
the probability of no match occurring first.
Problem 1.3 (Bomb Threat)Suppose  that  the  probability  that  one  of  a
thousand passengers on a plane has a bomb is1 : 1,000,000. Assuming that
the  probability  to  have  a  bomb  is  evenly  distributed  among  the  passengers,

1.3  Basic Algorithms35
the  probability  that  two  passengers  have  a  bomb  is  roughly  equal  to10
−12
.
Therefore, one might decide to take a bomb on a plane to decrease chances
that somebody else has a bomb. What is wrong with this argument?
Problem 1.4 (Monty-Hall Problem)Assume  that  in  a  TV  show  the
candidate  is  given  the  choice  between  three  doors.  Behind  two  of  the  doors
there is a pencil and behind one there is the grand prize, a car. The candi-
date chooses one door.After that, the showmaster opens another door behind
which there is a pencil. Should the candidate switch doors after that? What
is the probability of winning the car?
Problem 1.5 (Mean and Variance for Random Variables)Denote by
X
i
random variables. Prove that in this case
E
X
1
,...X
N
[
∑
i
x
i
]
=
∑
i
E
X
i
[x
i
]andVar
X
1
,...X
N
[
∑
i
x
i
]
=
∑
i
Var
X
i
[x
i
]
To show the second equality assume independence of theX
i
.
Problem 1.6 (Two Dices)Assume you have a game which uses the max-
imum  of  two  dices.  Compute  the  probability  of  seeing  any  of  the  events
{1,...,6}. Hint: prove first that the cumulative distribution function of the
maximum of a pair of random variables is the square of the original cumu-
lative distribution function.
Problem 1.7 (Matching Coins)Consider the following game: two play-
ers  bring  a  coin  each.  the  first  player  bets  that  when  tossing  the  coins  both
will match and the second one bets that they will not match. Show that even
if  one  of  the  players  were  to  bring  a  tainted  coin,  the  game  still  would  be
fair. Show that it is in the interest of each player to bring a fair coin to the
game.  Hint:  assume  that  the  second  player  knows  that  the  first  coin  favors
heads over tails.
Problem 1.8 (Randomized Maximization)How many observations do
you need to draw from a distribution to ensure that the maximum over them
is  larger  than  95%  of  all  observations  with  at  least  95%  probability?  Hint:
generalize the result from Problem 1.6 to the maximum overnrandom vari-
ables.
Application: Assume we have 1000 computers performing MapReduce [DG08]
and the Reducers have to wait until all 1000 Mappers are finished with their
job. Compute the quantile of the typical time to completion.

361  Introduction
Problem 1.9Prove  that  the  Normal  distribution  (1.3)  has  meanμand
varianceσ
2
. Hint: exploit the fact thatpis symmetric aroundμ.
Problem 1.10 (Cauchy Distribution)Prove that for the density
p(x) =
1
π(1 +x
2
)
(1.33)
mean and variance are undefined. Hint: show that the integral diverges.
Problem 1.11 (Quantiles)Find  a  distribution  for  which  the  mean  ex-
ceeds the median. Hint: the mean depends on the value of the high-quantile
terms, whereas the median does not.
Problem 1.12 (Multicategory Naive Bayes)Prove that for multicate-
gory Naive Bayes the optimal decision is given by
y
∗
(x) := argmax
y
p(y)
n
∏
i=1
p([x]
i
|y)(1.34)
wherey∈Yis the class label of the observationx.
Problem 1.13 (Bayes Optimal Decisions)Denote byy
∗
(x) = argmax
y
p(y|x)
the label associated with the largest conditional class probability. Prove that
fory
∗
(x)the probability of choosing the wrong labelyis given by
l(x) := 1−p(y
∗
(x)|x).
Moreover, show thaty
∗
(x)is the label incurring the smallest misclassification
error.
Problem 1.14 (Nearest Neighbor Loss)Show that the expected loss in-
curred by the nearest neighbor classifier does not exceed twice the loss of the
Bayes optimal decision.

2
Density Estimation
2.1  Limit Theorems
Assume you are a gambler and go to a casino to play a game of dice. As
it happens, it is your unlucky day and among the 100 times you toss the
dice, you only see ’6’ eleven times. For a fair dice we know that each face
should occur with equal probability
1
6
. Hence the expected value over 100
draws is
100
6
≈17, which is considerably more than the eleven times that we
observed. Before crying foul you decide that some mathematical analysis is
in order.
The probability of seeing aparticularsequence ofmtrials out of whichn
are a ’6’ is given by
1
6
n
5
6
m−n
. Moreover, there are
(
m
n
)
=
m!
n!(m−n)!
different
sequences of ’6’ and ’not 6’ with proportionsnandm−nrespectively. Hence
we may compute the probability of seeing a ’6’ only 11 or less via
Pr(X≤11) =
11
∑
i=0
p(i) =
11
∑
i=0
(
100
i
)[
1
6
]
i
[
5
6
]
100−i
≈7.0%(2.1)
After looking at this figure you decide that things are probably reasonable.
And, in fact, they are consistent with the convergence behavior of a sim-
ulated  dice  in  Figure  2.1.  In  computing  (2.1)  we  have  learned  something
useful: the expansion is a special case of abinomialseries. The first term
123456
0.0
0.1
0.2
0.3
m=10
123456
0.0
0.1
0.2
0.3
m=20
123456
0.0
0.1
0.2
0.3
m=50
123456
0.0
0.1
0.2
0.3
m=100
123456
0.0
0.1
0.2
0.3
m=200
123456
0.0
0.1
0.2
0.3
m=500
Fig. 2.1.  Convergence of empirical means to expectations. From left to right: em-
pirical frequencies of occurrence obtained by casting a dice 10, 20, 50, 100, 200, and
500 times respectively. Note that after 20 throws we still have not observed a single
’6’, an event which occurs with only
[
5
6
]
20
≈2.6% probability.
37

382  Density Estimation
counts the number of configurations in which we could observeitimes ’6’ in a
sequence of 100 dice throws. The second and third term are the probabilities
of seeing one particular instance of such a sequence.
Note  that  in  general  we  may  not  be  as  lucky,  since  we  may  have  con-
siderably less information about the setting we are studying. For instance,
we might notknowthe actual probabilities for each face of the dice, which
would  be  a  likely  assumption  when  gambling  at  a  casino  of  questionable
reputation. Often the outcomes of the system we are dealing with may be
continuous valued random variables rather than binary ones, possibly even
with  unknown  range.  For  instance,  when  trying  to  determine  the  average
wage through a questionnaire we need to determine how many people we
need to ask in order to obtain a certain level of confidence.
To  answer  such  questions  we  need  to  discuss  limit  theorems.  They  tell
us by how much averages over a set of observations may deviate from the
corresponding expectations and how many observations we need to draw to
estimate a number of probabilities reliably. For completeness we will present
proofs for some of the more fundamental theorems in Section 2.1.2. They
are useful albeit non-essential for the understanding of the remainder of the
book and may be omitted.
2.1.1  Fundamental Laws
The  Law  of  Large  Numbers  developed  by  Bernoulli  in  1713  is  one  of  the
fundamental building blocks of statistical analysis. It states that averages
over a number of observations converge to their expectations given a suffi-
ciently large number of observations and given certain assumptions on the
independence of these observations. It comes in two flavors: the weak and
the strong law.
Theorem 2.1 (Weak Law of Large Numbers)Denote  byX
1
,...,X
m
random variables drawn fromp(x)with meanμ=E
X
i
[x
i
]for alli. Moreover
let
 ̄
X
m
:=
1
m
m
∑
i=1
X
i
(2.2)
be the empirical average over the random variablesX
i
. Then for any >0
the following holds
lim
m→∞
Pr
(
∣
∣
 ̄
X
m
−μ
∣
∣
≤
)
= 1.(2.3)

2.1  Limit Theorems39
10
1
10
2
10
3
1
2
3
4
5
6
Fig.  2.2.  The  mean  of  a  number  of  casts  of  a  dice.  The  horizontal  straight  line
denotes  the  mean  3.5.  The  uneven  solid  line  denotes  the  actual  mean
 ̄
X
n
as  a
function of the number of draws, given as a semilogarithmic plot. The crosses denote
the outcomes of the dice. Note how
 ̄
X
n
ever more closely approaches the mean 3.5
are we obtain an increasing number of observations.
This establishes that, indeed, for large enough sample sizes, the average will
converge to the expectation. The strong law strengthens this as follows:
Theorem 2.2 (Strong Law of Large Numbers)Under  the  conditions
of Theorem 2.1 we havePr
(
lim
m→∞
 ̄
X
m
=μ
)
= 1.
The strong law implies that almost surely (in a measure theoretic sense)
 ̄
X
m
converges toμ, whereas the weak law only states that for everythe random
variable
 ̄
X
m
will be within the interval [μ−,μ+]. Clearly the strong implies
the weak law since the measure of the events
 ̄
X
m
=μconverges to 1, hence
any-ball aroundμwould capture this.
Both laws justify that we may take sample averages, e.g. over a number
of events such as the outcomes of a dice and use the latter to estimate their
means, their probabilities (here we treat the indicator variable of the event
as a{0; 1}-valued random variable), their variances or related quantities. We
postpone a proof until Section 2.1.2, since an effective way of proving Theo-
rem 2.1 relies on the theory of characteristic functions which we will discuss
in the next section. For the moment, we only give a pictorial illustration in
Figure 2.2.
Once we established that the random variable
 ̄
X
m
=m
−1
∑
m
i=1
X
i
con-
verges to its meanμ, a natural second question is to establish howquicklyit
converges and what the properties of the limiting distribution of
 ̄
X
m
−μare.
Note in Figure 2.2 that the initial deviation from the mean is large whereas
as we observe more data the empirical mean approaches the true one.

402  Density Estimation
10
1
10
2
10
3
1
2
3
4
5
6
Fig. 2.3.  Five instantiations of a running average over outcomes of a toss of a dice.
Note that all of them converge to the mean 3.5. Moreover note that they all are
well contained within the upper and lower envelopes given byμ±
√
Var
X
[x]/m.
The central limit theorem answers this question exactly by addressing a
slightly more general question, namely whether the sum over a number of
independent  random  variables  where  each  of  them  arises  from  adifferent
distribution  might  also  have  a  well  behaved  limiting  distribution.  This  is
the case as long as thevarianceof each of the random variables is bounded.
The limiting distribution of such a sum is Gaussian. This affirms the pivotal
role of the Gaussian distribution.
Theorem 2.3 (Central Limit Theorem)Denote byX
i
independent ran-
dom variables with meansμ
i
and standard deviationσ
i
. Then
Z
m
:=
[
m
∑
i=1
σ
2
i
]
−
1
2
[
m
∑
i=1
X
i
−μ
i
]
(2.4)
converges to a Normal Distribution with zero mean and unit variance.
Note that just like the law of large numbers the central limit theorem (CLT)
is anasymptoticresult. That is, only in the limit of an infinite number of
observations will it become exact. That said, it often provides an excellent
approximation even for finite numbers of observations, as illustrated in Fig-
ure 2.4. In fact, the central limit theorem and related limit theorems build
the foundation of what is known as asymptotic statistics.
Example 2.1 (Dice)If  we  are  interested  in  computing  the  mean  of  the
values returned by a dice we may apply the CLT to the sum overmvariables

2.1  Limit Theorems41
which have all meanμ= 3.5and variance (see Problem 2.1)
Var
X
[x] =E
X
[x
2
]−E
X
[x]
2
= (1 + 4 + 9 + 16 + 25 + 36)/6−3.5
2
≈2.92.
We now study the random variableW
m
:=m
−1
∑
m
i=1
[X
i
−3.5]. Since each
of the terms in the sum has zero mean, alsoW
m
’s mean vanishes. Moreover,
W
m
is  a  multiple  ofZ
m
of  (2.4).  Hence  we  have  thatW
m
converges  to  a
normal distribution with zero mean and standard deviation2.92m
−
1
2
.
Consequently  the  average  ofmtosses  of  the  dice  yields  a  random  vari-
able with mean3.5and it will approach a normal distribution with variance
m
−
1
2
2.92.  In  other  words,  the  empirical  mean  converges  to  its  average  at
rateO(m
−
1
2
).  Figure  2.3  gives  an  illustration  of  the  quality  of  the  bounds
implied by the CLT.
One remarkable property of functions of random variables is that in many
conditions convergence properties of the random variables are bestowed upon
the functions, too. This is manifest in the following two results: a variant
of Slutsky’s theorem and the so-called delta method. The former deals with
limit behavior whereas the latter deals with an extension of the central limit
theorem.
Theorem 2.4 (Slutsky’s Theorem)Denote  byX
i
,Y
i
sequences  of  ran-
dom variables withX
i
→XandY
i
→cforc∈Rin probability. Moreover,
denote  byg(x,y)a  function  which  is  continuous  for  all(x,c).  In  this  case
the random variableg(X
i
,Y
i
)converges in probability tog(X,c).
For a proof see e.g. [Bil68]. Theorem 2.4 is often referred to as the continuous
mapping  theorem  (Slutsky  only  proved  the  result  for  affine  functions).  It
means that for functions of random variables it is possible to pull the limiting
procedureintothe function. Such a device is useful when trying to prove
asymptotic normality and in order to obtain characterizations of the limiting
distribution.
Theorem 2.5 (Delta Method)Assume  thatX
n
∈R
d
is  asymptotically
normal  witha
−2
n
(X
n
−b)→N(0,Σ)fora
2
n
→0.  Moreover,  assume  that
g:R
d
→R
l
is  a  mapping  which  is  continuously  differentiable  atb.  In  this
case the random variableg(X
n
)converges
a
−2
n
(g(X
n
)−g(b))→N(0,[∇
x
g(b)]Σ[∇
x
g(b)]
>
).(2.5)
ProofVia a Taylor expansion we see that
a
−2
n
[g(X
n
)−g(b)] = [∇
x
g(ξ
n
)]
>
a
−2
n
(X
n
−b)(2.6)

422  Density Estimation
Hereξ
n
lies on the line segment [b,X
n
]. SinceX
n
→bwe have thatξ
n
→b,
too. Sincegis continuously differentiable atbwe may apply Slutsky’s the-
orem  to  see  thata
−2
n
[g(X
n
)−g(b)]→[∇
x
g(b)]
>
a
−2
n
(X
n
−b).  As  a  con-
sequence, the transformed random variable is asymptotically normal with
covariance [∇
x
g(b)]Σ[∇
x
g(b)]
>
.
We will use the delta method when it comes to investigating properties of
maximum likelihood estimators in exponential families. Theregwill play the
role of a mapping between expectations and the natural parametrization of
a distribution.
2.1.2  The Characteristic Function
The Fourier transform plays a crucial role in many areas of mathematical
analysis and engineering. This is equally true in statistics. For historic rea-
sons  its  applications  to  distributions  is  called  the  characteristic  function,
which we will discuss in this section. At its foundations lie standard tools
from functional analysis and signal processing [Rud73, Pap62]. We begin by
recalling the basic properties:
Definition 2.6 (Fourier Transform)Denote  byf:R
n
→Ca  function
defined on ad-dimensional Euclidean space. Moreover, letx,ω∈R
n
. Then
the Fourier transformFand its inverseF
−1
are given by
F[f](ω) := (2π)
−
d
2
∫
R
n
f(x) exp(−i〈ω,x〉)dx(2.7)
F
−1
[g](x) := (2π)
−
d
2
∫
R
n
g(ω) exp(i〈ω,x〉)dω.(2.8)
The key insight is thatF
−1
◦F=F◦F
−1
= Id. In other words,Fand
F
−1
are inverses to each other for all functions which areL
2
integrable on
R
d
, which includes probability distributions. One of the key advantages of
Fourier transforms is that derivatives and convolutions onftranslate into
multiplications. That isF[f◦g] = (2π)
d
2
F[f]·F[g]. The same rule applies
to the inverse transform, i.e.F
−1
[f◦g] = (2π)
d
2
F
−1
[f]F
−1
[g].
The benefit for statistical analysis is that often problems are more easily
expressed in the Fourier domain and it is easier to prove convergence results
there.  These  results  then  carry  over  to  the  original  domain.  We  will  be
exploiting this fact in the proof of the law of large numbers and the central
limit theorem. Note that the definition of Fourier transforms can be extended
to more general domains such as groups. See e.g. [BCR84] for further details.

2.1  Limit Theorems43
We next introduce the notion of acharacteristic functionof a distribution.
1
Definition 2.7 (Characteristic Function)Denote byp(x)a distribution
of a random variableX∈R
d
. Then the characteristic functionφ
X
(ω)with
ω∈R
d
is given by
φ
X
(ω) := (2π)
d
2
F
−1
[p(x)] =
∫
exp(i〈ω,x〉)dp(x).(2.9)
In other words,φ
X
(ω) is theinverse Fourier transformapplied to the prob-
ability measurep(x). Consequentlyφ
X
(ω)uniquelycharacterizesp(x) and
moreover,p(x) can be recovered fromφ
X
(ω) via the forward Fourier trans-
form. One of the key utilities of characteristic functions is that they allow
us to deal in easy ways withsumsof random variables.
Theorem 2.8 (Sums of random variables and convolutions)Denote
byX,Y∈Rtwo  independent  random variables.  Moreover,  denote byZ:=
X+Ythe sum of both random variables. Then the distribution overZsat-
isfiesp(z) =p(x)◦p(y). Moreover, the characteristic function yields:
φ
Z
(ω) =φ
X
(ω)φ
Y
(ω).(2.10)
ProofZis  given  byZ=X+Y.  Hence,  for  a  givenZ=zwe  have
the freedom to chooseX=xfreely provided thatY=z−x. In terms of
distributions this means that the joint distributionp(z,x) is given by
p(z,x) =p(Y=z−x)p(x)
and hencep(z) =
∫
p(Y=z−x)dp(x) = [p(x)◦p(y)](z).
The  result  for  characteristic  functions  follows  form  the  property  of  the
Fourier transform.
For sums of several random variables the characteristic function is the prod-
uct of the individual characteristic functions. This allows us to prove both
the weak law of large numbers and the central limit theorem (see Figure 2.4
for an illustration) by proving convergence in the Fourier domain.
Proof [Weak Law of Large Numbers]At the heart of our analysis lies
a Taylor expansion of the exponential into
exp(iwx) = 1 +i〈w,x〉+o(|w|)
and henceφ
X
(ω) = 1 +iwE
X
[x] +o(|w|).
1
In Chapter??we will discuss more general descriptions of distributions of whichφ
X
is a special
case. In particular, we will replace the exponential exp(i〈ω,x〉) by a kernel functionk(x,x
′
).

442  Density Estimation
-505
0.0
0.5
1.0
-505
0.0
0.5
1.0
-505
0.0
0.5
1.0
-505
0.0
0.5
1.0
-505
0.0
0.5
1.0
-101
0.0
0.5
1.0
1.5
-101
0.0
0.5
1.0
1.5
-101
0.0
0.5
1.0
1.5
-101
0.0
0.5
1.0
1.5
-101
0.0
0.5
1.0
1.5
Fig.  2.4.  A  working  example  of  the  central  limit  theorem.  The  top  row  contains
distributions  of  sums  of  uniformly  distributed  random  variables  on  the  interval
[0.5,0.5]. From left to right we have sums of 1,2,4,8 and 16 random variables. The
bottom row contains the same distribution with the means rescaled by
√
m, where
mis the number of observations. Note how the distribution converges increasingly
to the normal distribution.
Givenmrandom variablesX
i
with meanE
X
[x] =μthis means that their
average
 ̄
X
m
:=
1
m
∑
m
i=1
X
i
has the characteristic function
φ
 ̄
X
m
(ω) =
(
1 +
i
m
wμ+o(m
−1
|w|)
)
m
(2.11)
In the limit ofm→ ∞this converges to exp(iwμ), the characteristic func-
tion of the constant distribution with meanμ. This proves the claim that in
the large sample limit
 ̄
X
m
is essentially constant with meanμ.
Proof [Central Limit Theorem]We use the same idea as above to prove
the CLT. The main difference, though, is that we need to assume that the
second moments of the random variablesX
i
exist. To avoid clutter we only
prove the case of constant meanE
X
i
[x
i
] =μand variance Var
X
i
[x
i
] =σ
2
.

2.1  Limit Theorems45
LetZ
m
:=
1
√
mσ
2
∑
m
i=1
(X
i
−μ). Our proof relies on showing convergence
of  the  characteristic  function  ofZ
m
,  i.e.φ
Z
m
to  that  of  a  normally  dis-
tributed random variableWwith zero mean and unit variance. Expanding
the exponential to second order yields:
exp(iwx) = 1 +iwx−
1
2
w
2
x
2
+o(|w|
2
)
and henceφ
X
(ω) = 1 +iwE
X
[x]−
1
2
w
2
Var
X
[x] +o(|w|
2
)
Since the mean ofZ
m
vanishes by centering (X
i
−μ) and the variance per
variable ism
−1
we may write the characteristic function ofZ
m
via
φ
Z
m
(ω) =
(
1−
1
2m
w
2
+o(m
−1
|w|
2
)
)
m
As before, taking limitsm→ ∞yields the exponential function. We have
that lim
m→∞
φ
Z
m
(ω) = exp(−
1
2
ω
2
) which is the characteristic function of
the normal distribution with zero mean and variance 1. Since the character-
istic function transform is injective this proves our claim.
Note that the characteristic function has a number of useful properties. For
instance, it can also be used as moment generating function via the identity:
∇
n
ω
φ
X
(0) =i
−n
E
X
[x
n
].(2.12)
Its proof is left as an exercise. See Problem 2.2 for details. This connection
also implies (subject to regularity conditions) that if we know the moments
of  a  distribution  we  are  able  to  reconstruct  it  directly  since  it  allows  us
to  reconstruct  its  characteristic  function.  This  idea  has  been  exploited  in
density  estimation  [Cra46]  in  the  form  of  Edgeworth  and  Gram-Charlier
expansions [Hal92].
2.1.3  Tail Bounds
In practice we never have access to aninfinitenumber of observations. Hence
the central limit theorem does not apply but is just an approximation to the
real situation. For instance, in the case of the dice, we might want to state
worst case boundsforfinitesums of random variables to determine by how
much the empirical mean may deviate from its expectation. Those bounds
will not only be useful for simple averages but to quantify the behavior of
more sophisticated estimators based on a set of observations.
The  bounds  we  discuss  below  differ  in  the  amount  of  knowledge  they
assume about the random variables in question. For instance, we might only

462  Density Estimation
know  their  mean.  This  leads  to  the  Gauss-Markov  inequality.  If  we  know
their  mean  and  their  variance  we  are  able  to  state  a  stronger  bound,  the
Chebyshev  inequality.  For  an  even  stronger  setting,  when  we  know  that
each variable has bounded range, we will be able to state a Chernoff bound.
Those bounds are progressively more tight and also more difficult to prove.
We state them in order of technical sophistication.
Theorem 2.9 (Gauss-Markov)Denote byX≥0a random variable and
letμbe its mean. Then for any >0we have
Pr(X≥)≤
μ

.(2.13)
ProofWe use the fact that for nonnegative random variables
Pr(X≥) =
∫
∞

dp(x)≤
∫
∞

x

dp(x)≤
−1
∫
∞
0
xdp(x) =
μ

.
This means that for random variables with a small mean, the proportion of
samples with large value has to be small.
Consequently deviations from the mean areO(
−1
). However, note that this
bound doesnotdepend on the number of observations. A useful application
of the Gauss-Markov inequality is Chebyshev’s inequality. It is a statement
on the range of random variables using its variance.
Theorem 2.10 (Chebyshev)Denote byXa random variable with mean
μand varianceσ
2
. Then the following holds for >0:
Pr(|x−μ|≥)≤
σ
2

2
.(2.14)
ProofDenote  byY:=|X−μ|
2
the  random  variable  quantifying  the
deviation ofXfrom its meanμ. By construction we know thatE
Y
[y] =σ
2
.
Next letγ:=
2
. Applying Theorem 2.9 toYandγyields Pr(Y > γ)≤σ
2
/γ
which proves the claim.
Note the improvement to the Gauss-Markov inequality. Where before we had
bounds whose confidence improved withO(
−1
) we can now stateO(
−2
)
bounds for deviations from the mean.
Example 2.2 (Chebyshev bound)Assume that
 ̄
X
m
:=m
−1
∑
m
i=1
X
i
is
the  average overmrandom  variables with  meanμand  varianceσ
2
.  Hence
 ̄
X
m
also has meanμ. Its variance is given by
Var
 ̄
X
m
[ ̄x
m
] =
m
∑
i=1
m
−2
Var
X
i
[x
i
] =m
−1
σ
2
.

2.1  Limit Theorems47
Applying  Chebyshev’s  inequality  yields  that  the  probability  of  a  deviation
offrom  the  meanμis  bounded  by
σ
2
m
2
.  For  fixed  failure  probabilityδ=
Pr(|
 ̄
X
m
−μ|> )we have
δ≤σ
2
m
−1

−2
and equivalently≤σ/
√
mδ.
This  bound  is  quite  reasonable  for  largeδbut  it  means  that  for  high  levels
of confidence we need a huge number of observations.
Much  stronger  results  can  be  obtained  if  we  are  able  to  bound  therange
of the random variables. Using the latter, we reap an exponential improve-
ment in the quality of the bounds in the form of the McDiarmid [McD89]
inequality. We state the latter without proof:
Theorem 2.11 (McDiarmid)Denote  byf:X
m
→Ra  function  onX
and letX
i
be independent random variables. In this case the following holds:
Pr (|f(x
1
,...,x
m
)−E
X
1
,...,X
m
[f(x
1
,...,x
m
)]|> )≤2 exp
(
−2
2
C
−2
)
.
Here the constantC
2
is given byC
2
=
∑
m
i=1
c
2
i
where
∣
∣
f(x
1
,...,x
i
,...,x
m
)−f(x
1
,...,x
′
i
,...,x
m
)
∣
∣
≤c
i
for allx
1
,...,x
m
,x
′
i
and for alli.
This  bound  can  be  used  for  averages  of  a  number  of  observations  when
they are computed according to some algorithm as long as the latter can be
encoded inf. In particular, we have the following bound [Hoe63]:
Theorem 2.12 (Hoeffding)Denote byX
i
iid random variables with bounded
rangeX
i
∈[a,b]and  meanμ.  Let
 ̄
X
m
:=m
−1
∑
m
i=1
X
i
be  their  average.
Then the following bound holds:
Pr
(
∣
∣
 ̄
X
m
−μ
∣
∣
> 
)
≤2 exp
(
−
2m
2
(b−a)
2
)
.(2.15)
ProofThis is a corollary of Theorem 2.11. In
 ̄
X
m
each individual random
variable has range [a/m,b/m] and we setf(X
1
,...,X
m
) :=
 ̄
X
m
. Straight-
forward  algebra  shows  thatC
2
=m
−2
(b−a)
2
.  Plugging  this  back  into
McDiarmid’s theorem proves the claim.
Note  that  (2.15)  isexponentiallybetter  than  the  previous  bounds.  With
increasing sample size the confidence level also increases exponentially.
Example 2.3 (Hoeffding bound)As in example 2.2 assume thatX
i
are
iid  random  variables  and  let
 ̄
X
m
be  their  average.  Moreover,  assume  that

482  Density Estimation
X
i
∈[a,b]for alli. As before we want to obtain guarantees on the probability
that|
 ̄
X
m
−μ|> . For a given level of confidence1−δwe need to solve
δ≤2 exp
(
−
2m
2
(b−a)
2
)
(2.16)
for. Straightforward algebra shows that in this caseneeds to satisfy
≥|b−a|
√
[log 2−logδ]/2m(2.17)
In other words, while the confidence level only enters logarithmically into the
inequality, the sample sizemimproves our confidence only with=O(m
−
1
2
).
That is, in order to improve our confidence interval from= 0.1to= 0.01
we need 100 times as many observations.
While this bound is tight (see Problem 2.5 for details), it is possible to ob-
tain better bounds if we knowadditionalinformation. In particular knowing
a bound on thevarianceof a random variable in addition to knowing that it
has bounded range would allow us to strengthen the statement considerably.
The Bernstein inequality captures this connection. For details see [BBL05]
or works on empirical process theory [vdVW96, SW86, Vap82].
2.1.4  An Example
It is probably easiest to illustrate the various bounds using a concrete exam-
ple. In a semiconductor fab processors are produced on a wafer. A typical
300mm  wafer  holds  about  400  chips.  A  large  number  of  processing  steps
are required to produce a finished microprocessor and often it is impossible
to assess the effect of a design decision until the finished product has been
produced.
Assume  that  the  production  manager  wants  to  change  some  step  from
process ’A’ to some other process ’B’. The goal is to increase the yield of
the process, that is, the number of chips of the 400 potential chips on the
wafer which can be sold. Unfortunately this number is a random variable,
i.e. the number of working chips per wafer can vary widely between different
wafers.  Since  process  ’A’  has  been  running  in  the  factory  for  a  very  long
time we may assume that the yield is well known, say it isμ
A
= 350 out
of  400  processors  on  average.  It  is  our  goal  to  determine  whether  process
’B’ is better and what its yield may be. Obviously, since production runs
are expensive we want to be able to determine this number as quickly as
possible, i.e. using as few wafers as possible. The production manager is risk
averse and wants to ensure that the new process is really better. Hence he
requires a confidence level of 95% before he will change the production.

2.1  Limit Theorems49
A first step is to formalize the problem. Since we know process ’A’ exactly
we only need to concern ourselves with ’B’. We associate the random variable
X
i
with waferi. A reasonable (and somewhat simplifying) assumption is to
posit that allX
i
are independent and identically distributed where allX
i
have the meanμ
B
. Obviously we do not knowμ
B
— otherwise there would
be no reason for testing! We denote by
 ̄
X
m
the average of the yields ofm
wafers  using  process  ’B’.  What  we  are  interested  in  is  the  accuracyfor
which the probability
δ= Pr(|
 ̄
X
m
−μ
B
|> ) satisfiesδ≤0.05.
Let  us  now  discuss  how  the  various  bounds  behave.  For  the  sake  of  the
argument  assume  thatμ
B
−μ
A
=  20,  i.e.  the  new  process  produces  on
average 20 additional usable chips.
ChebyshevIn order to apply the Chebyshev inequality we need to bound
the variance of the random variablesX
i
. The worst possible variance would
occur ifX
i
∈ {0; 400}where both events occur with equal probability. In
other words, with equal probability the wafer if fully usable or it is entirely
broken. This amounts toσ
2
= 0.5(200−0)
2
+ 0.5(200−400)
2
= 40,000.
Since for Chebyshev bounds we have
δ≤σ
2
m
−1

−2
(2.18)
we can solve form=σ
2
/δ
2
= 40,000/(0.05·400) = 20,000. In other words,
we would typically need 20,000 wafers to assess with reasonable confidence
whether process ’B’ is better than process ’A’. This is completely unrealistic.
Slightly  better  bounds  can  be  obtained  if  we  are  able  to  make  better
assumptions on the variance. For instance, if we can be sure that the yield
of process ’B’ is at least 300, then the largest possible variance is 0.25(300−
0)
2
+ 0.75(300−400)
2
=  30,000,  leading  to  a  minimum  of  15,000  wafers
which is not much better.
HoeffdingSince the yields are in the interval{0,...,400}we have an ex-
plicit bound on the range of observations. Recall the inequality (2.16) which
bounds the failure probablyδ= 0.05 by an exponential term. Solving this
formyields
m≥0.5|b−a|
2

−2
log(2/δ)≈737.8(2.19)
In other words, we need at lest 738 wafers to determine whether process ’B’
is  better.  While  this  is  a  significant  improvement  of  almost  two  orders  of
magnitude, it still seems wasteful and we would like to do better.

502  Density Estimation
Central Limit TheoremThe central limit theorem is anapproximation.
This  means  that  our  reasoning  is  not  accurate  any  more.  That  said,  for
large enough sample sizes, the approximation is good enough to use it for
practical predictions. Assume for the moment that we knew the varianceσ
2
exactly. In this case we know that
 ̄
X
m
is approximately normal with mean
μ
B
and variancem
−1
σ
2
. We are interested in the interval [μ−,μ+] which
contains 95% of the probability mass of a normal distribution. That is, we
need to solve the integral
1
2πσ
2
∫
μ+
μ−
exp
(
−
(x−μ)
2
2σ
2
)
dx= 0.95(2.20)
This can be solved efficiently using the cumulative distribution function of
a  normal  distribution  (see  Problem  2.3  for  more  details).  One  can  check
that (2.20) is solved for= 2.96σ. In other words, an interval of±2.96σ
contains 95% of the probability mass of a normal distribution. The number
of observations is therefore determined by
= 2.96σ/
√
mand hencem= 8.76
σ
2

2
(2.21)
Again, our problem is that we donotknow the variance of the distribution.
Using the worst-case bound on the variance, i.e.σ
2
= 40,000 would lead to
a requirement of at leastm= 876 wafers for testing. However, while we do
notknowthe variance, we may estimate it along with the mean and use the
empirical estimate, possibly plus some small constant to ensure we do not
underestimate the variance, instead of the upper bound.
Assuming that fluctuations turn out to be in the order of 50 processors,
i.e.σ
2
= 2500, we are able to reduce our requirement to approximately 55
wafers. This is probably an acceptable number for a practical test.
Rates and ConstantsThe astute reader will have noticed that all three
confidence bounds had scaling behaviorm=O(
−2
). That is, in all cases
the number of observations was a fairly ill behaved function of the amount
of confidence required. If we were just interested in convergence per se, a
statement  like  that  of  the  Chebyshev  inequality would have  been entirely
sufficient.  The  various  laws  and  bounds  can  often  be  used  to  obtain  con-
siderably  betterconstantsfor  statistical  confidence  guarantees.  For  more
complex  estimators,  such  as  methods  to  classify,  rank,  or  annotate  data,
a  reasoning  such  as  the  one  above  can  become  highly  nontrivial.  See  e.g.
[MYA94, Vap98] for further details.

2.2  Parzen Windows51
2.2  Parzen Windows
2.2.1  Discrete Density Estimation
The  convergence  theorems  discussed  so  far  mean  that  we  can  use  empir-
ical observations for the purpose of density estimation. Recall the case of
the Naive Bayes classifier of Section 1.3.1. One of the key ingredients was
the  ability  to  use  information  about  word  counts  for  different  document
classes to estimate the probabilityp(w
j
|y), wherew
j
denoted the number
of occurrences of wordjin documentx, given that it was labeledy. In the
following we discuss an extremely simple and crude method for estimating
probabilities. It relies on the fact that for random variablesX
i
drawn from
distributionp(x) with discrete valuesX
i
∈Xwe have
lim
m→∞
ˆp
X
(x) =p(x)(2.22)
where  ˆp
X
(x) :=m
−1
m
∑
i=1
{x
i
=x}for allx∈X.(2.23)
Let us discuss a concrete case. We assume that we have 12 documents and
would like to estimate the probability of occurrence of the word ’dog’ from
it. As raw data we have:
Document ID1    2    3    4    5    6    7    8    9    10    11    12
Occurrences of ‘dog’    1    0    2    0    4    6    3    0    6    201
This means that the word ‘dog’ occurs the following number of times:
Occurrences of ‘dog’0    1    2    3    4    5    6
Number of documents    4    2    2    1    1    0    2
Something  unusual  is happening  here:  for some reason we never observed
5  instances  of  the  word  dog  in  our  documents,  only  4  and  less,  or  alter-
natively 6 times. So what about 5 times? It is reasonable to assume that
the corresponding value should not be 0 either. Maybe we did not sample
enough. One possible strategy is to add pseudo-counts to the observations.
This amounts to the following estimate:
ˆp
X
(x) := (m+|X|)
−1
[
1 +
m
∑
i=1
{x
i
=x}=p(x)
]
(2.24)
Clearly the limit form→ ∞is stillp(x). Hence, asymptotically we do not
lose  anything.  This  prescription  is  what  we  used  in  Algorithm  1.1  used  a
method called Laplace smoothing. Below we contrast the two methods:

522  Density Estimation
Occurrences of ‘dog’0123456
Number of documents4221102
Frequency of occurrence    0.33    0.17    0.17    0.083    0.083    00.17
Laplace smoothing0.26    0.16    0.16    0.110.110.05    0.16
The problem with this method is that as|X|increases we need increasingly
more observations to obtain even a modicum of precision. On average, we
will need at least one observation for everyx∈X. This can be infeasible for
large domains as the following example shows.
Example 2.4 (Curse of Dimensionality)Assume thatX={0,1}
d
, i.e.
xconsists of binary bit vectors of dimensionalityd. Asdincreases the size of
Xincreases  exponentially,  requiring  an  exponential  number  of  observations
to perform density estimation. For instance, if we work with images, a 100×
100 black and white picture would require in the order of10
3010
observations
to model such fairly low-resolution images accurately. This is clearly utterly
infeasible  —  the  number  of  particles  in  the  known  universe  is  in  the  order
of10
80
.  Bellman  [Bel61]  was  one  of  the  first  to  formalize  this  dilemma  by
coining the term ’curse of dimensionality’.
This  example  clearly  shows  that  we  need  better  tools  to  deal  with  high-
dimensional data. We will present one of such tools in the next section.
2.2.2  Smoothing Kernel
We  now  proceed  to  proper  density  estimation.  Assume  that  we  want  to
estimate  the  distribution  of  weights  of  a  population.  Sample  data  from  a
population might look as follows:X={57, 88, 54, 84, 83, 59, 56, 43, 70, 63,
90, 98, 102, 97, 106, 99, 103, 112}. We could use this to perform a density
estimate by placing discrete components at the locationsx
i
∈Xwith weight
1/|X|as what is done in Figure 2.5. There is no reason to believe that weights
are quantized in kilograms, or grams, or miligrams (or pounds and stones).
And even if it were, we would expect that similar weights would have similar
densities associated with it. Indeed, as the right diagram of Figure 2.5 shows,
the corresponding density is continuous.
The  key  question  arising  is  how  we  may  transformXinto  a  realistic
estimate  of  the  densityp(x).  Starting  with  a  ’density  estimate’  with  only
discrete terms
ˆp(x) =
1
m
m
∑
i=1
δ(x−x
i
)(2.25)

2.2  Parzen Windows53
we may choose to smooth it out by a smoothing kernelh(x) such that the
probability mass becomes somewhat more spread out. For a density estimate
onX⊆R
d
this is achieved by
ˆp(x) =
1
m
m
∑
i=1
r
−d
h
(
x−x
i
r
)
.(2.26)
This expansion is commonly known as theParzen windowsestimate. Note
that  obviouslyhmust  be  chosen  such  thath(x)≥0  for  allx∈Xand
moreover that
∫
h(x)dx= 1 in order to ensure that (2.26) is a proper prob-
ability  distribution.  We  now  formally  justify  this  smoothing.  LetRbe  a
small region such that
q=
∫
R
p(x)dx.
Out of themsamples drawn fromp(x), the probability thatkof them fall
in regionRis given by the binomial distribution
(
m
k
)
q
k
(1−q)
m−k
.
The expected fraction of points falling inside the region can easily be com-
puted  from  the  expected  value  of  the  Binomial  distribution:E[k/m]  =q.
Similarly,  the  variance  can  be  computed  as  Var[k/m]  =q(1−q)/m.  As
m→ ∞the variance goes to 0 and hence the estimate peaks around the
expectation. We can therefore set
k≈mq.
If we assume thatRis so small thatp(x) is constant overR, then
q≈p(x)·V,
whereVis the volume ofR. Rearranging we obtain
p(x)≈
k
mV
.(2.27)
Let us now setRto be a cube with side lengthr, and define a function
h(u) =
{
1 if|u
i
|≤
1
2
0 otherwise.
Observe thath
(
x−x
i
r
)
is 1 if and only ifx
i
lies inside a cube of sizercentered

542  Density Estimation
aroundx. If we let
k=
m
∑
i=1
h
(
x−x
i
r
)
,
then one can use (2.27) to estimatepvia
ˆp(x) =
1
m
m
∑
i=1
r
−d
h
(
x−x
i
r
)
,
wherer
d
is the volume of the hypercube of sizerinddimensions. By symme-
try, we can interpret this equation as the sum overmcubes centered around
mdata pointsx
n
. If we replace the cube by any smooth kernel functionh(·)
this recovers (2.26).
There exists a large variety of different kernels which can be used for the
kernel density estimate. [Sil86] has a detailed description of the properties
of a number of kernels. Popular choices are
h(x) = (2π)
−
1
2
e
−
1
2
x
2
Gaussian kernel(2.28)
h(x) =
1
2
e
−|x|
Laplace kernel(2.29)
h(x) =
3
4
max(0,1−x
2
)Epanechnikov kernel(2.30)
h(x) =
1
2
χ
[−1,1]
(x)Uniform kernel(2.31)
h(x) = max(0,1−|x|)Triangle kernel.(2.32)
Further kernels are the triweight and the quartic kernel which are basically
powers of the Epanechnikov kernel. For practical purposes the Gaussian ker-
nel (2.28) or the Epanechnikov kernel (2.30) are most suitable. In particular,
the latter has the attractive property of compact support. This means that
for any given density estimate at locationxwe will only need to evaluate
termsh(x
i
−x) for which the distance‖x
i
−x‖is less thanr. Such expan-
sions are computationally much cheaper, in particular when we make use of
fast nearest neighbor search algorithms [GIM99, IM98]. Figure 2.7 has some
examples of kernels.
2.2.3  Parameter Estimation
So far we have not discussed the issue of parameter selection. It should be
evident from Figure 2.6, though, that it is quite crucial to choose a good
kernel width. Clearly, a kernel that is overly wide will oversmooth any fine
detail that there might be in the density. On the other hand, a very narrow
kernel will not be very useful, since it will be able to make statements only
about the locations where we actually observed data.

2.2  Parzen Windows55
405060708090100110
0.00
0.05
0.10
405060708090100110
0.00
0.01
0.02
0.03
0.04
0.05
Fig. 2.5.  Left: a naive density estimate given a sample of the weight of 18 persons.
Right: the underlying weight distribution.
406080100
0.000
0.025
0.050
406080100
0.000
0.025
0.050
406080100
0.000
0.025
0.050
406080100
0.000
0.025
0.050
Fig. 2.6.  Parzen windows density estimate associated with the 18 observations of
the Figure above. From left to right: Gaussian kernel density estimate with kernel
of width 0.3,1,3, and 10 respectively.
-2-1012
0.0
0.5
1.0
-2-1012
0.0
0.5
1.0
-2-1012
0.0
0.5
1.0
-2-1012
0.0
0.5
1.0
Fig. 2.7.  Some kernels for Parzen windows density estimation. From left to right:
Gaussian kernel, Laplace kernel, Epanechikov kernel, and uniform density.
Moreover, there is the issue of choosing a suitable kernel function. The
fact that a large variety of them exists might suggest that this is a crucial
issue. In practice, this turns out not to be the case and instead, the choice
of a suitable kernel width is much more vital for good estimates. In other
words, size matters, shape is secondary.
The problem is that we do not know which kernel width is best for the
data. If the problem is one-dimensional, we might hope to be able to eyeball
the size ofr. Obviously, in higher dimensions this approach fails. A second

562  Density Estimation
option  would  be  to  choosersuch  that  the  log-likelihood  of  the  data  is
maximized. It is given by
log
m
∏
i=1
p(x
i
) =−mlogm+
m
∑
i=1
log
m
∑
j=1
r
−d
h
(
x
i
−x
j
r
)
(2.33)
Remark 2.13 (Log-likelihood)We  consider  the  logarithm  of  the  likeli-
hood for reasons of computational stability to prevent numerical underflow.
While each termp(x
i
)might be within a suitable range, say10
−2
, the prod-
uct  of1000of  such  terms  will  easily  exceed  the  exponent  of  floating  point
representations  on  a  computer.  Summing  over  the  logarithm,  on  the  other
hand, is perfectly feasible even for large numbers of observations.
Unfortunately computing the log-likelihood is equally infeasible: for decreas-
ingrthe only surviving terms in (2.33) are the functionsh((x
i
−x
i
)/r) =
h(0),  since  the  arguments  of  all  other  kernel  functions  diverge.  In  other
words, the log-likelihood is maximized whenp(x) is peaked exactly at the
locations where we observed the data. The graph on the left of Figure 2.6
shows what happens in such a situation.
What we just experienced is a case ofoverfittingwhere our model is too
flexible.  This  led  to  a  situation  where  our  model  was  able  to  explain  the
observed data “unreasonably well”, simply because we were able to adjust
our parameters given the data. We will encounter this situation throughout
the book. There exist a number of ways to address this problem.
Validation Set:We  could  use  a  subset  of  our  set  of  observations  as  an
estimateof the log-likelihood. That is, we could partition the obser-
vations  intoX:={x
1
,...,x
n
}andX
′
:={x
n+1
,...,x
m
}and use
the second part for a likelihood score according to (2.33). The second
set is typically called avalidation set.
n-fold Cross-validation:Taking  this  idea  further,  note  that  there  is  no
particular reason why any givenx
i
should belong toXorX
′
respec-
tively.  In  fact,  we  could  use  all  splits  of  the  observations  into  sets
XandX
′
to infer the quality of our estimate. While this is compu-
tationally infeasible, we could decide to split the observations into
nequally sized subsets, sayX
1
,...,X
n
and use each of them as a
validation set at a time while the remainder is used to generate a
density estimate.
Typicallynis  chosen  to  be  10,  in  which  case  this  procedure  is

2.2  Parzen Windows57
referred  to  as10-fold  cross-validation.  It  is  a  computationally  at-
tractive  procedure  insofar  as  it  does  not  require  us  to  change  the
basic estimation algorithm. Nonetheless, computation can be costly.
Leave-one-out Estimator:At the extreme end of cross-validation we could
choosen=m. That is, we only remove a single observation at a time
and use the remainder of the data for the estimate. Using the average
over the likelihood scores provides us with an even more fine-grained
estimate.  Denote  byp
i
(x)  the  density  estimate  obtained  by  using
X:={x
1
,...,x
m
}withoutx
i
. For a Parzen windows estimate this
is given by
p
i
(x
i
) = (m−1)
−1
∑
j6=i
r
−d
h
(
x
i
−x
j
r
)
=
m
m−1
[
p(x
i
)−r
−d
h(0)
]
.
(2.34)
Note  that  this  is  precisely  the  termr
−d
h(0)  that  is  removed  from
the  estimate.  It  is  this  term  which  led  to  divergent  estimates  for
r→0.  This  means  that  the  leave-one-out  log-likelihood  estimate
can be computed easily via
L(X) =mlog
m
m−1
+
m
∑
i=1
log
[
p(x
i
)−r
−d
h(0)
]
.(2.35)
We then choosersuch thatL(X) is maximized. This strategy is very
robust  and  whenever  it  can  be  implemented  in  a  computationally
efficient manner, it is very reliable in performing model selection.
An alternative, probably more of theoretical interest, is to choose the scaler
a prioribased on the amount of data we have at our disposition. Intuitively,
we need a scheme which ensures thatr→0 as the number of observations
increasesm→ ∞.  However,  we  need  to  ensure  that  this  happens  slowly
enough that the number of observations within rangerkeeps on increasing in
order to ensure good statistical performance. For details we refer the reader
to [Sil86]. Chapter??discusses issues of model selection for estimators in
general in considerably more detail.
2.2.4  Silverman’s Rule
Assume you are an aspiring demographer who wishes to estimate the popu-
lation density of a country, say Australia. You might have access to a limited
census which, for a random portion of the population determines where they
live. As a consequence you will obtain a relatively high number of samples

582  Density Estimation
Fig. 2.8.  Nonuniform density. Left: original density with samples drawn from the
distribution. Middle: density estimate with a uniform kernel. Right: density estimate
using Silverman’s adjustment.
of city dwellers, whereas the number of people living in the countryside is
likely to be very small.
If  we attempt  to perform  density estimation using  Parzen windows,  we
will  encounter  an  interesting  dilemma:  in  regions  of  high  density  (i.e.  the
cities) we will want to choose a narrow kernel width to allow us to model
the variations in population density accurately. Conversely, in the outback,
a  very  wide  kernel  is  preferable,  since  the  population  there  is  very  low.
Unfortunately,  this  information  is  exactly  what  a  density  estimator  itself
could  tell  us.  In  other  words  we  have  a  chicken  and  egg  situation  where
having a good density estimate seems to be necessary to come up with a
good density estimate.
Fortunately this situation can be addressed by realizing that we do not
actually need to know thedensitybut rather a rough estimate of the latter.
This can be obtained by using information about the average distance of the
knearest neighbors of a point. One of Silverman’s rules of thumb [Sil86] is
to chooser
i
as
r
i
=
c
k
∑
x∈kNN(x
i
)
‖x−x
i
‖.(2.36)
Typicallycis chosen to be 0.5 andkis small, e.g.k= 9 to ensure that the
estimate is computationally efficient. The density estimate is then given by
p(x) =
1
m
m
∑
i=1
r
−d
i
h
(
x−x
i
r
i
)
.(2.37)
Figure 2.8 shows an example of such a density estimate. It is clear that a
locality dependent kernel width is better than choosing a uniformly constant
kernel density estimate. However, note that this increases the computational
complexity of performing a density estimate, since first theknearest neigh-
bors need to be found before the density estimate can be carried out.

2.2  Parzen Windows59
2.2.5  Watson-Nadaraya Estimator
Now that we are able to perform density estimation we may use it to perform
classification and regression. This leads us to an effective method for non-
parametric data analysis, the Watson-Nadaraya estimator [Wat64, Nad65].
The basic idea is very simple: assume that we have a binary classification
problem, i.e. we need to distinguish between two classes. Provided that we
are able to compute density estimatesp(x) given a set of observationsXwe
could appeal to Bayes rule to obtain
p(y|x) =
p(x|y)p(y)
p(x)
=
m
y
m
·
1
m
y
∑
i:y
i
=y
r
−d
h
(
x
i
−x
r
)
1
m
∑
m
i=1
r
−d
h
(
x
i
−x
r
)
.(2.38)
Here we only take the sum over allx
i
with labely
i
=yin the numerator.
The advantage of this approach is that it is very cheap to design such an
estimator. After all, we only need to compute sums. The downside, similar
to that of the k-nearest neighbor classifier is that it may require sums (or
search) over a large number of observations. That is, evaluation of (2.38) is
potentially anO(m) operation. Fast tree based representations can be used
to accelerate this [BKL06, KM00], however their behavior depends signifi-
cantly on the dimensionality of the data. We will encounter computationally
more attractive methods at a later stage.
For  binary  classification  (2.38)  can  be  simplified  considerably.  Assume
thaty∈{±1}. Forp(y= 1|x)>0.5 we will choose that we should estimate
y=  1  and  in  the  converse  case  we  would  estimatey=−1.  Taking  the
difference  between  twice  the  numerator  and  the  denominator  we  can  see
that the function
f(x) =
∑
i
y
i
h
(
x
i
−x
r
)
∑
i
h
(
x
i
−x
r
)
=
∑
i
y
i
h
(
x
i
−x
r
)
∑
i
h
(
x
i
−x
r
)
=:
∑
i
y
i
w
i
(x)(2.39)
can be used to achieve the same goal sincef(x)>0⇐⇒p(y= 1|x)>0.5.
Note thatf(x) is a weighted combination of the labelsy
i
associated with
weightsw
i
(x)  which  depend  on  the  proximity  ofxto  an  observationx
i
.
In other words, (2.39) is a smoothed-out version of thek-nearest neighbor
classifier of Section 1.3.2. Instead of drawing a hard boundary at thekclosest
observation we use a soft weighting scheme with weightsw
i
(x) depending
on which observations are closest.
Note furthermore that the numerator of (2.39) is very similar to the simple
classifier of Section 1.3.3. In fact, for kernelsk(x,x
′
) such as the Gaussian
RBF kernel, which are also kernels in the sense of a Parzen windows den-
sity estimate, i.e.k(x,x
′
) =r
−d
h
(
x−x
′
r
)
the two terms are identical. This

602  Density Estimation
Fig. 2.9.  Watson Nadaraya estimate. Left: a binary classifier. The optimal solution
would be a straight line since both classes were drawn from a normal distribution
with the same variance. Right: a regression estimator. The data was generated from
a sinusoid with additive noise. The regression tracks the sinusoid reasonably well.
means that the Watson Nadaraya estimator provides us with an alternative
explanation as to why (1.24) leads to a usable classifier.
In  the  same  fashion  as  the  Watson  Nadaraya  classifier  extends  the  k-
nearest  neighbor  classifier  we  also  may  construct  a  Watson  Nadaraya  re-
gression  estimator  by  replacing  the  binary  labelsy
i
by  real-valued  values
y
i
∈Rto obtain the regression estimator
∑
i
y
i
w
i
(x). Figure 2.9 has an ex-
ample of the workings of both a regression estimator and a classifier. They
are easy to use and they work well for moderately dimensional data.
2.3  Exponential Families
Distributions  from  the  exponential  family  are  some  of  the  most  versatile
tools for statistical inference. Gaussians, Poisson, Gamma and Wishart dis-
tributions all form part of the exponential family. They play a key role in
dealing with graphical models, classification, regression and conditional ran-
dom fields which we will encounter in later parts of this book. Some of the
reasons for their popularity are that they lead to convex optimization prob-
lems and that they allow us to describe probability distributions by linear
models.
2.3.1  Basics
Densities from the exponential family are defined by
p(x;θ) :=p
0
(x) exp (〈φ(x),θ〉−g(θ)).(2.40)

2.3  Exponential Families61
Herep
0
(x) is a density onXand is often called the base measure,φ(x) is
a map fromxto the sufficient statisticsφ(x).θis commonly referred to as
thenaturalparameter. It lives in the space dual toφ(x). Moreover,g(θ) is a
normalization constant which ensures thatp(x) is properly normalized.gis
often referred to as the log-partition function. The name stems from physics
whereZ=e
g(θ)
denotes the number of states of a physical ensemble.gcan
be computed as follows:
g(θ) = log
∫
X
exp (〈φ(x),θ〉)dx.(2.41)
Example 2.5 (Binary Model)Assume  thatX={0; 1}and  thatφ(x) =
x.  In  this  case  we  haveg(θ) = log
[
e
0
+e
θ
]
= log
[
1 +e
θ
]
.  It  follows  that
p(x=  0;θ)  =
1
1+e
θ
andp(x=  1;θ)  =
e
θ
1+e
θ
.  In  other  words,  by  choosing
different values ofθone can recover different Bernoulli distributions.
One  of  the  convenient  properties  of  exponential  families  is  that  the  log-
partition  functiongcan  be  used  to  generate  moments  of  the  distribution
itself simply by taking derivatives.
Theorem 2.14 (Log partition function)The  functiong(θ)is  convex.
Moreover, the distributionp(x;θ)satisfies
∇
θ
g(θ) =E
x
[φ(x)]and∇
2
θ
g(θ) = Var
x
[φ(x)].(2.42)
ProofNote that∇
2
θ
g(θ) = Var
x
[φ(x)] implies thatgis convex, since the
covariance matrix is positive semidefinite. To show (2.42) we expand
∇
θ
g(θ) =
∫
X
φ(x) exp〈φ(x),θ〉dx
∫
X
exp〈φ(x),θ〉
=
∫
φ(x)p(x;θ)dx=E
x
[φ(x)].(2.43)
Next we take the second derivative to obtain
∇
2
θ
g(θ) =
∫
X
φ(x) [φ(x)−∇
θ
g(θ)]
>
p(x;θ)dx(2.44)
=E
x
[
φ(x)φ(x)
>
]
−E
x
[φ(x)]E
x
[φ(x)]
>
(2.45)
which proves the claim. For the first equality we used (2.43). For the second
line we used the definition of the variance.
One  may  show  that  higher  derivatives∇
n
θ
g(θ)  generate  higher  order  cu-
mulants  ofφ(x)  underp(x;θ).  This  is  whygis  often  also  referred  as  the
cumulant-generating  function.  Note  that  in  general,  computation  ofg(θ)

622  Density Estimation
is nontrivial since it involves solving a highdimensional integral. For many
cases, in fact, the computation is NP hard, for instance whenXis the do-
main of permutations [FJ95]. Throughout the book we will discuss a number
of approximation techniques which can be applied in such a case.
Let  us  briefly  illustrate  (2.43)  using  the  binary  model  of  Example  2.5.
We have that∇
θ
=
e
θ
1+e
θ
and∇
2
θ
=
e
θ
(1+e
θ
)
2
.This is exactly what we would
have obtained from direct computation of the meanp(x= 1;θ) and variance
p(x= 1;θ)−p(x= 1;θ)
2
subject to the distributionp(x;θ).
2.3.2  Examples
A large number of densities are members of the exponential family. Note,
however,  that  in  statistics  it  is  not  common  to  express  them  in  the  dot
product formulation for historic reasons and for reasons of notational com-
pactness. We discuss a number of common densities below and show why
they can be written in terms of an exponential family. A detailed description
of the most commonly occurring types are given in a table.
GaussianLetx,μ∈R
d
and  let  Σ∈R
d×d
where  Σ0,  that  is,  Σ  is  a
positive definite matrix. In this case the normal distribution can be
expressed via
p(x) = (2π)
−
d
2
|Σ|
−
1
2
exp
(
−
1
2
(x−μ)
>
Σ
−1
(x−μ)
)
(2.46)
= exp
(
x
>
[
Σ
−1
μ
]
+ tr
([
−
1
2
xx
>
]
[
Σ
−1
]
)
−c(μ,Σ)
)
wherec(μ,Σ) =
1
2
μ
>
Σ
−1
μ+
d
2
log 2π+
1
2
log|Σ|. By combining the
terms inxintoφ(x) := (x,−
1
2
xx
>
) we obtain the sufficient statistics
ofx. The corresponding linear coefficients (Σ
−1
μ,Σ
−1
) constitute the
natural parameterθ. All that remains to be done to expressp(x) in
terms of (2.40) is to rewriteg(θ) in terms ofc(μ,Σ). The summary
table on the following page contains details.
MultinomialAnother popular distribution is one overkdiscrete events.
In this caseX={1,...,k}and we have in completely generic terms
p(x) =π
x
whereπ
x
≥0 and
∑
x
π
x
= 1. Now denote bye
x
∈R
k
the
x-th unit vector of the canonical basis, that is〈e
x
,e
x
′
〉= 1 ifx=x
′
and 0 otherwise. In this case we may rewritep(x) via
p(x) =π
x
= exp (〈e
x
,logπ〉)(2.47)
where logπ= (logπ
1
,...,logπ
k
). In other words, we have succeeded

2.3  Exponential Families63
in rewriting the distribution as a member of the exponential family
whereφ(x) =e
x
and whereθ= logπ. Note that in this definitionθ
is restricted to ak−1 dimensional manifold (thekdimensional prob-
ability simplex). If we relax those constraints we need to ensure that
p(x) remains normalized. Details are given in the summary table.
PoissonThis distribution is often used to model distributions over discrete
events. For instance, the number of raindrops which fall on a given
surface  area  in  a  given  amount  of  time,  the  number  of  stars  in  a
given volume of space, or the number of Prussian soldiers killed by
horse-kicks in the Prussian cavalry all follow this distribution. It is
given by
p(x) =
e
−λ
λ
x
x!
=
1
x!
exp (xlogλ−λ)  wherex∈N
0
.(2.48)
By definingφ(x) =xwe obtain an exponential families model. Note
that  things  are  a  bit  less  trivial  here  since
1
x!
is  the  nonuniform
countingmeasureonN
0
.  The  case  of  the  uniform  measure  which
leads to the exponential distribution is discussed in Problem 2.16.
The reason why many discrete processes follow the Poisson distri-
bution is that it can be seen as the limit over the average of a large
number of Bernoulli draws: denote byz∈ {0,1}a random variable
withp(z= 1) =α. Moreover, denote byz
n
the sum overndraws
from this random variable. In this casez
n
follows the multinomial
distribution withp(z
n
=k) =
(
n
k
)
α
k
(1−α)
n−k
. Now assume that
we letn→∞such that the expected value ofz
n
remains constant.
That is, we rescaleα=
λ
n
. In this case we have
p(z
n
=k) =
n!
(n−k)!k!
λ
k
n
k
(
1−
λ
n
)
n−k
(2.49)
=
λ
k
k!
(
1−
λ
n
)
n
[
n!
n
k
(n−k)!
(
1−
λ
n
)
k
]
Forn→ ∞the second term converges toe
−λ
. The third term con-
verges to 1, since we have a product of only 2kterms, each of which
converge to 1. Using the exponential families notation we may check
thatE[x] =λand that moreover also Var[x] =λ.
BetaThis  is  a  distribution  on  the  unit  intervalX=  [0,1]  which  is  very
versatile when it comes to modelling unimodal and bimodal distri-

642  Density Estimation
051015202530
0.00
0.05
0.10
0.15
0.20
0.25
0.30
0.35
0.40
0.00.20.40.60.81.0
0.0
0.5
1.0
1.5
2.0
2.5
3.0
3.5
Fig. 2.10.  Left: Poisson distributions withλ={1,3,10}. Right: Beta distributions
witha=  2  andb∈ {1,2,3,5,7}.  Note  how  with  increasingbthe  distribution
becomes more peaked close to the origin.
butions. It is given by
p(x) =x
a−1
(1−x)
b−1
Γ(a+b)
Γ(a)Γ(b)
.(2.50)
Taking logarithms we see that this, too, is an exponential families
distribution,  sincep(x)  =  exp((a−1) logx+ (b−1) log(1−x) +
log Γ(a+b)−log Γ(a)−log Γ(b)).
Figure 2.10 has a graphical description of the Poisson distribution and the
Beta distribution. For a more comprehensive list of exponential family dis-
tributions  see  the  table  below  and  [Fel71,  FT94,  MN83].  In  principle  any
mapφ(x), domainXwith underlying measureμare suitable, as long as the
log-partition functiong(θ) can be computed efficiently.
Theorem 2.15 (Convex feasible domain)The  domain  of  definitionΘ
ofg(θ)is convex.
ProofBy constructiongis convex and differentiable everywhere. Hence the
below-sets for all valuescwith{x|g(x)≤c}exist. Consequently the domain
of definition is convex.
Having a convex function is very valuable when it comes to parameter infer-
ence since convex minimization problems have unique minimum values and
global minima. We will discuss this notion in more detail when designing
maximum likelihood estimators.

2.3  Exponential Families65
Name
Domain
X
Measure
φ
(
x
)
g
(
θ
)
Domain Θ
Bernoulli
{
0
,
1
}
Counting
x
log
(
1 +
e
θ
)
R
Multinomial
{
1
..N
}
Counting
e
x
log
∑
Ni
=1
e
θ
i
R
N
Exponential
N
+0
Counting
x
−
log
(
1
−
e
θ
)
(
−∞
,
0)
Poisson
N
+0
1
x
!
x
e
θ
R
Laplace
[0
,
∞
)
Lebesgue
x
log
θ
(
−∞
,
0)
Gaussian
R
Lebesgue
(
x,
−
12
x
2
)
12
log 2
π
−
12
log
θ
2
+
1
2
θ
2
1
θ
2
R
×
(0
,
∞
)
R
n
Lebesgue
(
x,
−
1
2
xx
>
)
n
2
log 2
π
−
12
log
|
θ
2
|
+
1
2
θ
>
1
θ
−
1
2
θ
1
R
n
×
C
n
Inverse Normal    [0
,
∞
)
x
−
3
2
(
−
x,
−
1
x
)
12
log
π
−
2
√
θ
1
θ
2
−
12
log
θ
2
(0
,
∞
)
2
Beta
[0
,
1]
1
x
(1
−
x
)
(log
x,
log (1
−
x
))
log
Γ(
θ
1
)Γ(
θ
2
)
Γ(
θ
1
+
θ
2
)
R
2
Gamma
[0
,
∞
)
1
x
(log
x,
−
x
)
log Γ(
θ
1
)
−
θ
1
log
θ
2
(0
,
∞
)
2
Wishart
C
n
|
X
|
−
n
+1
2
(
log
|
x
|
,
−
12
x
)
−
θ
1
log
|
θ
2
|
+
θ
1
n
log 2
R
×
C
n
+
∑
ni
=1
log Γ
(
θ
1
+
1
−
i
2
)
Dirichlet
S
n
(
∏
ni
=1
x
i
)
−
1
(log
x
1
,...,
log
x
n
)
∑
ni
=1
log Γ(
θ
i
)
−
log Γ (
∑
ni
=1
θ
i
)
(
R
+
)
n
Inverse
χ
2
R
+
e
−
1
2
x
−
log
x
(
θ
−
1) log 2 + log(
θ
−
1)
(0
,
∞
)
Logarithmic
N
1
x
x
log(
−
log(1
−
e
θ
))
(
−∞
,
0)
Conjugate
Θ
Lebesgue
(
θ,
−
g
(
θ
))
generic
S
n
denotes the probability simplex in
n
dimensions.
C
n
is the cone of positive semidefinite matrices in
R
n
×
n
.

662  Density Estimation
2.4  Estimation
In many statistical problems the challenge is to estimate parameters of in-
terest.  For  instance,  in  the  context  of  exponential  families,  we  may  want
to estimate a parameter
ˆ
θsuch that it is close to the “true” parameterθ
∗
in the distribution. While the problem is fully general, we will describe the
relevant steps in obtaining estimates for the special case of the exponential
family. This is done for two reasons — firstly, exponential families are an
important special case and we will encounter slightly more complex variants
on the reasoning in later chapters of the book. Secondly, they are of a suffi-
ciently simple form that we are able to show arangeof different techniques.
In more advanced applications only a small subset of those methods may be
practically  feasible.  Hence  exponential  families  provide  us  with  a  working
example based on which we can compare the consequences of a number of
different techniques.
2.4.1  Maximum Likelihood Estimation
Whenever we have a distributionp(x;θ) parametrized by some parameter
θwe may use data to find a value ofθwhich maximizes thelikelihoodthat
the  data  would  have  been  generated  by  a  distribution  with  this  choice  of
parameter.
For instance, assume that we observe a set of temperature measurements
X={x
1
,...,x
m
}. In this case, we could try finding a normal distribution
such that the likelihoodp(X;θ) of the data under the assumption of a normal
distribution is maximized. Note that this doesnotimply in any way that the
temperature measurements are actually drawn from a normal distribution.
Instead, it means that we are attempting to find the Gaussian which fits the
data in the best fashion.
While this distinction may appear subtle, it is critical: we donotassume
that our model accurately reflects reality. Instead, we simply try doing the
best possible job at modeling the data given a specified model class. Later
we  will  encounter  alternative  approaches  at  estimation,  namely  Bayesian
methods, whichmakethe assumption that our model ought to be able to
describe the data accurately.
Definition 2.16 (Maximum Likelihood Estimator)For a modelp(·;θ)
parametrized  byθand  observationsXthe  maximum  likelihood  estimator
(MLE) is
ˆ
θ
ML
[X] := argmax
θ
p(X;θ).(2.51)

2.4  Estimation67
In the context of exponential families this leads to the following procedure:
givenmobservations drawn iid from some distribution, we can express the
joint likelihood as
p(X;θ) =
m
∏
i=1
p(x
i
;θ) =
m
∏
i=1
exp (〈φ(x
i
),θ〉−g(θ))(2.52)
= exp (m(〈μ[X],θ〉−g(θ)))(2.53)
whereμ[X] :=
1
m
m
∑
i=1
φ(x
i
).(2.54)
Hereμ[X] is the empirical average of the mapφ(x). Maximization ofp(X;θ)
is  equivalent  to  minimizing  the  negative  log-likelihood−logp(X;θ).  The
latter  is  a  common  practical  choice  since  for  independently  drawn  data,
the product of probabilities decomposes into the sum of the logarithms of
individual likelihoods. This leads to the following objective function to be
minimized
−logp(X;θ) =m[g(θ)−〈θ,μ[X]〉](2.55)
Sinceg(θ) is convex and〈θ,μ[X]〉is linear inθ, it follows that minimization
of (2.55) is a convex optimization problem. Using Theorem 2.14 and the first
order optimality condition∇
θ
g(θ) =μ[X] for (2.55) implies that
θ= [∇
θ
g]
−1
(μ[X]) or equivalentlyE
x∼p(x;θ)
[φ(x)] =∇
θ
g(θ) =μ[X].
(2.56)
Put another way, the above conditions state that we aim to find the distribu-
tionp(x;θ) which has the same expected value ofφ(x) as what we observed
empirically  viaμ[X].  Under  very  mild  technical  conditions  a  solution  to
(2.56) exists.
In general, (2.56) cannot be solved analytically. In certain special cases,
though, this is easily possible. We discuss two such choices in the following:
Multinomial and Poisson distributions.
Example 2.6 (Poisson Distribution)For the Poisson distribution
1
where
p(x;θ) =
1
x!
exp(θx−e
θ
)it follows thatg(θ) =e
θ
andφ(x) =x. This allows
1
Often the Poisson distribution is specified usingλ:= logθas its rate parameter. In this case we
havep(x;λ) =λ
x
e
−λ
/x! as its parametrization. The advantage of thenaturalparametrization
usingθis that we can directly take advantage of the properties of the log-partition function as
generating the cumulants ofx.

682  Density Estimation
us to solve (2.56) in closed form using
∇
θ
g(θ) =e
θ
=
1
m
m
∑
i=1
x
i
and henceθ= log
m
∑
i=1
x
i
−logm.(2.57)
Example 2.7 (Multinomial Distribution)For  the  multinomial  distri-
bution  the  log-partition  function  is  given  byg(θ) = log
∑
N
i=1
e
θ
i
,  hence  we
have that
∇
i
g(θ) =
e
θ
i
∑
N
j=1
e
θ
j
=
1
m
m
∑
j=1
{x
j
=i}.(2.58)
It is easy to check that (2.58) is satisfied fore
θ
i
=
∑
m
j=1
{x
j
=i}. In other
words,  the  MLE  for  a  discrete  distribution  simply  given  by  the  empirical
frequencies of occurrence.
The multinomial setting also exhibits two rather important aspects of ex-
ponential families: firstly, choosingθ
i
=c+ log
∑
m
i=1
{x
j
=i}for anyc∈R
will lead to an equivalent distribution. This is the case since the sufficient
statisticφ(x) is not minimal. In our context this means that the coordinates
ofφ(x)  are  linearly  dependent  —  for  anyxwe  have  that
∑
j
[φ(x)]
j
=  1,
hence  we  could  eliminate  one  dimension.  This  is  precisely  the  additional
degree of freedom which is reflected in the scaling freedom inθ.
Secondly, for data where some events do not occur at all, the expression
log
[
∑
m
j=1
{x
j
=i}
]
= log 0 is ill defined. This is due to the fact that this
particular  set  of  counts  occurs  on  the  boundary  of  the  convex  set  within
which the natural parametersθare well defined. We will see how different
types of priors can alleviate the issue.
Using the MLE is not without problems. As we saw in Figure 2.1, conver-
gence can be slow, since we are not using any side information. The latter
can provide us with problems which are both numerically better conditioned
and which show better convergence,provided  that  our  assumptions  are  ac-
curate. Before discussing a Bayesian approach to estimation, let us discuss
basic statistical properties of the estimator.
2.4.2  Bias, Variance and Consistency
When designing any estimator
ˆ
θ(X) we would like to obtain a number of
desirable properties: in general it should not be biased towards a particular
solution  unless  we  have  good  reason  to  believe  that  this  solution  should
be  preferred.  Instead,  we  would  like  the  estimator  to  recover,  at  least  on

2.4  Estimation69
average, the “correct” parameter, should it exist. This can be formalized in
the notion of anunbiasedestimator.
Secondly, we would like that, even if no correct parameter can be found,
e.g. when we are trying to fit a Gaussian distribution to data which is not
normally distributed, that we will converge to the best possible parameter
choice as we obtain more data. This is what is understood byconsistency.
Finally, we would like the estimator to achieve low bias and near-optimal
estimates  as  quickly  as  possible.  The  latter  is  measured  by  theefficiency
of an estimator. In this context we will encounter the Cram ́er-Rao bound
which controls the best possible rate at which an estimator can achieve this
goal. Figure 2.11 gives a pictorial description.
Fig. 2.11.  Left: unbiased estimator; the estimates, denoted by circles have as mean
the true parameter, as denoted by a star. Middle: consistent estimator. While the
true model is not within the class we consider (as denoted by the ellipsoid), the
estimates converge to the white star which is the best model within the class that
approximates the true model, denoted by the solid star. Right: different estimators
have  different regions of uncertainty,  as made explicit by  the ellipses around the
true parameter (solid star).
Definition 2.17 (Unbiased Estimator)An  estimator
ˆ
θ[X]is  unbiased
if for allθwhereX∼p(X;θ)we haveE
X
[
ˆ
θ[X]] =θ.
In other words, in expectation the parameter estimate matches the true pa-
rameter. Note that this only makes sense if a true parameter actuallyexists.
For instance, if the data is Poisson distributed and we attempt modeling it
by a Gaussian we will obviously not obtain unbiased estimates.
For finite sample sizes MLE is oftenbiased. For instance, for the normal
distribution  the  variance  estimates  carry  biasO(m
−1
).  See  problem  2.19
for details. In general, under fairly mild conditions, MLE is asymptotically
unbiased [DGL96]. We prove this for exponential families. For more general
settings  the  proof  depends  on  the  dimensionality  and  smoothness  of  the
family of densities that we have at our disposition.

702  Density Estimation
Theorem 2.18 (MLE for Exponential Families)Assume thatXis an
m-sample drawn iid fromp(x;θ). The estimate
ˆ
θ[X] =g
−1
(μ[X])is asymp-
totically normal with
m
−
1
2
[
ˆ
θ[X]−θ]→N(0,
[
∇
2
θ
g(θ)
]
−1
).(2.59)
In other words, the estimate
ˆ
θ[X] is asymptotically normal, it converges to
the true parameterθ, and moreover, the variance at the correct parameter
is given by the inverse of the covariance matrix of the data, as given by the
second derivative of the log-partition function∇
2
θ
g(θ).
ProofDenote byμ=∇
θ
g(θ) the true mean. Moreover, note that∇
2
θ
g(θ) is
the covariance of the data drawn fromp(x;θ). By the central limit theorem
(Theorem 2.3) we have thatn
−
1
2
[μ[X]−μ]→N(0,∇
2
θ
g(θ)).
Now  note  that
ˆ
θ[X]  =  [∇
θ
g]
−1
(μ[X]).  Therefore,  by  the  delta  method
(Theorem 2.5) we know that
ˆ
θ[X] is also asymptotically normal. Moreover,
by the inverse function theorem the Jacobian ofg
−1
satisfies∇
μ
[∇
θ
g]
−1
(μ) =
[
∇
2
θ
g(θ)
]
−1
. Applying Slutsky’s theorem (Theorem 2.4) proves the claim.
Now that we established the asymptotic properties of the MLE for exponen-
tial families it is only natural to ask how much variation one may expect in
ˆ
θ[X] when performing estimation. The Cramer-Rao bound governs this.
Theorem 2.19 (Cram ́er and Rao [Rao73])Assume thatXis drawn from
p(X;θ)and  let
ˆ
θ[X]be  an  asymptotically  unbiased  estimator.  Denote  byI
the Fisher information matrix and byBthe variance of
ˆ
θ[X]where
I:= Cov [∇
θ
logp(X;θ)]andB:= Var
[
ˆ
θ[X]
]
.(2.60)
In this casedetIB≥1for all estimators
ˆ
θ[X].
ProofWe prove the claim for the scalar case. The extension to matrices is
straightforward. Using the Cauchy-Schwarz inequality we have
Cov
2
[
∇
θ
logp(X;θ),
ˆ
θ[X]
]
≤Var [∇
θ
logp(X;θ)] Var
[
ˆ
θ[X]
]
=IB.(2.61)
Note that at the true parameter the expected log-likelihood score vanishes
E
X
[∇
θ
logp(X;θ)] =∇
θ
∫
p(X;θ)dX=∇
θ
1 = 0.(2.62)

2.4  Estimation71
Hence we may simplify the covariance formula by dropping the means via
Cov
[
∇
θ
logp(X;θ),
ˆ
θ[X]
]
=E
X
[
∇
θ
logp(X;θ)
ˆ
θ[X]
]
=
∫
p(X;θ)
ˆ
θ(X)∇
θ
logp(X;θ)dθ
=∇
θ
∫
p(X;θ)
ˆ
θ(X)dX=∇
θ
θ= 1.
Here  the  last  equality  follows  since  we  may  interchange  integration  byX
and the derivative with respect toθ.
The Cram ́er-Rao theorem implies that there is a limit to how well we may
estimate a parameter given finite amounts of data. It is also a yardstick by
which we may measure how efficiently an estimator uses data. Formally, we
define  the  efficiency  as  the  quotient  between  actual  performance  and  the
Cram ́er-Rao bound via
e:= 1/detIB.(2.63)
The closereis to 1, the lower the variance of the corresponding estimator
ˆ
θ(X). Theorem 2.18 implies that for exponential families MLE is asymptot-
ically efficient. It turns out to be generally true.
Theorem 2.20 (Efficiency of MLE [Cra46, GW92, Ber85])The max-
imum likelihood estimator is asymptotically efficient (e= 1).
So far we only discussed the behavior of
ˆ
θ[X] whenever thereexistsa trueθ
generatingp(θ;X). If this is not true, we need to settle for less: how well
ˆ
θ[X]
approaches the best possible choice of within the given model class. Such
behavior is referred to as consistency. Note that it is not possible to define
consistencyper  se.  For  instance,  we  may  ask  whether
ˆ
θconverges  to  the
optimal parameterθ
∗
, or whetherp(x;
ˆ
θ) converges to the optimal density
p(x;θ
∗
),  and  with  respect  to  which  norm.  Under  fairly  general  conditions
this  turns  out  to  be  true  for  finite-dimensional  parameters  and  smoothly
parametrized densities. See [DGL96, vdG00] for proofs and further details.
2.4.3  A Bayesian Approach
The  analysis  of  the  Maximum  Likelihood  method  might  suggest  that  in-
ference is a solved problem. After all, in the limit, MLE is unbiased and it
exhibits as small variance as possible. Empirical results using afiniteamount
of data, as present in Figure 2.1 indicate otherwise.
While  not  making  any  assumptions  can  lead  to  interesting  and  general

722  Density Estimation
theorems, it ignores the fact that in practice we almost always have some
idea about what to expect of our solution. It would be foolish to ignore such
additional information. For instance, when trying to determine the voltage
of a battery, it is reasonable to expect a measurement in the order of 1.5V
or less. Consequently suchpriorknowledge should be incorporated into the
estimation process. In fact, the use of side information to guide estimation
turns  out  to  bethetool  to  building  estimators  which  work  well  in  high
dimensions.
Recall Bayes’ rule (1.15) which states thatp(θ|x) =
p(x|θ)p(θ)
p(x)
. In our con-
text  this  means  that  if  we  are  interested  in  the  posterior  probability  ofθ
assuming a particular value, we may obtain this using the likelihood (often
referred to as evidence) ofxhaving been generated byθviap(x|θ) and our
prior  beliefp(θ)  thatθmight  be  chosen  in  the  distribution  generatingx.
Observe the subtle but important difference to MLE: instead of treatingθ
as  a  parameter  of  a  density  model,  we  treatθas  an  unobserved  random
variable which we may attempt to infer given the observationsX.
This can be done for a number of different purposes: we might want to
infer the most likely value of the parameter given the posterior distribution
p(θ|X). This is achieved by
ˆ
θ
MAP
(X) := argmax
θ
p(θ|X) = argmin
θ
−logp(X|θ)−logp(θ).(2.64)
The second equality follows sincep(X) does not depend onθ. This estimator
is also referred to as theMaximum a Posteriori, or MAP estimator. It differs
from  the  maximum  likelihood  estimator  by  adding  the  negative  log-prior
to the optimization problem. For this reason it is sometimes also referred
to  as  Penalized  MLE.  Effectively  we  are  penalizing  unlikely  choicesθvia
−logp(θ).
Note that using
ˆ
θ
MAP
(X) as the parameter of choice is not quite accurate.
After all, we can only infer a distribution overθand in general there is no
guarantee that the posterior is indeed concentrated around its mode. A more
accurate treatment is to use thedistributionp(θ|X) directly via
p(x|X) =
∫
p(x|θ)p(θ|X)dθ.(2.65)
In other words, we integrate out the unknown parameterθand obtain the
density estimate directly. As we will see, it is generally impossible to solve
(2.65) exactly, an important exception being conjugate priors. In the other
cases one may resort to sampling from the posterior distribution to approx-
imate the integral.
While it is possible to design a wide variety of prior distributions, this book

2.4  Estimation73
focuses  on  two  important  families:  norm-constrained  prior  and  conjugate
priors.  We  will  encounter  them  throughout,  the  former  sometimes  in  the
guise of regularization and Gaussian Processes, the latter in the context of
exchangeable models such as the Dirichlet Process.
Norm-constrained priors take on the form
p(θ)∝exp(−λ‖θ−θ
0
‖
d
p
) forp,d≥1 andλ >0.(2.66)
That is, they restrict the deviation of the parameter valueθfrom some guess
θ
0
. The intuition is that extreme values ofθare much less likely than more
moderate choices ofθwhich will lead to more smooth and even distributions
p(x|θ).
A  popular  choice  is  the  Gaussian  prior  which  we  obtain  forp=d=  1
andλ= 1/2σ
2
. Typically one setsθ
0
= 0 in this case. Note that in (2.66)
we  did  not  spell  out  the  normalization  ofp(θ)  —  in  the  context  of  MAP
estimation this is not needed since it simply becomes a constant offset in
the optimization problem (2.64). We have
ˆ
θ
MAP
[X] = argmin
θ
m[g(θ)−〈θ,μ[X]〉] +λ‖θ−θ
0
‖
d
p
(2.67)
Ford,p≥1 andλ≥0 the resulting optimization problem isconvexand it
has a unique solution. Moreover, very efficient algorithms exist to solve this
problem. We will discuss this in detail in Chapter 3. Figure 2.12 shows the
regions of equal prior probability for a range of different norm-constrained
priors.
As can be seen from the diagram, the choice of the norm can have profound
consequences on the solution. That said, as we will show in Chapter??, the
estimate
ˆ
θ
MAP
is well concentrated and converges to the optimal solution
under fairly general conditions.
An alternative to norm-constrained priors areconjugatepriors. They are
designed such that the posteriorp(θ|X) has the same functional form as the
priorp(θ). In exponential families such priors are defined via
p(θ|n,ν) = exp (〈nν,θ〉−ng(θ)−h(ν,n))  where(2.68)
h(ν,n) = log
∫
exp (〈nν,θ〉−ng(θ))dθ.(2.69)
Note  thatp(θ|n,ν)  itself  is  a  member  of  the  exponential  family  with  the
feature mapφ(θ) = (θ,−g(θ)). Henceh(ν,n) isconvexin (nν,n). Moreover,
the posterior distribution has the form
p(θ|X)∝p(X|θ)p(θ|n,ν)∝exp (〈mμ[X] +nν,θ〉−(m+n)g(θ)).(2.70)

742  Density Estimation
Fig. 2.12.  From left to right: regions of equal prior probability inR
2
for priors using
the`
1
,`
2
and`
∞
norm. Note that only the`
2
norm is invariant with regard to the
coordinate system. As we shall see later, the`
1
norm prior leads to solutions where
only a small number of coordinates is nonzero.
That is, the posterior distribution has the same form as a conjugate prior
with parameters
mμ[X]+nν
m+n
andm+n. In other words,nacts like a phantom
sample size andνis the corresponding mean parameter. Such an interpreta-
tion is reasonable given our desire to design a prior which, when combined
with the likelihood remains in the same model class: we treat prior knowl-
edge as having observed virtual data beforehand which is then added to the
actual set of observations. In this sense data and prior become completely
equivalent — we obtain our knowledge either from actual observations or
from virtual observations which describe our belief into how the data gen-
eration process is supposed to behave.
Eq. (2.70) has the added benefit of allowing us to provide an exact nor-
malized version of the posterior. Using (2.68) we obtain that
p(θ|X) = exp
(
〈mμ[X] +nν,θ〉−(m+n)g(θ)−h
(
mμ[X]+nν
m+n
,m+n
))
.
The main remaining challenge is to compute the normalizationhfor a range
of important conjugate distributions. The table on the following page pro-
vides details. Besides attractive algebraic properties, conjugate priors also
have a second advantage — the integral (2.65) can be solved exactly:
p(x|X) =
∫
exp (〈φ(x),θ〉−g(θ))×
exp
(
〈mμ[X] +nν,θ〉−(m+n)g(θ)−h
(
mμ[X]+nν
m+n
,m+n
))
dθ
Combining terms one may check that the integrand amounts to the normal-

2.4  Estimation75
ization in the conjugate distribution, albeitφ(x) added. This yields
p(x|X) = exp
(
h
(
mμ[X]+nν+φ(x)
m+n+1
,m+n+ 1
)
−h
(
mμ[X]+nν
m+n
,m+n
))
Such  an  expansion  is  very  useful  whenever  we  would  like  to  drawxfrom
p(x|X) without the need to obtain an instantiation of the latent variableθ.
We  provide  explicit  expansions  in  appendix  2.  [GS04]  use  the  fact  thatθ
can be integrated out to obtain what is called a collapsed Gibbs sampler for
topic models [BNJ03].
2.4.4  An Example
Assume  we  would  like  to  build  a  language  model  based  on  available  doc-
uments. For instance, a linguist might be interested in estimating the fre-
quency  of  words  in  Shakespeare’s  collected  works,  or  one  might  want  to
compare the change with respect to a collection of webpages. While mod-
els describing documents by treating them as bags of words which all have
been obtained independently of each other are exceedingly simple, they are
valuable for quick-and-dirty content filtering and categorization, e.g. a spam
filter on a mail server or a content filter for webpages.
Hence we model a documentdas a multinomial distribution: denote by
w
i
fori∈ {1,...,m
d
}the  words  ind.  Moreover,  denote  byp(w|θ)  the
probability  of  occurrence  of  wordw,  then  under  the  assumption  that  the
words are independently drawn, we have
p(d|θ) =
m
d
∏
i=1
p(w
i
|θ).(2.71)
It is our goal to find parametersθsuch thatp(d|θ) is accurate. For a given
collectionDof documents denote bym
w
the number of counts for wordw
in the entire collection. Moreover, denote bymthe total number of words
in the entire collection. In this case we have
p(D|θ) =
∏
i
p(d
i
|θ) =
∏
w
p(w|θ)
m
w
.(2.72)
Finding suitable parametersθgivenDproceeds as follows: In a maximum
likelihood model we set
p(w|θ) =
m
w
m
.(2.73)
In  other  words,  we  use  the  empirical  frequency  of  occurrence  as  our  best
guess and the sufficient statistic ofDisφ(w) =e
w
, wheree
w
denotes the unit
vector which is nonzero only for the “coordinate”w. Henceμ[D]
w
=
m
w
m
.

762  Density Estimation
We know that the conjugate prior of the multinomial model is a Dirichlet
model. It follows from (2.70) that the posterior mode is obtained by replacing
μ[D] by
mμ[D]+nν
m+n
. Denote byn
w
:=ν
w
·nthe pseudo-counts arising from
the conjugate prior with parameters (ν,n). In this case we will estimate the
probability of the wordwas
p(w|θ) =
m
w
+n
w
m+n
=
m
w
+nν
w
m+n
.(2.74)
In other words, we add the pseudo countsn
w
to the actual word countsm
w
.
This is particularly useful when the document we are dealing with is brief,
that is, whenever we have little data: it is quite unreasonable to infer from
a  webpage  of  approximately  1000  words  that  words  not  occurring  in  this
page have zero probability. This is exactly what is mitigated by means of
the conjugate prior (ν,n).
Finally, let us consider norm-constrained priors of the form (2.66). In this
case, the integral required for
p(D) =
∫
p(D|θ)p(θ)dθ
∝
∫
exp
(
−λ‖θ−θ
0
‖
d
p
+m〈μ[D],θ〉−mg(θ)
)
dθ
isintractableand we need to resort to an approximation. A popular choice
is to replace the integral byp(D|θ
∗
) whereθ
∗
maximizes the integrand. This
is precisely the MAP approximation of (2.64). Hence, in order to perform
estimation we need to solve
minimize
θ
g(θ)−〈μ[D],θ〉+
λ
m
‖θ−θ
0
‖
d
p
.(2.75)
A very simple strategy for minimizing (2.75) is gradient descent. That is for
a given value ofθwe compute the gradient of the objective function and take
a fixed step towards its minimum. For simplicity assume thatd=p= 2 and
λ= 1/2σ
2
, that is, we assume thatθis normally distributed with variance
σ
2
and meanθ
0
. The gradient is given by
∇
θ
[−logp(D,θ)] =E
x∼p(x|θ)
[φ(x)]−μ[D] +
1
mσ
2
[θ−θ
0
](2.76)
In  other  words,  it  depends  on  the  discrepancy  between  the  mean  ofφ(x)
with respect to our current model and the empirical averageμ[X], and the
difference betweenθand the prior meanθ
0
.
Unfortunately, convergence of the procedureθ←θ−η∇
θ
[...] is usually
very slow, even if we adjust the steplengthηefficiently. The reason is that
the gradient need not point towards the minimum as the space is most likely

2.5  Sampling77
distorted. A better strategy is to use Newton’s method (see Chapter 3 for
a detailed discussion and a convergence proof). It relies on a second order
Taylor approximation
−logp(D,θ+δ)≈−logp(D,θ) +〈δ,G〉+
1
2
δ
>
Hδ(2.77)
whereGandHare  the  first  and  second  derivatives  of−logp(D,θ)  with
respect toθ. The quadratic expression can be minimized with respect toδ
by choosingδ=−H
−1
Gand we can fashion an update algorithm from this
by lettingθ←θ−H
−1
G. One may show (see Chapter 3) that Algorithm 2.1
is quadratically convergent. Note that the prior onθensures thatHis well
conditioned even in the case where the variance ofφ(x) is not. In practice this
means that the prior ensures fast convergence of the optimization algorithm.
Algorithm 2.1Newton method for MAP estimation
NewtonMAP(D)
Initializeθ=θ
0
whilenot convergeddo
ComputeG=E
x∼p(x|θ)
[φ(x)]−μ[D] +
1
mσ
2
[θ−θ
0
]
ComputeH= Var
x∼p(x|θ)
[φ(x)] +
1
mσ
2
1
Updateθ←θ−H
−1
G
end while
returnθ
2.5  Sampling
So far we considered the problem of estimating the underlying probability
density, given a set of samples drawn from that density. Now let us turn to
the converse problem, that is, how to generate random variables given the
underlying probability density. In other words, we want to design a random
variable generator. This is useful for a number of reasons:
We may encounter probability distributions where optimization over suit-
able model parameters is essentially impossible and where it is equally im-
possible to obtain a closed form expression of the distribution. In these cases
it may still be possible to perform sampling to draw examples of the kind
of data we expect to see from the model. Chapter??discusses a number of
graphical models where this problem arises.
Secondly, assume that we are interested in testing the performance of a
network router under different load conditions. Instead of introducing the
under-development router in a live network and wreaking havoc, one could

782  Density Estimation
estimate  the  probability  density  of  the  network  traffic  under  various  load
conditions  and  build  a  model.  The  behavior  of  the  network  can  then  be
simulated  by  using  a  probabilistic  model.  This  involves  drawing  random
variables from an estimated probability distribution.
Carrying on, suppose that we generate data packets by sampling and see
an  anomalous  behavior  in  your  router.  In  order  to  reproduce  and  debug
this  problem  one  needs  access  to  the  same  set  of  random  packets  which
caused the problem in the first place. In other words, it is often convenient
if our random variable generator is reproducible; At first blush this seems
like  a  contradiction.  After  all,  our  random  number  generator  is  supposed
to generate random variables. This is less of a contradiction if we consider
how  random  numbers  are  generated  in  a  computer  —  given  a  particular
initialization (which typically depends on the state of the system, e.g. time,
disk  size,  bios  checksum,  etc.)  the  random  number  algorithm  produces  a
sequence of numbers which, for all practical purposes, can be treated as iid.
A simple method is the linear congruential generator [PTVF94]
x
i+1
= (ax
i
+b) modc.
The performance of these iterations depends significantly on the choice of the
constantsa,b,c. For instance, the GNU C compiler usesa= 1103515245,b=
12345 andc= 2
32
. In generalbandcneed to be relatively prime anda−1
needs  to  be  divisible  by  all  prime  factors  ofcand  by  4.  It  is  very  much
advisablenotto attempt implementing such generators on one’s own unless
it is absolutely necessary.
Useful desiderata for a pseudo random number generator (PRNG) are that
for practical purposes it is statistically indistinguishable from a sequence of
iid data. That is, when applying a number of statistical tests, we will accept
the null-hypothesis that the random variables are iid. See Chapter??for
a detailed discussion of statistical testing procedures for random variables.
In the following we assume that we have access to auniformRNGU[0,1]
which draws random numbers uniformly from the range [0,1].
2.5.1  Inverse Transformation
We now consider the scenario where we would like to draw from some dis-
tinctively non-uniform distribution. Whenever the latter is relatively simple
this can be achieved by applying an inverse transform:
Theorem 2.21Forz∼p(z)withz∈Zand  an  injective  transformation
φ:Z→Xwith  inverse  transformφ
−1
onφ(Z)it  follows  that  the  random

2.5  Sampling79
12345
0
0.1
0.2
0.3
Discrete Probability Distribution
123456
0
0.2
0.4
0.6
0.8
1
Cumulative Density Function
Fig. 2.13.  Left: discrete probability distribution over 5 possible outcomes. Right:
associated cumulative distribution function. When sampling, we drawxuniformly
at random fromU[0,1] and compute the inverse ofF.
variablex:=φ(z)is  drawn  from
∣
∣
∇
x
φ
−1
(x)
∣
∣
·p(φ
−1
(x)).  Here
∣
∣
∇
x
φ
−1
(x)
∣
∣
denotes the determinant of the Jacobian ofφ
−1
.
This follows immediately by applying a variable transformation for a mea-
sure, i.e. we changedp(z) todp(φ
−1
(x))
∣
∣
∇
x
φ
−1
(x)
∣
∣
. Such a conversion strat-
egy is particularly useful for univariate distributions.
Corollary 2.22Denote byp(x)a distribution onRwith cumulative distri-
bution  functionF(x
′
) =
∫
x
′
−∞
dp(x).  Then  the  transformationx=φ(z) =
F
−1
(z)converts samplesz∼U[0,1]to samples drawn fromp(x).
We now apply this strategy to a number of univariate distributions. One of
the most common cases is sampling from a discrete distribution.
Example 2.8 (Discrete Distribution)In the case of a discrete distribu-
tion  over{1,...,k}the  cumulative  distribution  function  is  a  step-function
with steps at{1,...,k}where the height of each step is given by the corre-
sponding probability of the event.
The  implementation  works  as  follows:  denote  byp∈[0,1]
k
the  vector  of
probabilities  and  denote  byf∈[0,1]
k
withf
i
=f
i−1
+p
i
andf
1
=p
1
the
steps of the cumulative distribution function. Then for a random variablez
drawn fromU[0,1]we obtainx=φ(z) := argmin
i
{f
i
≥z}. See Figure 2.13
for an example of a distribution over5events.

802  Density Estimation
0246810
0
0.2
0.4
0.6
0.8
1
Exponential Distribution
0246810
0
0.2
0.4
0.6
0.8
1
Cumulative Distribution Function
Fig. 2.14.  Left: Exponential distribution withλ= 1. Right: associated cumulative
distribution function. When sampling, we drawxuniformly at random fromU[0,1]
and compute the inverse.
Example 2.9 (Exponential Distribution)The density of a Exponential-
distributed random variable is given by
p(x|λ) =λexp(−λx)ifλ >0andx≥0.(2.78)
This allows us to compute its cdf as
F(x|λ) = 1−exp(−λx)ifλ >0forx≥0.(2.79)
Therefore  to  generate  a  Exponential  random  variable  we  drawz∼U[0,1]
and  solvex=φ(z) =F
−1
(z|λ) =−λ
−1
log(1−z).  Sincezand1−zare
drawn fromU[0,1]we can simplify this tox=−λ
−1
logz.
We could apply the same reasoning to the normal distribution in order to
draw Gaussian random variables. Unfortunately, the cumulative distribution
function of the Gaussian is not available in closed form and we would need
resort to rather nontrivial numerical techniques. It turns out that there exists
a much more elegant algorithm which has its roots in Gauss’ proof of the
normalization constant of the Normal distribution. This technique is known
as the Box-M ̈uller transform.
Example 2.10 (Box-M ̈uller Transform)Denote byX,Yindependent Gaus-
sian random variables with zero mean and unit variance. We have
p(x,y) =
1
√
2π
e
−
1
2
x
2
1
√
2π
e
−
1
2
y
2
=
1
2π
e
−
1
2
(x
2
+y
2
)
(2.80)

2.5  Sampling81
4
3
2
1
0
1
23
45
0.00
0.05
0.10
0.15
0.20
0.25
0.30
0.35
0.40
0.45
Fig. 2.15.  Red: true density of the standard normal distribution (red line) is con-
trasted with the histogram of 20,000 random variables generated by the Box-M ̈uller
transform.
The key observation is that thejointdistributionp(x,y)is radially symmet-
ric, i.e. it only depends on the radiusr
2
=x
2
+y
2
. Hence we may perform
a variable substitution in polar coordinates via the mapφwhere
x=rcosθandy=rsinθhence(x,y) =φ
−1
(r,θ).(2.81)
This allows us to express the density in terms of(r,θ)via
p(r,θ) =p(φ
−1
(r,θ))
∣
∣
∇
r,θ
φ
−1
(r,θ)
∣
∣
=
1
2π
e
−
1
2
r
2
∣
∣
∣
∣
[
cosθsinθ
−rsinθ rcosθ
]
∣
∣
∣
∣
=
r
2π
e
−
1
2
r
2
.
The  fact  thatp(r,θ)isconstantinθmeans  that  we  can  easily  sampleθ∈
[0,2π]by drawing a random variable, sayz
θ
fromU[0,1]and rescaling it with
2π. To obtain a sampler forrwe need to compute the cumulative distribution
function forp(r) =re
−
1
2
r
2
:
F(r
′
) =
∫
r
′
0
re
−
1
2
r
2
dr= 1−e
−
1
2
r
′
2
and hencer=F
−1
(z) =
√
−2 log(1−z).
(2.82)
Observing  thatz∼U[0,1]implies  that1−z∼U[0,1]yields  the  following
sampler: drawz
θ
,z
r
∼U[0,1]and computexandyby
x=
√
−2 logz
r
cos 2πz
θ
andy=
√
−2 logz
r
sin 2πz
θ
.
Note  that  the  Box-M ̈uller  transform  yieldstwo independentGaussian  ran-
dom variables. See Figure 2.15 for an example of the sampler.

822  Density Estimation
Example 2.11 (Uniform distribution on the disc)A  similar  strategy
can be employed when sampling from the unit disc. In  this case the closed-
form expression of the distribution is simply given by
p(x,y) =
{
1
π
ifx
2
+y
2
≤1
0otherwise
(2.83)
Using the variable transform (2.81) yields
p(r,θ) =p(φ
−1
(r,θ))
∣
∣
∇
r,θ
φ
−1
(r,θ)
∣
∣
=
{
r
π
ifr≤1
0otherwise
(2.84)
Integrating  outθyieldsp(r)  =  2rforr∈[0,1]with  corresponding  CDF
F(r) =r
2
forr∈[0,1]. Hence our sampler drawsz
r
,z
θ
∼U[0,1]and then
computesx=
√
z
r
cos 2πz
θ
andy=
√
z
r
sin 2πz
θ
.
2.5.2  Rejection Sampler
All the methods for random variable generation that we looked at so far re-
quire intimate knowledge about the pdf of the distribution. We now describe
a general purpose method, which can be used to generate samples from an
arbitrary distribution. Let us begin with sampling from a set:
Example 2.12 (Rejection Sampler)Denote byX⊆Xa set and letpbe
a density onX. Then a sampler for drawing fromp
X
(x)∝p(x)forx∈X
andp
X
(x) = 0forx6∈X,  that  is,p
X
(x) =p(x|x∈X)is  obtained  by  the
procedure:
repeat
drawx∼p(x)
untilx∈X
returnx
That is, the algorithm keeps on drawing frompuntil the random variable is
contained  inX.  The  probability  that  this  occurs  is  clearlyp(X).  Hence  the
largerp(X)the higher the efficiency of the sampler. See Figure 2.16.
Example 2.13 (Uniform distribution on a disc)The  procedure  works
trivially as follows: drawx,y∼U[0,1]. Accept if(2x−1)
2
+ (2y−1)
2
≤1
and return sample(2x−1,2y−1). This sampler has efficiency
4
π
since this
is the surface ratio between the unit square and the unit ball.
Note that this time we did not need to carry out any sophisticated measure

2.5  Sampling83
Fig. 2.16.  Rejection sampler. Left: samples drawn from the uniform distribution on
[0,1]
2
. Middle: the samples drawn from the uniform distribution on the unit disc
are all the points in the grey shaded area. Right: the same procedure allows us to
sample uniformly from arbitrary sets.
0.00.20.40.60.81.0
0.0
0.5
1.0
1.5
2.0
2.5
0.00.20.40.60.81.0
0.0
0.5
1.0
1.5
2.0
2.5
3.0
Fig. 2.17.  Accept reject sampling for the Beta(2,5) distribution. Left: Samples are
generated  uniformly  from  the  blue  rectangle  (shaded  area).  Only  those  samples
which fall under the red curve of the Beta(2,5) distribution (darkly shaded area)
are  accepted.  Right:  The  true  density  of  the  Beta(2,5)  distribution  (red  line)  is
contrasted with the histogram of 10,000 samples drawn by the rejection sampler.
transform. This mathematical convenience came at the expense of a slightly
less efficient sampler — about 21% of all samples are rejected.
The same reasoning that we used to obtain a hard accept/reject procedure
can  be  used  for  a  considerably  more  sophisticated  rejection  sampler.  The
basic idea is that if, for a given distributionpwe can find another distribution
qwhich, after rescaling, becomes an upper envelope onp, we can useqto
sample from and reject depending on the ratio betweenqandp.
Theorem 2.23 (Rejection Sampler)Denote bypandqdistributions on
Xand  letcbe  a  constant  such  that  such  thatcq(x)≥p(x)for  allx∈X.

842  Density Estimation
Then  the  algorithm  below  draws  frompwith  acceptance  probabilityc
−1
.
repeat
drawx∼q(x)andt∼U[0,1]
untilct≤
p(x)
q(x)
returnx
ProofDenote byZthe event that the sample drawn fromqis accepted.
Then by Bayes rule the probability Pr(x|Z) can be written as follows
Pr(x|Z) =
Pr(Z|x) Pr(x)
Pr(Z)
=
p(x)
cq(x)
·q(x)
c
−1
=p(x)(2.85)
Here we used that Pr(Z) =
∫
Pr(Z|x)q(x)dx=
∫
c
−1
p(x)dx=c
−1
.
Note that the algorithm of Example 2.12 is a special case of such a rejection
sampler — we majorizep
X
by the uniform distribution rescaled by
1
p(X)
.
Example 2.14 (Beta distribution)Recall that theBeta(a,b)distribution,
as a member of the Exponential Family with sufficient statistics(logx,log(1−
x)), is given by
p(x|a,b) =
Γ(a+b)
Γ(a)Γ(b)
x
a−1
(1−x)
b−1
,(2.86)
For given(a,b)one can verify (problem 2.25) that
M:= argmax
x
p(x|a,b) =
a−1
a+b−2
.(2.87)
provideda >1. Hence, if we use as proposal distribution the uniform distri-
butionU[0,1]with scaling factorc=p(M|a,b)we may apply Theorem 2.23.
As  illustrated  in  Figure  2.17,  to  generate  a  sample  fromBeta(a,b)we  first
generate  a  pair(x,t),  uniformly  at  random  from  the  shaded  rectangle.  A
sample  is  retained  ifct≤p(x|a,b),  and  rejected  otherwise.  The  acceptance
rate of this sampler is
1
c
.
Example 2.15 (Normal distribution)We  may  use  the  Laplace  distri-
bution to generate samples from the Normal distribution. That is, we use
q(x|λ) =
λ
2
e
−λ|x|
(2.88)
as the proposal distribution. For a normal distributionp=N(0,1)with zero

2.5  Sampling85
mean  and  unit  variance  it  turns  out  that  choosingλ=  1yields  the  most
efficient sampling scheme (see Problem 2.27) with
p(x)≤
√
2e
π
q(x|λ= 1)
As  illustrated  in  Figure  2.18,  we  first  generatex∼q(x|λ=  1)using  the
inverse  transform  method  (see  Example  2.9  and  Problem  2.21)  andt∼
U[0,1]. Ift≤
√
2e/πp(x)we acceptx, otherwise we reject it. The efficiency
of this scheme is
√
π
2e
.
−4−2024
0
0.2
0.4
0.6
√
2e
π
g(x|0,1)
p(x)
Fig. 2.18.  Rejection sampling for the Normal distribution (red curve). Samples are
generated uniformly from the Laplace distribution rescaled by
√
2e/π. Only those
samples which fall under the red curve of the standard normal distribution (darkly
shaded area) are accepted.
While rejection sampling is fairly efficient in low dimensions its efficiency is
unsatisfactory in high dimensions. This leads us to an instance of the curse of
dimensionality [Bel61]: the pdf of ad-dimensional Gaussian random variable
centered at 0 with varianceσ
2
1is given by
p(x|σ
2
) = (2π)
−
d
2
σ
−d
e
−
1
2σ
2
‖x‖
2
Now suppose that we want to draw fromp(x|σ
2
) by sampling from another
Gaussianqwith  slightly  larger  varianceρ
2
> σ
2
.  In  this  case  the  ratio
between both distributions is maximized at 0 and it yields
c=
q(0|σ
2
)
p(0|ρ
2
)
=
[
ρ
σ
]
d

862  Density Estimation
If suppose
ρ
σ
= 1.01, andd= 1000, we find thatc≈20960. In other words,
we need to generate approximately 21,000 samples on the average fromqto
draw a single sample fromp. We will discuss a more sophisticated sampling
algorithms, namely Gibbs Sampling, in Section??. It allows us to draw from
rather nontrivial distributions as long as the distributions in small subsets
of random variables are simple enough to be tackled directly.
Problems
Problem 2.1 (Bias Variance Decomposition{1})Prove that the vari-
anceVar
X
[x]of a random variable can be written asE
X
[x
2
]−E
X
[x]
2
.
Problem 2.2 (Moment Generating Function{2})Prove that the char-
acteristic function can be used to generate moments as given in (2.12). Hint:
use the Taylor expansion of the exponential and apply the differential oper-
ator before the expectation.
Problem 2.3 (Cumulative Error Function{2})
erf(x) =
√
2/π
∫
x
0
e
−x
2
dx.(2.89)
Problem 2.4 (Weak Law of Large Numbers{2})In analogy to the proof
of the central limit theorem prove the weak law of large numbers. Hint: use
a first order Taylor expansion ofe
iωt
= 1 +iωt+o(t)to compute an approx-
imation  of  the  characteristic  function.  Next  compute  the  limitm→ ∞for
φ
 ̄
X
m
. Finally, apply the inverse Fourier transform to associate the constant
distribution at the meanμwith it.
Problem 2.5 (Rates and confidence bounds{3})Show  that  the  rate
of hoeffding is tight — get bound from central limit theorem and compare to
the hoeffding rate.
Problem 2.6Why  can’t  we  just  use  each  chip  on  the  wafer  as  a  random
variable? Give a counterexample. Give bounds if we actually were allowed to
do this.
Problem 2.7 (Union Bound)Work  on  many  bounds  at  the  same  time.
We only have logarithmic penalty.
Problem 2.8 (Randomized Rounding{4})Solve  the  linear  system  of
equationsAx=bfor integralx.

2.5  Sampling87
Problem 2.9 (Randomized Projections{3})Prove  that  the  random-
ized projections converge.
Problem 2.10 (The Count-Min Sketch{5})Prove the projection trick
Problem 2.11 (Parzen windows with triangle kernels{1})Suppose
you are given the following data:X={2,3,3,5,5}. Plot the estimated den-
sity using a kernel density estimator with the following kernel:
k(u) =
{
0.5−0.25∗|u|if|u|≤2
0otherwise.
Problem 2.12Gaussian  process  link  with  Gaussian  prior  on  natural  pa-
rameters
Problem 2.13Optimization for Gaussian regularization
Problem 2.14Conjugate prior (student-t and wishart).
Problem 2.15 (Multivariate Gaussian{1})Prove thatΣ0is a nec-
essary and sufficient condition for the normal distribution to be well defined.
Problem 2.16 (Discrete Exponential Distribution{2})φ(x) =xand
uniform measure.
Problem 2.17Exponential random graphs.
Problem 2.18 (Maximum Entropy Distribution)Show that exponen-
tial families arise as the solution of the maximum entropy estimation prob-
lem.
Problem 2.19 (Maximum Likelihood Estimates for Normal Distributions)
Derive the maximum likelihood estimates for a normal distribution, that is,
show that they result in
ˆμ=
1
m
m
∑
i=1
x
i
andˆσ
2
=
1
m
m
∑
i=1
(x
i
−ˆμ)
2
(2.90)
using  the  exponential  families  parametrization.  Next  show  that  while  the
mean estimateˆμis unbiased, the variance estimate has a slight bias ofO(
1
m
).
To see this, take the expectation with respect toˆσ
2
.

882  Density Estimation
Problem 2.20 (cdf of Logistic random variable{1})Show that the cdf
of the Logistic random variable(??)is given by(??).
Problem 2.21 (Double-exponential (Laplace) distribution{1})Use
the inverse-transform method to generate a sample from the double-exponential
(Laplace) distribution(2.88).
Problem 2.22 (Normal random variables in polar coordinates{1})
IfX
1
andX
2
are  standard  normal  random  variables  and  let(R,θ)de-
note  the  polar  coordinates  of  the  pair(X
1
,X
2
).  Show  thatR
2
∼χ
2
2
and
θ∼Unif[0,2π].
Problem 2.23 (Monotonically increasing mappings{1})A mapping
T:R→Ris one-to-one if, and only if,Tis monotonically increasing, that
is,x > yimplies thatT(x)> T(y).
Problem 2.24 (Monotonically increasing multi-maps{2})LetT:R
n
→
R
n
be  one-to-one.  IfX∼p
X
(x),  then  show  that  the  distributionp
Y
(y)of
Y=T(X)can be obtained via(??).
Problem 2.25 (Argmax of theBeta(a,b)distribution{1})Show that
the mode of theBeta(a,b)distribution is given by(2.87).
Problem 2.26 (Accept reject sampling for the unit disk{2})Give at
leastTWO
different accept-reject based sampling schemes to generate sam-
ples uniformly at random from the unit disk. Compute their efficiency.
Problem 2.27 (Optimizing Laplace for Standard Normal{1})Optimize
the ratiop(x)/g(x|μ,σ), with respect toμandσ, wherep(x)is the standard
normal distribution(??), andg(x|μ,σ)is the Laplace distribution(2.88).
Problem 2.28 (Normal Random Variable Generation{2})The aim
of  this  problem  is  to  write  code  to  generate  standard  normal  random  vari-
ables(??)by  using  different  methods.  To  do  this  generateU∼Unif[0,1]
and apply
(i)the Box-Muller transformation outlined in Section??.
(ii)use the following approximation to the inverse CDF
Φ
−1
(α)≈t−
a
0
+a
1
t
1 +b
1
t+b
2
t
2
,(2.91)

2.5  Sampling89
wheret
2
= log(α
−2
)and
a
0
= 2.30753,a
1
= 0.27061,b
1
= 0.99229,b
2
= 0.04481
(iii)use the method outlined in example 2.15.
Plot a histogram of the samples you generated to confirm that they are nor-
mally  distributed.  Compare  these  different  methods  in  terms  of  the  time
needed to generate 1000 random variables.
Problem 2.29 (Non-standard Normal random variables{2})Describe
a scheme based on the Box-Muller transform to generateddimensional nor-
mal  random  variablesp(x|0,I).  How  can  this  be  used  to  generate  arbitrary
normal random variablesp(x|μ,Σ).
Problem 2.30 (Uniform samples from a disk{2})Show how the ideas
described in Section??can be generalized to draw samples uniformly at ran-
dom from an axis parallel ellipse:{(x,y) :
x
2
1
a
2
+
x
2
2
b
2
≤1}.



3
Optimization
Optimization plays an increasingly important role in machine learning. For
instance,  many  machine  learning  algorithms  minimize  a  regularized  risk
functional:
min
f
J(f) :=λΩ(f) +R
emp
(f),(3.1)
with the empirical risk
R
emp
(f) :=
1
m
m
∑
i=1
l(f(x
i
),y
i
).(3.2)
Herex
i
are the training instances andy
i
are the corresponding labels.lthe
loss function measures the discrepancy betweenyand the predictionsf(x
i
).
Finding the optimalfinvolves solving an optimization problem.
This chapter provides a self-contained overview of some basic concepts and
tools from optimization, especially geared towards solving machine learning
problems.  In  terms  of  concepts,  we  will  cover  topics  related  to  convexity,
duality, and Lagrange multipliers. In terms of tools, we will cover a variety
of  optimization  algorithms  including  gradient  descent,  stochastic  gradient
descent, Newton’s method, and Quasi-Newton methods. We will also look
at some specialized algorithms tailored towards solving Linear Programming
and Quadratic Programming problems which often arise in machine learning
problems.
3.1  Preliminaries
Minimizing an arbitrary function is, in general, very difficult, but if the ob-
jective function to be minimized is convex then things become considerably
simpler.  As  we  will  see  shortly,  the  key  advantage  of  dealing  with  convex
functions is that a local optima is also the global optima. Therefore, well
developed tools exist to find the global minima of a convex function. Conse-
quently, many machine learning algorithms are now formulated in terms of
convex optimization problems. We briefly review the concept of convex sets
and functions in this section.
91

923  Optimization
3.1.1  Convex Sets
Definition 3.1 (Convex Set)A  subsetCofR
n
is  said  to  be  convex  if
(1−λ)x+λy∈Cwheneverx∈C,y∈Cand0< λ <1.
Intuitively, what this means is that the line joining any two pointsxandy
from the setClies insideC(see Figure 3.1). It is easy to see (Exercise 3.1)
that intersections of convex sets are also convex.
Fig. 3.1.  The convex set (left) contains the line joining any two points that belong
to the set. A non-convex set (right) does not satisfy this property.
A vector sum
∑
i
λ
i
x
i
is called a convex combination ifλ
i
≥0 and
∑
i
λ
i
=
1. Convex combinations are helpful in defining a convex hull:
Definition 3.2 (Convex Hull)The convex hull,conv(X), of a finite sub-
setX={x
1
,...,x
n
}ofR
n
consists of all convex combinations ofx
1
,...,x
n
.
3.1.2  Convex Functions
Letfbe a real valued function defined on a setX⊂R
n
. The set
{(x,μ) :x∈X,μ∈R,μ≥f(x)}(3.3)
is called theepigraphoff. The functionfis defined to be a convex function
if its epigraph is a convex set inR
n+1
. An equivalent, and more commonly
used,  definition  (Exercise  3.5)  is  as  follows  (see  Figure  3.2  for  geometric
intuition):
Definition 3.3 (Convex Function)A  functionfdefined  on  a  setXis
called  convex  if,  for  anyx,x
′
∈Xand  any0< λ <1such  thatλx+ (1−
λ)x
′
∈X, we have
f(λx+ (1−λ)x
′
)≤λf(x) + (1−λ)f(x
′
).(3.4)

3.1  Preliminaries93
A functionfis calledstrictlyconvex if
f(λx+ (1−λ)x
′
)< λf(x) + (1−λ)f(x
′
)(3.5)
wheneverx6=x
′
.
In fact, the above definition can be extended to show that iffis a convex
function andλ
i
≥0 with
∑
i
λ
i
= 1 then
f
(
∑
i
λ
i
x
i
)
≤
∑
i
λ
i
f(x
i
).(3.6)
The above inequality is called theJensen’s inequality(problem ).
6
4
202
4
6
x
0
200
400
600
800
1000
f(x)
32
1
0
1
23
x
1.5
1.0
0.5
0.0
0.5
1.0
1.5
f(x)
Fig. 3.2.  A convex function (left) satisfies (3.4); the shaded region denotes its epi-
graph. A nonconvex function (right) does not satisfy (3.4).
Iff:X→Ris differentiable, thenfis convex if, and only if,
f(x
′
)≥f(x) +
〈
x
′
−x,∇f(x)
〉
for allx,x
′
∈X.(3.7)
In other words, the first order Taylor approximation lower bounds the convex
function  universally  (see  Figure  3.4).  Here  and  in  the  rest  of  the  chapter
〈x,y〉denotes the Euclidean dot product between vectorsxandy, that is,
〈x,y〉:=
∑
i
x
i
y
i
.(3.8)
Iffis twice differentiable, thenfis convex if, and only if, its Hessian is
positive semi-definite, that is,
∇
2
f(x)0.(3.9)
For twice differentiable strictly convex functions, the Hessian matrix is pos-
itive definite, that is,∇
2
f(x)0. We briefly summarize some operations
which preserve convexity:

943  Optimization
AdditionIff
1
andf
2
are convex, thenf
1
+f
2
is also convex.
ScalingIffis convex, thenαfis convex forα >0.
Affine TransformIffis convex, theng(x) =f(Ax+b) for some matrix
Aand vectorbis also convex.
Adding a Linear FunctionIffis convex, theng(x) =f(x)+〈a,x〉for some vector
ais also convex.
Subtracting a Linear FunctionIffis convex, theng(x) =f(x)−〈a,x〉for some vector
ais also convex.
Pointwise MaximumIff
i
are convex, theng(x) = max
i
f
i
(x) is also convex.
Scalar CompositionIff(x) =h(g(x)), thenfis convex if a)gis convex,
andhis convex, non-decreasing or b)gis concave, and
his convex, non-increasing.
-3
-2
-1
 0
 1
 2
 3
-3
-2
-1
 0
 1
 2
 3
 0
 2
 4
 6
 8
 10
 12
 14
 16
 18
-3-2-1 0 1 2 3
-3
-2
-1
 0
 1
 2
 3
Fig. 3.3.  Left: Convex Function in two variables. Right: the corresponding convex
below-sets{x|f(x)≤c}, for different values ofc. This is also called a contour plot.
There is an intimate relation between convex functions and convex sets.
For instance, the following lemma show that thebelow  sets(level sets) of
convex functions, sets for whichf(x)≤c, are convex.
Lemma 3.4 (Below-Sets of Convex Functions)Denote byf:X→R
a convex function. Then the set
X
c
:={x|x∈Xandf(x)≤c},for allc∈R,(3.10)
is convex.
ProofFor anyx,x
′
∈X
c
, we havef(x),f(x
′
)≤c. Moreover, sincefis
convex, we also have
f(λx+ (1−λ)x
′
)≤λf(x) + (1−λ)f(x
′
)≤cfor all 0< λ <1.(3.11)
Hence, for all 0< λ <1, we have (λx+ (1−λ)x
′
)∈X
c
, which proves the
claim. Figure 3.3 depicts this situation graphically.

3.1  Preliminaries95
As we hinted in the introduction of this chapter, minimizing an arbitrary
function on a (possibly not even compact) set of arguments can be a difficult
task, and will most likely exhibit many local minima. In contrast, minimiza-
tion of a convex objective function on a convex set exhibits exactly oneglobal
minimum. We now prove this property.
Theorem 3.5 (Minima on Convex Sets)If the convex functionf:X→
Rattains its minimum, then the set ofx∈X, for which the minimum value
is  attained,  is  a  convex  set.  Moreover,  iffis  strictly  convex,  then  this  set
contains a single element.
ProofDenote bycthe minimum offonX. Then the setX
c
:={x|x∈
Xandf(x)≤c}is clearly convex.
Iffis strictly convex, then for any two distinctx,x
′
∈X
c
and any 0<
λ <1 we have
f(λx+ (1−λ)x
′
)< λf(x) + (1−λ)f(x
′
) =λc+ (1−λ)c=c,
which contradicts the assumption thatfattains its minimum onX
c
. There-
foreX
c
must contain only a single element.
As  the  following  lemma  shows,  the  minimum  point  can  be  characterized
precisely.
Lemma 3.6Letf:X→Rbe a differentiable convex function. Thenxis
a minimizer off, if, and only if,
〈
x
′
−x,∇f(x)
〉
≥0for allx
′
.(3.12)
ProofTo  show  the  forward  implication,  suppose  thatxis  the  optimum
but (3.12) does not hold, that is, there exists anx
′
for which
〈
x
′
−x,∇f(x)
〉
<0.
Consider the line segmentz(λ) = (1−λ)x+λx
′
, with 0< λ <1. SinceX
is convex,z(λ) lies inX. On the other hand,
d
dλ
f(z(λ))
∣
∣
∣
∣
λ=0
=
〈
x
′
−x,∇f(x)
〉
<0,
which shows that for small values ofλwe havef(z(λ))< f(x), thus showing
thatxis not optimal.
The reverse implication follows from (3.7) by noting thatf(x
′
)≥f(x),
whenever (3.12) holds.

963  Optimization
One way to ensure that (3.12) holds is to set∇f(x) = 0. In other words,
minimizing a convex function is equivalent to finding axsuch that∇f(x) =
0.  Therefore,  the  first  order  conditions  are  both  necessary  and  sufficient
when minimizing a convex function.
3.1.3  Subgradients
So far, we worked with differentiable convex functions. The subgradient is a
generalization of gradients appropriate for convex functions, including those
which are not necessarily smooth.
Definition 3.7 (Subgradient)Supposexis a point where a convex func-
tionfis  finite.  Then  a  subgradient  is  the  normal  vector  of  any  tangential
supporting hyperplane offatx. Formallyμis called a subgradient offat
xif, and only if,
f(x
′
)≥f(x) +
〈
x
′
−x,μ
〉
for allx
′
.(3.13)
The set of all subgradients at a point is called the subdifferential, and is de-
noted by∂
x
f(x). If this set is not empty thenfis said to besubdifferentiable
atx. On the other hand, if this set is a singleton then, the function is said
to bedifferentiableatx. In this case we use∇f(x) to denote the gradient
off. Convex functions are subdifferentiable everywhere in their domain. We
now state some simple rules of subgradient calculus:
Addition∂
x
(f
1
(x) +f
2
(x)) =∂
x
f
1
(x) +∂
x
f
2
(x)
Scaling∂
x
αf(x) =α∂
x
f(x), forα >0
Affine TransformIfg(x) =f(Ax+b) for some matrixAand vectorb,
then∂
x
g(x) =A
>
∂
y
f(y).
Pointwise MaximumIfg(x) = max
i
f
i
(x) then∂g(x) = conv(∂
x
f
i
′
) where
i
′
∈argmax
i
f
i
(x).
The definition of a subgradient can also be understood geometrically. As
illustrated  by  Figure  3.4,  a  differentiable  convex  function  is  always  lower
bounded by its first order Taylor approximation. This concept can be ex-
tended to non-smooth functions via subgradients, as Figure 3.5 shows.
By using more involved concepts, the proof of Lemma 3.6 can be extended
to subgradients. In this case, minimizing a convex nonsmooth function en-
tails finding axsuch that 0∈∂f(x).

3.1  Preliminaries97
3.1.4  Strongly Convex Functions
When analyzing optimization algorithms, it is sometimes easier to work with
strongly convex functions, which generalize the definition of convexity.
Definition 3.8 (Strongly Convex Function)A convex functionfisσ-
strongly  convex  if,  and  only  if,  there  exists  a  constantσ >0such  that  the
functionf(x)−
σ
2
‖x‖
2
is convex.
The constantσis called the modulus of strong convexity off. Iffis twice
differentiable, then there is an equivalent, and perhaps easier, definition of
strong convexity:fis strongly convex if there exists aσsuch that
∇
2
f(x)σI.(3.14)
In  other  words,  the  smallest  eigenvalue  of  the  Hessian  offisuniformly
lower boundedbyσeverywhere. Some important examples of strongly con-
vex functions include:
Example 3.1 (Squared Euclidean Norm)The functionf(x) =
λ
2
‖x‖
2
isλ-strongly convex.
Example 3.2 (Negative Entropy)Let∆
n
={xs.t.
∑
i
x
i
= 1andx
i
≥0}
be thendimensional simplex, andf: ∆
n
→Rbe the negative entropy:
f(x) =
∑
i
x
i
logx
i
.(3.15)
Thenfis  1-strongly  convex  with  respect  to  the‖·‖
1
norm  on  the  simplex
(see Problem 3.7).
Iffis aσ-strongly convex function then one can show the following prop-
erties (Exercise 3.8). Herex,x
′
are arbitrary andμ∈∂f(x) andμ
′
∈∂f(x
′
).
f(x
′
)≥f(x) +
〈
x
′
−x,μ
〉
+
σ
2
∥
∥
x
′
−x
∥
∥
2
(3.16)
f(x
′
)≤f(x) +
〈
x
′
−x,μ
〉
+
1
2σ
∥
∥
μ
′
−μ
∥
∥
2
(3.17)
〈
x−x
′
,μ−μ
′
〉
≥σ
∥
∥
x−x
′
∥
∥
2
(3.18)
〈
x−x
′
,μ−μ
′
〉
≤
1
σ
∥
∥
μ−μ
′
∥
∥
2
.(3.19)

983  Optimization
3.1.5  Convex Functions with Lipschitz Continous Gradient
A somewhat symmetric concept to strong convexity is the Lipschitz conti-
nuity  of  the  gradient.  As  we  will  see  later  they  are  connected  by  Fenchel
duality.
Definition 3.9 (Lipschitz Continuous Gradient)A differentiable con-
vex functionfis said to have a Lipschitz continuous gradient, if there exists
a constantL >0, such that
∥
∥
∇f(x)−∇f(x
′
)
∥
∥
≤L
∥
∥
x−x
′
∥
∥
∀x,x
′
.(3.20)
As before, iffis twice differentiable, then there is an equivalent, and perhaps
easier, definition of Lipschitz continuity of the gradient:fhas a Lipschitz
continuous gradient strongly convex if there exists aLsuch that
LI∇
2
f(x).(3.21)
In other words, the largest eigenvalue of the Hessian offisuniformly upper
boundedbyLeverywhere.  Iffhas  a  Lipschitz  continuous  gradient  with
modulusL, then one can show the following properties (Exercise 3.9).
f(x
′
)≤f(x) +
〈
x
′
−x,∇f(x)
〉
+
L
2
∥
∥
x−x
′
∥
∥
2
(3.22)
f(x
′
)≥f(x) +
〈
x
′
−x,∇f(x)
〉
+
1
2L
∥
∥
∇f(x)−∇f(x
′
)
∥
∥
2
(3.23)
〈
x−x
′
,∇f(x)−∇f(x
′
)
〉
≤L
∥
∥
x−x
′
∥
∥
2
(3.24)
〈
x−x
′
,∇f(x)−∇f(x
′
)
〉
≥
1
L
∥
∥
∇f(x)−∇f(x
′
)
∥
∥
2
.(3.25)
3.1.6  Fenchel Duality
The Fenchel conjugate of a functionfis given by
f
∗
(x
∗
) = sup
x
{〈x,x
∗
〉−f(x)}.(3.26)
Even iffis not convex, the Fechel conjugate which is written as a supremum
over  linear  functions  is  always  convex.  Some  rules  for  computing  Fenchel
duals are summarized in Table 3.1.6. Iffis convex and its epigraph (3.3) is
a closed convex set, thenf
∗∗
=f. Iffandf
∗
are convex, then they satisfy
the so-called Fenchel-Young inequality
f(x) +f
∗
(x
∗
)≥〈x,x
∗
〉for allx,x
∗
.(3.27)

3.1  Preliminaries99
Fig. 3.4.  A convex function is always lower bounded by its first order Taylor ap-
proximation. This is true even if the function is not differentiable (see Figure 3.5)
4
32
1
0
1
23
4
1
0
1
2
3
4
5
Fig.  3.5.  Geometric  intuition  of  a  subgradient.  The  nonsmooth  convex  function
(solid blue) is only subdifferentiable at the “kink” points. We illustrate two of its
subgradients (dashed green and red lines) at a “kink” point which are tangential to
the function. The normal vectors to these lines are subgradients. Observe that the
first order Taylor approximations obtained by using the subgradients lower bounds
the convex function.
This inequality becomes an equality wheneverx
∗
∈∂f(x), that is,
f(x) +f
∗
(x
∗
) =〈x,x
∗
〉for allxandx
∗
∈∂f(x).(3.28)
Strong convexity (Section 3.1.4) and Lipschitz continuity of the gradient

1003  Optimization
Table 3.1.Rules for computing Fenchel Duals
Scalar AdditionIfg(x) =f(x) +αtheng
∗
(x
∗
) =f
∗
(x
∗
)−α.
Function ScalingIfα >0 andg(x) =αf(x) theng
∗
(x
∗
) =αf
∗
(x
∗
/α).
Parameter ScalingIfα6= 0 andg(x) =f(αx) theng
∗
(x
∗
) =f
∗
(x
∗
/α)
Linear TransformationIfAis an invertible matrix then (f◦A)
∗
=f
∗
◦(A
−1
)
∗
.
ShiftIfg(x) =f(x−x
0
) theng
∗
(x
∗
) =f
∗
(x
∗
) +〈x
∗
,x
0
〉.
SumIfg(x)=f
1
(x)   +f
2
(x)    theng
∗
(x
∗
)=
inf{f
∗
1
(x
∗
1
) +f
∗
2
(x
∗
2
) s.t.x
∗
1
+x
∗
2
=x
∗
}.
Pointwise InfimumIfg(x) = inff
i
(x) theng
∗
(x
∗
) = sup
i
f
∗
i
(x
∗
).
(Section  3.1.5)  are  related  by  Fenchel  duality  according  to  the  following
lemma, which we state without proof.
Lemma 3.10 (Theorem 4.2.1 and 4.2.2 [HUL93])
(i)Iffisσ-strongly convex, thenf
∗
has a Lipschitz continuous gradient
with modulus
1
σ
.
(ii)Iffis convex and has a Lipschitz continuous gradient with modulus
L, thenf
∗
is
1
L
-strongly convex.
Next we describe some convex functions and their Fenchel conjugates.
Example 3.3 (Squared Euclidean Norm)Wheneverf(x) =
1
2
‖x‖
2
we
havef
∗
(x
∗
) =
1
2
‖x
∗
‖
2
, that is, the squared Euclidean norm is its own con-
jugate.
Example 3.4 (Negative Entropy)The Fenchel conjugate of the negative
entropy(3.15)is
f
∗
(x
∗
) = log
∑
i
exp(x
∗
i
).
3.1.7  Bregman Divergence
Letfbe a differentiable convex function. The Bregman divergence defined
byfis given by
∆
f
(x,x
′
) =f(x)−f(x
′
)−
〈
x−x
′
,∇f(x
′
)
〉
.(3.29)
Also see Figure 3.6. Here are some well known examples.
Example 3.5 (Square Euclidean Norm)Setf(x)  =
1
2
‖x‖
2
.  Clearly,
∇f(x) =xand therefore
∆
f
(x,x
′
) =
1
2
‖x‖
2
−
1
2
∥
∥
x
′
∥
∥
2
−
〈
x−x
′
,x
′
〉
=
1
2
∥
∥
x−x
′
∥
∥
2
.

3.1  Preliminaries101
f(x
′
)
f(x)
f(x
′
) +
〈
x−x
′
,∇f(x
′
)
〉
∆
f
(x,x
′
)
Fig. 3.6.f(x) is the value of the function atx, whilef(x
′
)+〈x−x
′
,∇f(x
′
)〉denotes
the  first  order  Taylor  expansion  offaroundx
′
,  evaluated  atx.  The  difference
between these two quantities is the Bregman divergence, as illustrated.
Example 3.6 (Relative Entropy)Letfbe the un-normalized entropy
f(x) =
∑
i
(x
i
logx
i
−x
i
).(3.30)
One  can  calculate∇f(x) = logx,  wherelogxis  the  component  wise  loga-
rithm of the entries ofx, and write the Bregman divergence
∆
f
(x,x
′
) =
∑
i
x
i
logx
i
−
∑
i
x
i
−
∑
i
x
′
i
logx
′
i
+
∑
i
x
′
i
−
〈
x−x
′
,logx
′
〉
=
∑
i
(
x
i
log
(
x
i
x
′
i
)
+x
′
i
−x
i
)
.
Example 3.7 (p-norm)Letfbe the squarep-norm
f(x) =
1
2
‖x‖
2
p
=
1
2
(
∑
i
x
p
i
)
2/p
.(3.31)

1023  Optimization
We say that theq-norm is dual to thep-norm whenever
1
p
+
1
q
= 1. One can
verify (Problem 3.12) that thei-th component of the gradient∇f(x)is
∇
x
i
f(x) =
sign(x
i
)|x
i
|
p−1
‖x‖
p−2
p
.(3.32)
The corresponding Bregman divergence is
∆
f
(x,x
′
) =
1
2
‖x‖
2
p
−
1
2
∥
∥
x
′
∥
∥
2
p
−
∑
i
(x
i
−x
′
i
)
sign(x
′
i
)|x
′
i
|
p−1
‖x
′
‖
p−2
p
.
The following properties of the Bregman divergence immediately follow:
•∆
f
(x,x
′
) is convex inx.
•∆
f
(x,x
′
)≥0.
•∆
f
may not be symmetric, that is, in general ∆
f
(x,x
′
)6= ∆
f
(x
′
,x).
• ∇
x
∆
f
(x,x
′
) =∇f(x)−∇f(x
′
).
The next lemma establishes another important property.
Lemma 3.11The  Bregman  divergence(3.29)defined  by  a  differentiable
convex functionfsatisfies
∆
f
(x,y) + ∆
f
(y,z)−∆
f
(x,z) =〈∇f(z)−∇f(y),x−y〉.(3.33)
Proof
∆
f
(x,y) + ∆
f
(y,z) =f(x)−f(y)−〈x−y,∇f(y)〉+f(y)−f(z)−〈y−z,∇f(z)〉
=f(x)−f(z)−〈x−y,∇f(y)〉−〈y−z,∇f(z)〉
= ∆
f
(x,z) +〈∇f(z)−∇f(y),x−y〉.
3.2  Unconstrained Smooth Convex Minimization
In this section we will describe various methods to minimize a smooth convex
objective function.
3.2.1  Minimizing a One-Dimensional Convex Function
As a warm up let us consider the problem of minimizing a smooth one di-
mensional convex functionJ:R→Rin the interval [L,U]. This seemingly

3.2  Unconstrained Smooth Convex Minimization103
Algorithm 3.1Interval Bisection
1:Input:L,U, precision
2:Sett= 0,a
0
=Landb
0
=U
3:while(b
t
−a
t
)·J
′
(U)> do
4:ifJ
′
(
a
t
+b
t
2
)>0then
5:a
t+1
=a
t
andb
t+1
=
a
t
+b
t
2
6:else
7:a
t+1
=
a
t
+b
t
2
andb
t+1
=b
t
8:end if
9:t=t+ 1
10:end while
11:Return:
a
t
+b
t
2
simple problem has many applications. As we will see later, many optimiza-
tion methods find a direction of descent and minimize the objective function
along this direction
1
; this subroutine is called a line search. Algorithm 3.1
depicts a simple line search routine based on interval bisection.
Before we show that Algorithm 3.1 converges, let us first derive an im-
portant  property  of  convex  functions  of  one  variable.  For  a  differentiable
one-dimensional convex functionJ(3.7) reduces to
J(w)≥J(w
′
) + (w−w
′
)·J
′
(w
′
),(3.34)
whereJ
′
(w) denotes the gradient ofJ. Exchanging the role ofwandw
′
in
(3.34), we can write
J(w
′
)≥J(w) + (w
′
−w)·J
′
(w).(3.35)
Adding the above two equations yields
(w−w
′
)·(J
′
(w)−J
′
(w
′
))≥0.(3.36)
Ifw≥w
′
, then this implies thatJ
′
(w)≥J
′
(w
′
). In other words, the gradient
of a one dimensional convex function is monotonically non-decreasing.
Recall that minimizing a convex function is equivalent to findingw
∗
such
thatJ
′
(w
∗
) = 0. Furthermore, it is easy to see that the interval bisection
maintains  the  invariantJ
′
(a
t
)<0  andJ
′
(b
t
)>0.  This  along  with  the
monotonicity  of  the  gradient  suffices  to  ensure  thatw
∗
∈(a
t
,b
t
).  Setting
w=w
∗
in (3.34), and using the monotonicity of the gradient allows us to
1
If the objective function is convex, then the one dimensional function obtained by restricting
it along the search direction is also convex (Exercise 3.10).

1043  Optimization
write for anyw
′
∈(a
t
,b
t
)
J(w
′
)−J(w
∗
)≤(w
′
−w
∗
)·J
′
(w
′
)≤(b
t
−a
t
)·J
′
(U).(3.37)
Since we halve the interval (a
t
,b
t
) at every iteration, it follows that (b
t
−a
t
) =
(U−L)/2
t
. Therefore
J(w
′
)−J(w
∗
)≤
(U−L)·J
′
(U)
2
t
,(3.38)
for allw
′
∈(a
t
,b
t
). In other words, to find an-accurate solution, that is,
J(w
′
)−J(w
∗
)≤we only need log(U−L) + logJ
′
(U) + log(1/)< titera-
tions. An algorithm which converges to anaccurate solution inO(log(1/))
iterations is said to be linearly convergent.
For multi-dimensional objective functions, one cannot rely on the mono-
tonicity property of the gradient. Therefore, one needs more sophisticated
optimization algorithms, some of which we now describe.
3.2.2  Coordinate Descent
Coordinate descent is conceptually the simplest algorithm for minimizing a
multidimensional smooth convex functionJ:R
n
→R. At every iteration
select a coordinate, sayi, and update
w
t+1
=w
t
−η
t
e
i
.(3.39)
Heree
i
denotes thei-th basis vector, that is, a vector with one at thei-th co-
ordinate and zeros everywhere else, whileη
t
∈Ris a non-negative scalar step
size. One could, for instance, minimize the one dimensional convex function
J(w
t
−ηe
i
) to obtain the stepsizeη
t
. The coordinates can either be selected
cyclically, that is, 1,2,...,n,1,2,...or greedily, that is, the coordinate which
yields the maximum reduction in function value.
Even though coordinate descent can be shown to converge ifJhas a Lip-
schitz continuous gradient [LT92], in practice it can be quite slow. However,
if a high precision solution is not required, as is the case in some machine
learning applications, coordinate descent is often used because a) the cost
per iteration is very low and b) the speed of convergence may be acceptable
especially if the variables are loosely coupled.
3.2.3  Gradient Descent
Gradient descent (also widely known as steepest descent) is an optimization
technique  for  minimizing  multidimensional  smooth  convex  objective  func-
tions of the formJ:R
n
→R. The basic idea is as follows: Given a location

3.2  Unconstrained Smooth Convex Minimization105
w
t
at iterationt, compute the gradient∇J(w
t
), and update
w
t+1
=w
t
−η
t
∇J(w
t
),(3.40)
whereη
t
is a scalar stepsize. See Algorithm 3.2 for details. Different variants
of gradient descent depend on howη
t
is chosen:
Exact Line Search:SinceJ(w
t
−η∇J(w
t
)) is a one dimensional convex
function inη, one can use the Algorithm 3.1 to compute:
η
t
= argmin
η
J(w
t
−η∇J(w
t
)).(3.41)
Instead of the simple bisecting line search more sophisticated line searches
such as the More-Thuente line search or the golden bisection rule can also
be used to speed up convergence (see [NW99] Chapter 3 for an extensive
discussion).
Inexact Line Search:Instead of minimizingJ(w
t
−η∇J(w
t
)) we could
simply look for a stepsize which results in sufficient decrease in the objective
function value. One popular set of sufficient decrease conditions is the Wolfe
conditions
J(w
t+1
)≤J(w
t
) +c
1
η
t
〈∇J(w
t
),w
t+1
−w
t
〉(sufficient decrease)   (3.42)
〈∇J(w
t+1
),w
t+1
−w
t
〉 ≥c
2
〈∇J(w
t
),w
t+1
−w
t
〉(curvature)   (3.43)
with 0< c
1
< c
2
<1 (see Figure 3.7). The Wolfe conditions are also called
the Armijio-Goldstein conditions. If only sufficient decrease (3.42) alone is
enforced, then it is called the Armijio rule.
acceptable stepsize
acceptable stepsize
Fig.  3.7.  The  sufficient  decrease  condition  (left)  places  an  upper  bound  on  the
acceptable stepsizes while the curvature condition (right) places a lower bound on
the acceptable stepsizes.

1063  Optimization
Algorithm 3.2Gradient Descent
1:Input:Initial pointw
0
, gradient norm tolerance
2:Sett= 0
3:while‖∇J(w
t
)‖≥do
4:w
t+1
=w
t
−η
t
∇J(w
t
)
5:t=t+ 1
6:end while
7:Return:w
t
Decaying  Stepsize:Instead  of  performing  a  line  search  at  every  itera-
tion, one can use a stepsize which decays according to a fixed schedule, for
example,η
t
= 1/
√
t. In Section 3.2.4 we will discuss the decay schedule and
convergence rates of a generalized version of gradient descent.
Fixed Stepsize:SupposeJhas a Lipschitz continuous gradient with mod-
ulusL. Using (3.22) and the gradient descent updatew
t+1
=w
t
−η
t
∇J(w
t
)
one can write
J(w
t+1
)≤J(w
t
) +〈∇J(w
t
),w
t+1
−w
t
〉+
L
2
‖w
t+1
−w
t
‖(3.44)
=J(w
t
)−η
t
‖∇J(w
t
)‖
2
+
Lη
2
t
2
‖∇J(w
t
)‖
2
.(3.45)
Minimizing (3.45) as a function ofη
t
clearly shows that the upper bound on
J(w
t+1
) is minimized when we setη
t
=
1
L
, which is the fixed stepsize rule.
Theorem 3.12SupposeJhas a Lipschitz continuous gradient with modu-
lusL. Then Algorithm 3.2 with a fixed stepsizeη
t
=
1
L
will return a solution
w
t
with‖∇J(w
t
)‖≤in at mostO(1/
2
)iterations.
ProofPlugging inη
t
=
1
L
and rearranging (3.45) obtains
1
2L
‖∇J(w
t
)‖
2
≤J(w
t
)−J(w
t+1
)(3.46)
Summing this inequality
1
2L
T
∑
t=0
‖∇J(w
t
)‖
2
≤J(w
0
)−J(w
T
)≤J(w
0
)−J(w
∗
),
which clearly shows that‖∇J(w
t
)‖ →0 ast→ ∞. Furthermore, we can
write the following simple inequality:
‖∇J(w
T
)‖≤
√
2L(J(w
0
)−J(w
∗
))
T+ 1
.

3.2  Unconstrained Smooth Convex Minimization107
Solving for
√
2L(J(w
0
)−J(w
∗
))
T+ 1
=
shows thatTisO(1/
2
) as claimed.
If in addition to having a Lipschitz continuous gradient, ifJisσ-strongly
convex,  then  more  can  be  said.  First,  one  can  translate  convergence  in
‖∇J(w
t
)‖to convergence in function values. Towards this end, use (3.17) to
write
J(w
t
)≤J(w
∗
) +
1
2σ
‖∇J(w
t
)‖
2
.
Therefore, it follows that whenever‖∇J(w
t
)‖< we haveJ(w
t
)−J(w
∗
)<

2
/2σ. Furthermore, we can strengthen the rates of convergence.
Theorem 3.13Assume  everything  as  in  Theorem  3.12.  Moreover  assume
thatJisσ-strongly  convex,  and  letc:= 1−
σ
L
.  ThenJ(w
t
)−J(w
∗
)≤
after at most
log((J(w
0
)−J(w
∗
))/)
log(1/c)
(3.47)
iterations.
ProofCombining (3.46) with‖∇J(w
t
)‖
2
≥2σ(J(w
t
)−J(w
∗
)), and using
the definition ofcone can write
c(J(w
t
)−J(w
∗
))≥J(w
t+1
)−J(w
∗
).
Applying the above equation recursively
c
T
(J(w
0
)−J(w
∗
))≥J(w
T
)−J(w
∗
).
Solving for
=c
T
(J(w
0
)−J(w
∗
))
and rearranging yields (3.47).
When applied to practical problems which are not strongly convex gra-
dient descent yields a low accuracy solution within a few iterations. How-
ever, as the iterations progress the method “stalls” and no further increase
in  accuracy  is  obtained  because  of  theO(1/
2
)  rates  of  convergence.  On
the  other  hand,  if  the  function  is  strongly  convex,  then  gradient  descent
converges linearly, that is, inO(log(1/)) iterations. However, the number

1083  Optimization
of  iterations  depends  inversely  on  log(1/c).  If  we  approximate  log(1/c)  =
−log(1−σ/L)≈σ/L, then it shows that convergence depends on the ratio
L/σ. This ratio is called thecondition numberof a problem. If the problem
is well conditioned,i.e.,σ≈Lthen gradient descent converges extremely
fast. In contrast, ifσLthen gradient descent requires many iterations.
This is best illustrated with an example: Consider the quadratic objective
function
J(w) =
1
2
w
>
Aw−bw,(3.48)
whereA∈R
n×n
is a symmetric positive definite matrix, andb∈R
n
is any
arbitrary vector.
Recall that a twice differentiable function isσ-strongly convex and has a
Lipschitz continuous gradient with modulusLif and only if its Hessian sat-
isfiesLI∇
2
J(w)σI(see (3.14) and (3.21)). In the case of the quadratic
function (3.48)∇
2
J(w) =Aand henceσ=λ
min
andL=λ
max
, whereλ
min
(respectivelyλ
max
)  denotes  the  minimum  (respectively  maximum)  eigen-
value ofA. One can thus change the condition number of the problem by
varying  the  eigen-spectrum  of  the  matrixA.  For  instance,  if  we  setAto
then×nidentity matrix, thenλ
max
=λ
min
= 1 and hence the problem is
well conditioned. In this case, gradient descent converges very quickly to the
optimal solution. We illustrate this behavior on a two dimensional quadratic
function in Figure 3.8 (right).
On  the  other  hand,  if  we  chooseAsuch  thatλ
max
λ
min
then  the
problem (3.48) becomes ill-conditioned. In this case gradient descent exhibits
zigzagging and slow convergence as can be seen in Figure 3.8 (left). Because
of  these  shortcomings,  gradient  descent  is  not  widely  used  in  practice.  A
number  of  different  algorithms  we  described  below  can  be  understood  as
explicitly  or  implicitly  changing  the  condition  number  of  the  problem  to
accelerate convergence.
3.2.4  Mirror Descent
One way to motivate gradient descent is to use the following quadratic ap-
proximation of the objective function
Q
t
(w) :=J(w
t
) +〈∇J(w
t
),w−w
t
〉+
1
2
(w−w
t
)
>
(w−w
t
),(3.49)
where,  as  in  the  previous  section,∇J(·)  denotes  the  gradient  ofJ.  Mini-
mizing this quadratic model at every iteration entails taking gradients with

3.2  Unconstrained Smooth Convex Minimization109
Fig. 3.8.  Convergence of gradient descent with exact line search on two quadratic
problems (3.48). The problem on the left is ill-conditioned, whereas the problem
on  the  right  is  well-conditioned.  We  plot  the  contours  of  the  objective  function,
and the steps taken by gradient descent. As can be seen gradient descent converges
fast on the well conditioned problem, while it zigzags and takes many iterations to
converge on the ill-conditioned problem.
respect towand setting it to zero, which gives
w−w
t
:=−∇J(w
t
).(3.50)
Performing a line search along the direction−∇J(w
t
) recovers the familiar
gradient descent update
w
t+1
=w
t
−η
t
∇J(w
t
).(3.51)
The closely related mirror descent method replaces the quadratic penalty
in  (3.49)  by  a  Bregman  divergence  defined  by  some  convex  functionfto
yield
Q
t
(w) :=J(w
t
) +〈∇J(w
t
),w−w
t
〉+ ∆
f
(w,w
t
).(3.52)
Computing the gradient, setting it to zero, and using∇
w
∆
f
(w,w
t
) =∇f(w)−
∇f(w
t
), the minimizer of the above model can be written as
∇f(w)−∇f(w
t
) =−∇J(w
t
).(3.53)
As before, by using a stepsizeη
t
the resulting updates can be written as
w
t+1
=∇f
−1
(∇f(w
t
)−η
t
∇J(w
t
)).(3.54)
It is easy to verify that choosingf(·) =
1
2
‖·‖
2
recovers the usual gradient
descent updates. On the other hand if we choosefto be the un-normalized
entropy (3.30) then∇f(·) = log and therefore (3.54) specializes to
w
t+1
= exp(log(w
t
)−η
t
∇J(w
t
)) =w
t
exp(−η
t
∇J(w
t
)),(3.55)
which is sometimes called the Exponentiated Gradient (EG) update.

1103  Optimization
Theorem 3.14LetJbe a convex function andJ(w
∗
)denote its minimum
value. The mirror descent updates(3.54)with aσ-strongly convex function
fsatisfy
∆
f
(w
∗
,w
1
) +
1
2σ
∑
t
η
2
t
‖∇J(w
t
)‖
2
∑
t
η
t
≥min
t
J(w
t
)−J(w
∗
).
ProofUsing the convexity ofJ(see (3.7)) and (3.54) we can write
J(w
∗
)≥J(w
t
) +〈w
∗
−w
t
,∇J(w
t
)〉
≥J(w
t
)−
1
η
t
〈w
∗
−w
t
,f(w
t+1
)−f(w
t
)〉.
Now applying Lemma 3.11 and rearranging
∆
f
(w
∗
,w
t
)−∆
f
(w
∗
,w
t+1
) + ∆
f
(w
t
,w
t+1
)≥η
t
(J(w
t
)−J(w
∗
)).
Summing overt= 1,...,T
∆
f
(w
∗
,w
1
)−∆
f
(w
∗
,w
T+1
) +
∑
t
∆
f
(w
t
,w
t+1
)≥
∑
t
η
t
(J(w
t
)−J(w
∗
)).
Noting that ∆
f
(w
∗
,w
T+1
)≥0,J(w
t
)−J(w
∗
)≥min
t
J(w
t
)−J(w
∗
), and
rearranging it follows that
∆
f
(w
∗
,w
1
) +
∑
t
∆
f
(w
t
,w
t+1
)
∑
t
η
t
≥min
t
J(w
t
)−J(w
∗
).(3.56)
Using (3.17) and (3.54)
∆
f
(w
t
,w
t+1
)≤
1
2σ
‖∇f(w
t
)−∇f(w
t+1
)‖
2
=
1
2σ
η
2
t
‖∇J(w
t
)‖
2
.(3.57)
The proof is completed by plugging in (3.57) into (3.56).
Corollary 3.15IfJhas  a  Lipschitz  continuous  gradient  with  modulusL,
and the stepsizesη
t
are chosen as
η
t
=
√
2σ∆
f
(w
∗
,w
1
)
L
1
√
t
then(3.58)
min
1≤t≤T
J(w
t
)−J(w
∗
)≤L
√
2∆
f
(w
∗
,w
1
)
σ
1
√
T
.
ProofSince∇Jis Lipschitz continuous
min
1≤t≤T
J(w
t
)−J(w
∗
)≤
∆
f
(w
∗
,w
1
) +
1
2σ
∑
t
η
2
t
L
2
∑
t
η
t
.

3.2  Unconstrained Smooth Convex Minimization111
Plugging in (3.58) and using Problem 3.15
min
1≤t≤T
J(w
t
)−J(w
∗
)≤L
√
∆
f
(w
∗
,w
1
)
2σ
(1 +
∑
t
1
t
)
∑
t
1
√
t
≤L
√
∆
f
(w
∗
,w
1
)
2σ
1
√
T
.
3.2.5  Conjugate Gradient
Let us revisit the problem of minimizing the quadratic objective function
(3.48). Since∇J(w) =Aw−b, at the optimum∇J(w) = 0 (see Lemma 3.6)
and hence
Aw=b.(3.59)
In  fact,  the  Conjugate  Gradient  (CG)  algorithm  was  first  developed  as  a
method to solve the above linear system.
As we already saw, updatingwalong the negative gradient direction may
lead to zigzagging. Therefore CG uses the so-calledconjugate directions.
Definition 3.16 (Conjugate Directions)Non zero vectorsp
t
andp
t
′
are
said  to  be  conjugate  with  respect  to  a  symmetric  positive  definite  matrixA
ifp
>
t
′
Ap
t
= 0ift6=t
′
.
Conjugate  directions{p
0
,...,p
n−1
}are  linearly  independent  and  form  a
basis. To see this, suppose thep
t
’s are not linearly independent. Then there
exists non-zero coefficientsσ
t
such that
∑
t
σ
t
p
t
= 0. Thep
t
’s are conjugate
directions, thereforep
>
t
′
A(
∑
t
σ
t
p
t
) =
∑
t
σ
t
p
>
t
′
Ap
t
=σ
t
′
p
>
t
′
Ap
t
′
= 0 for allt
′
.
SinceAis positive definite this implies thatσ
t
′
= 0 for allt
′
, a contradiction.
As it turns out, the conjugate directions can be generated iteratively as
follows: Starting with anyw
0
∈R
n
definep
0
=−g
0
=b−Aw
0
, and set
α
t
=−
g
>
t
p
t
p
>
t
Ap
t
(3.60a)
w
t+1
=w
t
+α
t
p
t
(3.60b)
g
t+1
=Aw
t+1
−b(3.60c)
β
t+1
=
g
>
t+1
Ap
t
p
>
t
Ap
t
(3.60d)
p
t+1
=−g
t+1
+β
t+1
p
t
(3.60e)

1123  Optimization
The following theorem asserts that thep
t
generated by the above procedure
are indeed conjugate directions.
Theorem 3.17Suppose thet-th iterate generated by the conjugate gradient
method(3.60)is  not  the  solution  of(3.59),  then  the  following  properties
hold:
span{g
0
,g
1
,...,g
t
}= span{g
0
,Ag
0
,...,A
t
g
0
}.(3.61)
span{p
0
,p
1
,...,p
t
}= span{g
0
,Ag
0
,...,A
t
g
0
}.(3.62)
p
>
j
g
t
= 0for allj < t(3.63)
p
>
j
Ap
t
= 0for allj < t.(3.64)
ProofThe proof is by induction. The induction hypothesis holds trivially
att= 0. Assuming that (3.61) to (3.64) hold for somet, we prove that they
continue to hold fort+ 1.
Step 1:We first prove that (3.63) holds. Using (3.60c), (3.60b) and (3.60a)
p
>
j
g
t+1
=p
>
j
(Aw
t+1
−b)
=p
>
j
(Aw
t
+α
t
p
t
−b)
=p
>
j
(
Aw
t
−
g
>
t
p
t
p
>
t
Ap
t
Ap
t
−b
)
=p
>
j
g
t
−
p
>
j
Ap
t
p
>
t
Ap
t
g
>
t
p
t
.
Forj=t, both terms cancel out, while forj < tboth terms vanish due to
the induction hypothesis.
Step 2:Next we prove that (3.61) holds. Using (3.60c) and (3.60b)
g
t+1
=Aw
t+1
−b=Aw
t
+α
t
Ap
t
−b=g
t
+α
t
Ap
t
.
By  our  induction  hypothesis,g
t
∈span{g
0
,Ag
0
,...,A
t
g
0
},  whileAp
t
∈
span{Ag
0
,A
2
g
0
,...,A
t+1
g
0
}. Combining the two we conclude thatg
t+1
∈
span{g
0
,Ag
0
,...,A
t+1
g
0
}. On the other hand, we already showed thatg
t+1
is orthogonal to{p
0
,p
1
,...,p
t
}. Therefore,g
t+1
/∈span{p
0
,p
1
,...,p
t
}. Thus
our induction assumption implies thatg
t+1
/∈span{g
0
,Ag
0
,...,A
t
g
0
}. This
allows us to conclude that span{g
0
,g
1
,...,g
t+1
}= span{g
0
,Ag
0
,...,A
t+1
g
0
}.

3.2  Unconstrained Smooth Convex Minimization113
Step 3We now prove (3.64) holds. Using (3.60e)
p
>
t+1
Ap
j
=−g
>
t+1
Ap
j
+β
t+1
p
>
t
Ap
j
.
By the definition ofβ
t+1
(3.60d) the above expression vanishes forj=t. For
j < t, the first term is zero becauseAp
j
∈span{p
0
,p
1
,...,p
j+1
}, a subspace
orthogonal  tog
t+1
as  already  shown  in  Step  1.  The  induction  hypothesis
guarantees that the second term is zero.
Step 4Clearly, (3.61) and (3.60e) imply (3.62). This concludes the proof.
A  practical  implementation  of  (3.60)  requires  two  more  observations:
First, using (3.60e) and (3.63)
−g
>
t
p
t
=g
>
t
g
t
−β
t
g
>
t
p
t−1
=g
>
t
g
t
.
Therefore (3.60a) simplifies to
α
t
=
g
>
t
g
t
p
>
t
Ap
t
.(3.65)
Second, using (3.60c) and (3.60b)
g
t+1
−g
t
=A(w
t+1
−w
t
) =α
t
Ap
t
.
Butg
t
∈span{p
0
,...,p
t
}, a subspace orthogonal tog
t+1
by (3.63). Therefore
g
>
t+1
Ap
t
=
1
α
t
(g
>
t+1
g
t+1
). Substituting this back into (3.60d) and using (3.65)
yields
β
t+1
=
g
>
t+1
g
t+1
g
>
t
g
t
.(3.66)
We summarize the CG algorithm in Algorithm 3.3. Unlike gradient descent
whose  convergence  rates  for  minimizing  the  quadratic  objective  function
(3.48)  depend  upon  the  condition  number  ofA,  as  the  following  theorem
shows, the CG iterates converge in at mostnsteps.
Theorem 3.18The CG iterates(3.60)converge to the minimizer of(3.48)
after at mostnsteps.
ProofLetwdenote the minimizer of (3.48). Since thep
t
’s form a basis
w−w
0
=σ
0
p
0
+...+σ
n−1
p
n−1
,
for some scalarsσ
t
. Our proof strategy will be to show that the coefficients

1143  Optimization
Algorithm 3.3Conjugate Gradient
1:Input:Initial pointw
0
, residual norm tolerance
2:Sett= 0,g
0
=Aw
0
−b, andp
0
=−g
0
3:while‖Aw
t
−b‖≥do
4:α
t
=
g
>
t
g
t
p
>
t
Ap
t
5:w
t+1
=w
t
+α
t
p
t
6:g
t+1
=g
t
+α
t
Ap
t
7:β
t+1
=
g
>
t+1
g
t+1
g
>
t
g
t
8:p
t+1
=−g
t+1
+β
t+1
p
t
9:t=t+ 1
10:end while
11:Return:w
t
σ
t
coincide withα
t
defined in (3.60a). Towards this end premultiply with
p
>
t
Aand use conjugacy to obtain
σ
t
=
p
>
t
A(w−w
0
)
p
>
t
Ap
t
.(3.67)
On the other hand, following the iterative process (3.60b) fromw
0
untilw
t
yields
w
t
−w
0
=α
0
p
0
+...+α
t−1
p
t−1
.
Again premultiplying withp
>
t
Aand using conjugacy
p
>
t
A(w
t
−w
0
) = 0.(3.68)
Substituting (3.68) into (3.67) produces
σ
t
=
p
>
t
A(w−w
t
)
p
>
t
Ap
t
=−
g
>
t
p
t
p
>
t
Ap
t
,(3.69)
thus showing thatσ
t
=α
t
.
Observe that theg
t+1
computed via (3.60c) is nothing but the gradient of
J(w
t+1
). Furthermore, consider the following one dimensional optimization
problem:
min
α∈R
φ
t
(α) :=J(w
t
+αp
t
).
Differentiatingφ
t
with respect toα
φ
′
t
(α) =p
>
t
(Aw
t
+αAp
t
−b) =p
>
t
(g
t
+αAp
t
).

3.2  Unconstrained Smooth Convex Minimization115
The gradient vanishes if we setα=−
g
>
t
p
t
p
>
t
Ap
t
, which recovers (3.60a). In other
words, every iteration of CG minimizesJ(w) along a conjugate directionp
t
.
Contrast this with gradient descent which minimizesJ(w) along the negative
gradient directiong
t
at every iteration.
It  is  natural  to  ask  if  this  idea  of  generating  conjugate  directions  and
minimizing the objective function along these directions can be applied to
general convex functions. The main difficulty here is that Theorems 3.17 and
3.18 do not hold. In spite of this, extensions of CG are effective even in this
setting. Basically the update rules forg
t
andp
t
remain the same, but the
parametersα
t
andβ
t
are computed differently. Table 3.2 gives an overview
of different extensions. See [NW99, Lue84] for details.
Table 3.2.Non-Quadratic modifications of Conjugate Gradient Descent
Generic MethodCompute HessianK
t
:=∇
2
J(w
t
) and updateα
t
andβ
t
with
α
t
=−
g
>
t
p
t
p
>
t
K
t
p
t
andβ
t
=−
g
>
t+1
K
t
p
t
p
>
t
K
t
p
t
Fletcher-ReevesSetα
t
= argmin
α
J(w
t
+αp
t
) andβ
t
=
g
>
t+1
g
t+1
g
>
t
g
t
.
Polak-Ribi`ereSetα
t
= argmin
α
J(w
t
+αp
t
),y
t
=g
t+1
−g
t
, and
β
t
=
y
>
t
g
t+1
g
>
t
g
t
.
In practice, Polak-Ribi`ere tends to be better than
Fletcher-Reeves.
Hestenes-StiefelSetα
t
= argmin
α
J(w
t
+αp
t
),y
t
=g
t+1
−g
t
, and
β
t
=
y
>
t
g
t+1
y
>
t
p
t
.
3.2.6  Higher Order Methods
Recall the motivation for gradient descent as the minimizer of the quadratic
model
Q
t
(w) :=J(w
t
) +〈∇J(w
t
),w−w
t
〉+
1
2
(w−w
t
)
>
(w−w
t
),
The quadratic penalty in the above equation uniformly penalizes deviation
fromw
t
in  different  dimensions.  When  the  function  is  ill-conditioned  one
would intuitively want to penalize deviations in different directions differ-
ently. One way to achieve this is by using the Hessian, which results in the

1163  Optimization
Algorithm 3.4Newton’s Method
1:Input:Initial pointw
0
, gradient norm tolerance
2:Sett= 0
3:while‖∇J(w
t
)‖> do
4:Computep
t
:=−∇
2
J(w
t
)
−1
∇J(w
t
)
5:Computeη
t
= argmin
η
J(w
t
+ηp
t
)e.g.,via Algorithm 3.1.
6:w
t+1
=w
t
+η
t
p
t
7:t=t+ 1
8:end while
9:Return:w
t
following second order Taylor approximation:
Q
t
(w) :=J(w
t
) +〈∇J(w
t
),w−w
t
〉+
1
2
(w−w
t
)
>
∇
2
J(w
t
)(w−w
t
).
(3.70)
Of course, this requires thatJbe twice differentiable. We will also assume
thatJis strictly convex and hence its Hessian is positive definite and in-
vertible. MinimizingQ
t
by taking gradients with respect towand setting it
zero obtains
w−w
t
:=−∇
2
J(w
t
)
−1
∇J(w
t
),(3.71)
Since we are only minimizing a model of the objective function, we perform
a line search along the descent direction (3.71) to compute the stepsizeη
t
,
which yields the next iterate:
w
t+1
=w
t
−η
t
∇
2
J(w
t
)
−1
∇J(w
t
).(3.72)
Details can be found in Algorithm 3.4.
Supposew
∗
denotes  the  minimum  ofJ(w).  We  say  that  an  algorithm
exhibits quadratic convergence if the sequences of iterates{w
k
}generated
by the algorithm satisfies:
‖w
k+1
−w
∗
‖≤C‖w
k
−w
∗
‖
2
(3.73)
for  some  constantC >0.  We  now  show  that  Newton’s  method  exhibits
quadratic convergence close to the optimum.
Theorem 3.19 (Quadratic convergence of Newton’s Method)Suppose
Jis  twice  differentiable,  strongly  convex,  and  the  Hessian  ofJis  bounded
and  Lipschitz  continuous  with  modulusMin  a  neighborhood  of  the  so-
lutionw
∗
.  Furthermore,  assume  that
∥
∥
∇
2
J(w)
−1
∥
∥
≤N.  The  iterations

3.2  Unconstrained Smooth Convex Minimization117
w
t+1
=w
t
−∇
2
J(w
t
)
−1
∇J(w
t
)converge quadratically tow
∗
, the minimizer
ofJ.
ProofFirst notice that
∇J(w
t
)−∇J(w
∗
) =
∫
1
0
∇
2
J(w
t
+t(w
∗
−w
t
))(w
t
−w
∗
)dt.(3.74)
Next using the fact that∇
2
J(w
t
) is invertible and the gradient vanishes at
the optimum (∇J(w
∗
) = 0), write
w
t+1
−w
∗
=w
t
−w
∗
−∇
2
J(w
t
)
−1
∇J(w
t
)
=∇
2
J(w
t
)
−1
[∇
2
J(w
t
)(w
t
−w
∗
)−(∇J(w
t
)−∇J(w
∗
))].(3.75)
Using (3.75), (3.74), and the Lipschitz continuity of∇
2
J
∥
∥
∇J(w
t
)−∇J(w
∗
)−∇
2
J(w
t
)(w
t
−w
∗
)
∥
∥
=
∥
∥
∥
∥
∫
1
0
[∇
2
J(w
t
+t(w
t
−w
∗
))−∇
2
J(w
t
)](w
t
−w
∗
)dt
∥
∥
∥
∥
≤
∫
1
0
∥
∥
[∇
2
J(w
t
+t(w
t
−w
∗
))−∇
2
J(w
t
)]
∥
∥
‖(w
t
−w
∗
)‖dt
≤‖w
t
−w
∗
‖
2
∫
1
0
Mtdt=
M
2
‖w
t
−w
∗
‖
2
.(3.76)
Finally use (3.75) and (3.76) to conclude that
‖w
t+1
−w
∗
‖≤
M
2
∥
∥
∇
2
J(w
t
)
−1
∥
∥
‖w
t
−w
∗
‖
2
≤
NM
2
‖w
t
−w
∗
‖
2
.
Newton’s  method  as  we  described  it  suffers  from  two  major  problems.
First, it applies only to twice differentiable, strictly convex functions. Sec-
ond,  it  involves  computing  and  inverting  of  then×nHessian  matrix  at
every  iteration,  thus  making  it  computationally  very  expensive.  Although
Newton’s method can be extended to deal with positive semi-definite Hes-
sian matrices, the computational burden often makes it unsuitable for large
scale applications. In such cases one resorts to Quasi-Newton methods.
3.2.6.1  Quasi-Newton Methods
Unlike Newton’s method, which computes the Hessian of the objective func-
tion at every iteration, quasi-Newton methods never compute the Hessian;
they approximate it from past gradients. Since they do not require the ob-
jective function to be twice differentiable, quasi-Newton methods are much

1183  Optimization
6
4
202
4
6
400
200
0
200
400
600
800
1000
1200
Fig. 3.9.  The blue solid line depicts the one dimensional convex functionJ(w) =
w
4
+ 20w
2
+w.  The  green  dotted-dashed  line  represents  the  first  order  Taylor
approximation toJ(w), while the red dashed line represents the second order Taylor
approximation, both evaluated atw= 2.
more  widely  applicable.  They  are  widely  regarded  as  the  workhorses  of
smooth nonlinear optimization due to their combination of computational ef-
ficiency and good asymptotic convergence. The most popular quasi-Newton
algorithm is BFGS, named after its discoverers Broyde, Fletcher, Goldfarb,
and Shanno. In this section we will describe BFGS and its limited memory
counterpart LBFGS.
Suppose we are given a smooth (not necessarily strictly) convex objective
functionJ:R
n
→Rand  a  current  iteratew
t
∈R
n
.  Just  like  Newton’s
method, BFGS forms a local quadratic model of the objective function,J:
Q
t
(w)  :=J(w
t
) +〈∇J(w
t
),w−w
t
〉+
1
2
(w−w
t
)
>
H
t
(w−w
t
).(3.77)
Unlike Newton’s method which uses the Hessian to build its quadratic model
(3.70), BFGS uses the matrixH
t
0, which is a positive-definiteestimate
of the Hessian. A quasi-Newton direction of descent is found by minimizing
Q
t
(w):
w−w
t
=−H
−1
t
∇J(w
t
).(3.78)
The stepsizeη
t
>0 is found by a line search obeying the Wolfe conditions

3.2  Unconstrained Smooth Convex Minimization119
(3.42) and (3.43). The final update is given by
w
t+1
=w
t
−η
t
H
−1
t
∇J(w
t
).(3.79)
Givenw
t+1
we need to update our quadratic model (3.77) to
Q
t+1
(w)  :=J(w
t+1
) +〈∇J(w
t+1
),w−w
t+1
〉+
1
2
(w−w
t+1
)
>
H
t+1
(w−w
t+1
).
(3.80)
When  updating  our  model  it  is  reasonable  to  expect  that  the  gradient  of
Q
t+1
should match the gradient ofJatw
t
andw
t+1
. Clearly,
∇Q
t+1
(w)  =∇J(w
t+1
) +H
t+1
(w−w
t+1
),(3.81)
which implies that∇Q
t+1
(w
t+1
) =∇J(w
t+1
), and hence our second con-
dition is automatically satisfied. In order to satisfy our first condition, we
require
∇Q
t+1
(w
t
)  =∇J(w
t+1
) +H
t+1
(w
t
−w
t+1
) =∇J(w
t
).(3.82)
By rearranging, we obtain the so-calledsecant equation:
H
t+1
s
t
=y
t
,(3.83)
wheres
t
:=w
t+1
−w
t
andy
t
:=∇J(w
t+1
)−∇J(w
t
) denote the most recent
step  along  the  optimization  trajectory  in  parameter  and  gradient  space,
respectively.  SinceH
t+1
is  a  positive  definite  matrix,  pre-multiplying  the
secant equation bys
t
yields thecurvature condition
s
>
t
y
t
>0.(3.84)
If the curvature condition is satisfied, then there are an infinite number
of  matricesH
t+1
which  satisfy  the  secant  equation  (the  secant  equation
representsnlinear equations, but the symmetric matrixH
t+1
hasn(n+ 1)/2
degrees of freedom). To resolve this issue we choose the closest matrix to
H
t
which satisfies the secant equation. The key insight of the BFGS comes
from the observation that the descent direction computation (3.78) involves
the inverse matrixB
t
:=H
−1
t
. Therefore, we choose a matrixB
t+1
:=H
−1
t+1
such that it is close toB
t
and also satisfies the secant equation:
min
B
‖B−B
t
‖(3.85)
s. t.B=B
>
andBy
t
=s
t
.(3.86)
If the matrix norm‖·‖is appropriately chosen [NW99], then it can be shown
that
B
t+1
= (1−ρ
t
s
t
y
>
t
)B
t
(1−ρ
t
y
t
s
>
t
) +ρ
t
s
t
s
>
t
,(3.87)

1203  Optimization
Algorithm 3.5LBFGS
1:Input:Initial pointw
0
, gradient norm tolerance >0
2:Sett= 0 andB
0
=I
3:while‖∇J(w
t
)‖> do
4:p
t
=−B
t
∇J(w
t
)
5:Findη
t
that obeys (3.42) and (3.43)
6:s
t
=η
t
p
t
7:w
t+1
=w
t
+s
t
8:y
t
:=∇J(w
t+1
)−∇J(w
t
)
9:ift= 0 :B
t
:=
s
>
t
y
t
y
>
t
y
t
I
10:ρ
t
= (s
>
t
y
t
)
−1
11:B
t+1
= (I−ρ
t
s
t
y
>
t
)B
t
(I−ρ
t
y
t
s
>
t
) +ρ
t
s
t
s
>
t
12:t=t+ 1
13:end while
14:Return:w
t
whereρ
t
:=  (y
>
t
s
t
)
−1
.  In  other  words,  the  matrixB
t
is  modified  via  an
incremental rank-two update, which is very efficient to compute, to obtain
B
t+1
.
There exists an interesting connection between the BFGS update (3.87)
and the Hestenes-Stiefel variant of Conjugate gradient. To see this assume
that an exact line search was used to computew
t+1
, and therefores
>
t
∇J(w
t+1
) =
0. Furthermore, assume thatB
t
=1, and use (3.87) to write
p
t+1
=−B
t+1
∇J(w
t+1
) =−∇J(w
t+1
) +
y
>
t
∇J(w
t+1
)
y
>
t
s
t
s
t
,(3.88)
which recovers the Hestenes-Stiefel update (see (3.60e) and Table 3.2).
Limited-memory BFGS (LBFGS) is a variant of BFGS designed for solv-
ing large-scale optimization problems where theO(d
2
) cost of storing and
updatingB
t
would  be  prohibitively  expensive.  LBFGS  approximates  the
quasi-Newton direction (3.78) directly from the lastmpairs ofs
t
andy
t
via
a matrix-free approach. This reduces the cost toO(md) space and time per
iteration, withmfreely chosen. Details can be found in Algorithm 3.5.
3.2.6.2  Spectral Gradient Methods
Although spectral gradient methods do not use the Hessian explicitly, they
are motivated by arguments very reminiscent of the Quasi-Newton methods.
Recall the update rule (3.79) and secant equation (3.83). Suppose we want

3.2  Unconstrained Smooth Convex Minimization121
a very simple matrix which approximates the Hessian. Specifically, we want
H
t+1
=α
t+1
I(3.89)
whereα
t+1
is a scalar andIdenotes the identity matrix. Then the secant
equation (3.83) becomes
α
t+1
s
t
=y
t
.(3.90)
In general, the above equation cannot be solved. Therefore we use theα
t+1
which minimizes‖α
t+1
s
t
−y
t
‖
2
which yields the Barzilai-Borwein (BB) step-
size
α
t+1
=
s
>
t
y
t
s
>
t
s
t
.(3.91)
As it turns out,α
t+1
lies between the minimum and maximum eigenvalue of
the average Hessian in the directions
t
, hence the name Spectral Gradient
method. The parameter update (3.79) is now given by
w
t+1
=w
t
−
1
α
t
∇J(w
t
).(3.92)
A practical implementation uses safeguards to ensure that the stepsizeα
t+1
is neither too small nor too large. Given 0< α
min
< α
max
<∞we compute
α
t+1
= min
(
α
max
,max
(
α
min
,
s
>
t
y
t
s
>
t
s
t
))
.(3.93)
One  of  the  peculiar  features  of  spectral  gradient  methods  is  their  use
of  a  non-monotone  line  search.  In  all  the  algorithms  we  have  seen  so  far,
the stepsize is chosen such that the objective functionJdecreases at every
iteration. In contrast, non-monotone line searches employ a parameterM≥
1 and ensure that the objective function decreases in everyMiterations. Of
course, settingM= 1 results in the usual monotone line search. Details can
be found in Algorithm 3.6.
3.2.7  Bundle Methods
The methods we discussed above are applicable for minimizing smooth, con-
vex objective functions. Some regularized risk minimization problems involve
a  non-smooth  objective  function.  In  such  cases,  one  needs  to  use  bundle
methods. In order to lay the ground for bundle methods we first describe
their precursor the cutting plane method [Kel60]. Cutting plane method is
based on a simple observation: A convex function is bounded from below by

1223  Optimization
Algorithm 3.6Spectral Gradient Method
1:Input:w
0
,M≥1,α
max
> α
min
>0,γ∈(0,1),  1> σ
2
> σ
1
>0,
α
0
∈[α
min
,α
max
], and >0
2:Initialize:t= 0
3:while‖∇J(w
t
)‖> do
4:λ= 1
5:while TRUE do
6:d
t
=−
1
α
t
∇J(w
t
)
7:w
+
=w
t
+λd
t
8:δ=〈d
t
,∇J(w
t
)〉
9:ifJ(w
+
)≤min
0≤j≤min(t,M−1)
J(x
t−j
) +γλδthen
10:w
t+1
=w
+
11:s
t
=w
t+1
−w
t
12:y
t
=∇J(w
t+1
)−∇J(w
t
)
13:break
14:else
15:λ
tmp
=−
1
2
λ
2
δ/(J(w
+
)−J(w
t
)−λδ)
16:ifλ
tmp
> σ
1
andλ
tmp
< σ
2
λthen
17:λ=λ
tmp
18:else
19:λ=λ/2
20:end if
21:end if
22:end while
23:α
t+1
= min(α
max
,max(α
min
,
s
>
t
y
t
s
>
t
s
t
))
24:t=t+ 1
25:end while
26:Return:w
t
its linearization (i.e.,first order Taylor approximation). See Figures 3.4 and
3.5 for geometric intuition, and recall (3.7) and (3.13):
J(w)≥J(w
′
) +
〈
w−w
′
,s
′
〉
∀wands
′
∈∂J(w
′
).(3.94)
Given subgradientss
1
,s
2
,...,s
t
evaluated at locationsw
0
,w
1
,...,w
t−1
, we
can construct a tighter (piecewise linear) lower bound forJas follows (also
see Figure 3.10):
J(w)≥J
CP
t
(w) :=  max
1≤i≤t
{J(w
i−1
) +〈w−w
i−1
,s
i
〉}.(3.95)

3.2  Unconstrained Smooth Convex Minimization123
Given iterates{w
i
}
t−1
i=0
, the cutting plane method minimizesJ
CP
t
to obtain
the next iteratew
t
:
w
t
:= argmin
w
J
CP
t
(w).(3.96)
This iteratively refines the piecewise linear lower boundJ
CP
and allows us
to get close to the minimum ofJ(see Figure 3.10 for an illustration).
Ifw
∗
denotes the minimizer ofJ, then clearly eachJ(w
i
)≥J(w
∗
) and
hence  min
0≤i≤t
J(w
i
)≥J(w
∗
).  On  the  other  hand,  sinceJ≥J
CP
t
it  fol-
lows thatJ(w
∗
)≥J
CP
t
(w
t
). In other words,J(w
∗
) is sandwiched between
min
0≤i≤t
J(w
i
) andJ
CP
t
(w
t
) (see Figure 3.11 for an illustration). The cutting
plane method monitors the monotonically decreasing quantity

t
:=  min
0≤i≤t
J(w
i
)−J
CP
t
(w
t
),(3.97)
and terminates whenever
t
falls below a predefined threshold. This ensures
that the solutionJ(w
t
) isoptimum, that is,J(w
t
)≤J(w
∗
) +.
Fig. 3.10.  A convex function (blue solid curve) is bounded from below by its lin-
earizations (dashed lines). The gray area indicates the piecewise linear lower bound
obtained by using the linearizations. We depict a few iterations of the cutting plane
method. At each iteration the piecewise linear lower bound is minimized and a new
linearization is added at the minimizer (red rectangle). As can be seen, adding more
linearizations improves the lower bound.
Although cutting plane method was shown to be convergent [Kel60], it is

1243  Optimization
Fig. 3.11.  A convex function (blue solid curve) with four linearizations evaluated at
four different locations (magenta circles). The approximation gap
3
at the end of
fourth iteration is indicated by the height of the cyan horizontal bandi.e.,difference
between lowest value ofJ(w) evaluated so far and the minimum ofJ
CP
4
(w) (red
diamond).
well known (seee.g.,[LNN95, Bel05]) that it can be very slow when new
iterates  move  too  far  away  from  the  previous  ones  (i.e.,causing  unstable
“zig-zag”  behavior  in  the  iterates).  In  fact,  in  the  worst  case  the  cutting
plane method might require exponentially many steps to converge to an
optimum solution.
Bundle methods stabilize CPM by augmenting the piecewise linear lower
(e.g.,J
CP
t
(w) in (3.95)) with a prox-function (i.e.,proximity control func-
tion)  which  prevents  overly  large  steps  in  the  iterates  [Kiw90].  Roughly
speaking,  there  are  3  popular  types  of  bundle  methods,  namely,proximal
[Kiw90],trust  region[SZ92], andlevel  set[LNN95]. All three versions use
1
2
‖·‖
2
as their prox-function, but differ in the way they compute the new
iterate:
proximal:w
t
:= argmin
w
{
ζ
t
2
‖w−ˆw
t−1
‖
2
+J
CP
t
(w)},(3.98)
trust region:w
t
:= argmin
w
{J
CP
t
(w)|
1
2
‖w−ˆw
t−1
‖
2
≤κ
t
},(3.99)
level set:w
t
:= argmin
w
{
1
2
‖w−ˆw
t−1
‖
2
|J
CP
t
(w)≤τ
t
},(3.100)
where  ˆw
t−1
is the current prox-center, andζ
t
,κ
t
,andτ
t
are positive trade-
off  parameters  of  the  stabilization.  Although  (3.98)  can  be  shown  to  be
equivalent to (3.99) for appropriately chosenζ
t
andκ
t
, tuningζ
t
is rather
difficult while a trust region approach can be used for automatically tuning

3.3  Constrained Optimization125
κ
t
. Consequently the trust region algorithm BT of [SZ92] is widely used in
practice.
3.3  Constrained Optimization
So  far  our  focus  was  on  unconstrained  optimization  problems.  Many  ma-
chine learning problems involve constraints, and can often be written in the
following canonical form:
min
w
J(w)(3.101a)
s. t.c
i
(w)≤0 fori∈I(3.101b)
e
i
(w) = 0 fori∈E(3.101c)
where bothc
i
ande
i
are convex functions. We say thatwis feasible if and
only if it satisfies the constraints, that is,c
i
(w)≤0 fori∈Iande
i
(w) = 0
fori∈E.
Recall thatwis the minimizer of an unconstrained problem if and only if
‖∇J(w)‖= 0 (see Lemma 3.6). Unfortunately, when constraints are present
one cannot use this simple characterization of the solution. For instance, the
wat which‖∇J(w)‖= 0 may not be a feasible point. To illustrate, consider
the following simple minimization problem (see Figure 3.12):
min
w
1
2
w
2
(3.102a)
s. t.  1≤w≤2.(3.102b)
Clearly,
1
2
w
2
is minimized atw= 0, but because of the presence of the con-
straints, the minimum of  (3.102) is attained atw= 1 where∇J(w) =wis
equal to 1. Therefore, we need other ways to detect convergence. In Section
3.3.1 we discuss some general purpose algorithms based on the concept of or-
thogonal projection. In Section 3.3.2 we will discuss Lagrange duality, which
can be used to further characterize the solutions of constrained optimization
problems.
3.3.1  Projection Based Methods
Suppose we are interested in minimizing a smooth convex function of the
following form:
min
w∈Ω
J(w),(3.103)

1263  Optimization
6
4
202
4
6
w
0
2
4
6
8
10
12
14
J(w)
Fig. 3.12.  The unconstrained minimum of the quadratic function
1
2
w
2
is attained
atw= 0 (red circle). But, if we enforce the constraints 1≤w≤2 (illustrated by
the shaded area) then the minimizer is attained atw= 1 (green diamond).
where Ω is a convex feasible region. For instance, Ω may be described by
convex functionsc
i
ande
i
as in (3.101). The algorithms we describe in this
section are applicable when Ω is a relatively simple set onto which we can
compute an orthogonal projection. Given a pointw
′
and a feasible region
Ω, the orthogonal projectionP
Ω
(w
′
) ofw
′
on Ω is defined as
P
Ω
(w
′
) := argmin
w∈Ω
∥
∥
w
′
−w
∥
∥
2
.(3.104)
Geometrically speaking,P
Ω
(w
′
) is the closest point tow
′
in Ω. Of course, if
w
′
∈Ω thenP
Ω
(w
′
) =w
′
.
We are interested in finding an approximate solution of  (3.103), that is,
aw∈Ω such that
J(w)−min
w∈Ω
J(w) =J(w)−J
∗
≤,(3.105)
for some pre-defined tolerance >0. Of course,J
∗
is unknown and hence the
gapJ(w)−J
∗
cannot be computed in practice. Furthermore, as we showed
in  Section  3.3,  for  constrained  optimization  problems‖∇J(w)‖does  not
vanish at the optimal solution. Therefore, we will use the following stopping

3.3  Constrained Optimization127
Algorithm 3.7Basic Projection Based Method
1:Input:Initial  pointw
0
∈Ω,  and  projected  gradient  norm  tolerance
 >0
2:Initialize:t= 0
3:while‖P
Ω
(w
t
−∇J(w
t
))−w
t
‖> do
4:Find direction of descentd
t
5:w
t+1
=P
Ω
(w
t
+η
t
d
t
)
6:t=t+ 1
7:end while
8:Return:w
t
criterion in our algorithms
‖P
Ω
(w
t
−∇J(w
t
))−w
t
‖≤.(3.106)
The  intuition  here  is  as  follows:  Ifw
t
− ∇J(w
t
)∈Ω  thenP
Ω
(w
t
−
∇J(w
t
)) =w
t
if, and only if,∇J(w
t
) = 0, that is,w
t
is the global minimizer
ofJ(w). On the other hand, ifw
t
−∇J(w
t
)/∈Ω butP
Ω
(w
t
−∇J(w
t
)) =w
t
,
then  the  constraints  are  preventing  us  from  making  any  further  progress
along the descent direction−∇J(w
t
) and hence we should stop.
The  basic  projection  based  method  is  described  in  Algorithm  3.7.  Any
unconstrained optimization algorithm can be used to generate the direction
of  descentd
t
.  A  line  search  is  used  to  find  the  stepsizeη
t
.  The  updated
parameterw
t
−η
t
d
t
is projected onto Ω to obtainw
t+1
. Ifd
t
is chosen to
be the negative gradient direction−∇J(w
t
), then the resulting algorithm
is  called  the  projected  gradient  method.  One  can  show  that  the  rates  of
convergence  of  gradient  descent  with  various  line  search  schemes  is  also
preserved by projected gradient descent.
3.3.2  Lagrange Duality
Lagrange  duality  plays  a  central  role  in  constrained  convex  optimization.
The  basic  idea  here  is  to  augment  the  objective  function  (3.101)  with  a
weighted sum of the constraint functions by defining the Lagrangian:
L(w,α,β) =J(w) +
∑
i∈I
α
i
c
i
(w) +
∑
i∈E
β
i
e
i
(w)(3.107)
forα
i
≥0 andβ
i
∈R. In the sequel, we will refer toα(respectivelyβ) as the
Lagrange multipliers associated with the inequality (respectively equality)
constraints. Furthermore, we will callαandβdual feasible if and only if

1283  Optimization
α
i
≥0  andβ
i
∈R.  The  Lagrangian  satisfies  the  following  fundamental
property, which makes it extremely useful for constrained optimization.
Theorem 3.20The Lagrangian(3.107)of(3.101)satisfies
max
α≥0,β
L(w,α,β) =
{
J(w)ifwis feasible
∞otherwise.
In particular, ifJ
∗
denotes the optimal value of(3.101), then
J
∗
= min
w
max
α≥0,β
L(w,α,β).
ProofFirst  assume  thatwis  feasible,  that  is,c
i
(w)≤0  fori∈Iand
e
i
(w) = 0 fori∈E. Sinceα
i
≥0 we have
∑
i∈I
α
i
c
i
(w) +
∑
i∈E
β
i
e
i
(w)≤0,(3.108)
with equality being attained by settingα
i
= 0 wheneverc
i
(w)<0. Conse-
quently,
max
α≥0,β
L(w,α,β) =  max
α≥0,β
J(w) +
∑
i∈I
α
i
c
i
(w) +
∑
i∈E
β
i
e
i
(w) =J(w)
wheneverwis feasible. On the other hand, ifwis not feasible then either
c
i
′
(w)>0 ore
i
′
(w)6= 0 for somei
′
. In the first case simply letα
i
′
→∞to
see that max
α≥0,β
L(w,α,β)→ ∞. Similarly, whene
i
′
(w)6= 0 letβ
i
′
→ ∞
ife
i
′
(w)>0 orβ
i
′
→−∞ife
i
′
(w)<0 to arrive at the same conclusion.
If define the Lagrange dual function
D(α,β) = min
w
L(w,α,β),(3.109)
forα≥0 andβ, then one can prove the following property, which is often
called asweak duality.
Theorem 3.21 (Weak Duality)The Lagrange dual function(3.109)sat-
isfies
D(α,β)≤J(w)
for all feasiblewandα≥0andβ. In particular
D
∗
:=  max
α≥0,β
min
w
L(w,α,β)≤min
w
max
α≥0,β
L(w,α,β) =J
∗
.(3.110)

3.3  Constrained Optimization129
ProofAs before, observe that wheneverwis feasible
∑
i∈I
α
i
c
i
(w) +
∑
i∈E
β
i
e
i
(w)≤0.
Therefore
D(α,β) = min
w
L(w,α,β) = min
w
J(w) +
∑
i∈I
α
i
c
i
(w) +
∑
i∈E
β
i
e
i
(w)≤J(w)
for all feasiblewandα≥0 andβ. In particular, one can choosewto be
the minimizer of  (3.101) andα≥0 andβto be maximizers ofD(α,β) to
obtain (3.110).
Weak duality holds for any arbitrary function, not-necessarily convex. When
the objective function and constraints are convex, and certain technical con-
ditions, also known as Slater’s conditions hold, then we can say more.
Theorem 3.22 (Strong Duality)Supposed  the  objective  functionfand
constraintsc
i
fori∈Iande
i
fori∈Ein(3.101)are  convex  and  the
following constraint qualification holds:
There exists awsuch thatc
i
(w)<0for alli∈I.
Then the Lagrange dual function(3.109)satisfies
D
∗
:=  max
α≥0,β
min
w
L(w,α,β) = min
w
max
α≥0,β
L(w,α,β) =J
∗
.(3.111)
The  proof  of  the  above  theorem  is  quite  technical  and  can  be  found  in
any standard reference (e.g.,[BV04]). Therefore we will omit the proof and
proceed to discuss various implications of strong duality. First note that
min
w
max
α≥0,β
L(w,α,β) =  max
α≥0,β
min
w
L(w,α,β).(3.112)
In other words, one can switch the order of minimization overwwith max-
imization overαandβ. This is called thesaddle  point  propertyof convex
functions.
Suppose strong duality holds. Given anyα≥0 andβsuch thatD(α,β)>
−∞and a feasiblewwe can immediately write theduality gap
J(w)−J
∗
=J(w)−D
∗
≤J(w)−D(α,β),
whereJ
∗
andD
∗
were defined in (3.111). Below we show that ifw
∗
is primal
optimal  and  (α
∗
,β
∗
)  are  dual  optimal  thenJ(w
∗
)−D(α
∗
,β
∗
)  =  0.  This
provides a non-heuristic stopping criterion for constrained optimization: stop
whenJ(w)−D(α,β)≤, whereis a pre-specified tolerance.

1303  Optimization
Suppose  the  primal  and  dual  optimal  values  are  attained  atw
∗
and
(α
∗
,β
∗
) respectively, and consider the following line of argument:
J(w
∗
) =D(α
∗
,β
∗
)(3.113a)
= min
w
J(w) +
∑
i∈I
α
∗
i
c
i
(w) +
∑
i∈E
β
∗
i
e
j
(w)(3.113b)
≤J(w
∗
) +
∑
i∈I
α
∗
i
c
i
(w
∗
) +
∑
i∈E
β
∗
i
e
i
(w
∗
)(3.113c)
≤J(w
∗
).(3.113d)
To write (3.113a) we used strong duality, while (3.113c) obtains by setting
w=w
∗
in (3.113c). Finally, to obtain (3.113d) we used the fact thatw
∗
is
feasible and hence (3.108) holds. Since (3.113) holds with equality, one can
conclude that the followingcomplementary slackness condition:
∑
i∈I
α
∗
i
c
i
(w
∗
) +
∑
i∈E
β
∗
i
e
i
(w
∗
) = 0.
In other words,α
∗
i
c
i
(w
∗
) = 0 or equivalentlyα
∗
i
= 0 wheneverc
i
(w)<0.
Furthermore,  sincew
∗
minimizesL(w,α
∗
,β
∗
)  overw,  it  follows  that  its
gradient must vanish atw
∗
, that is,
∇J(w
∗
) +
∑
i∈I
α
∗
i
∇c
i
(w
∗
) +
∑
i∈E
β
∗
i
∇e
i
(w
∗
) = 0.
Putting everything together, we obtain
c
i
(w
∗
)≤0∀i∈I(3.114a)
e
j
(w
∗
) = 0∀i∈E(3.114b)
α
∗
i
≥0(3.114c)
α
∗
i
c
i
(w
∗
) = 0(3.114d)
∇J(w
∗
) +
∑
i∈I
α
∗
i
∇c
i
(w
∗
) +
∑
i∈E
β
∗
i
∇e
i
(w
∗
) = 0.(3.114e)
The above conditions are called the KKT conditions. If the primal problem is
convex, then the KKT conditions are both necessary and sufficient. In other
words, if  ˆwand ( ˆα,
ˆ
β) satisfy (3.114) then  ˆwand ( ˆα,
ˆ
β) are primal and dual
optimal with zero duality gap. To see this note that the first two conditions
show that  ˆwis feasible. Sinceα
i
≥0,L(w,α,β) is convex inw. Finally the
last  condition  states  that  ˆwminimizesL(w,ˆα,
ˆ
β).  Since  ˆα
i
c
i
( ˆw)  =  0  and

3.3  Constrained Optimization131
e
j
( ˆw) = 0, we have
D( ˆα,
ˆ
β) = min
w
L(w,ˆα,
ˆ
β)
=J( ˆw) +
n
∑
i=1
ˆα
i
c
i
( ˆw) +
m
∑
j=1
ˆ
β
j
e
j
( ˆw)
=J( ˆw).
3.3.3  Linear and Quadratic Programs
So far we discussed general constrained optimization problems. Many ma-
chine learning problems have special structure which can be exploited fur-
ther. We discuss the implication of duality for two such problems.
3.3.3.1  Linear Programming
An optimization problem with a linear objective function and (both equality
and  inequality)  linear  constraints  is  said  to  be  a  linear  program  (LP).  A
canonical linear program is of the following form:
min
w
c
>
w(3.115a)
s. t.Aw=b,w≥0.(3.115b)
Herewandcarendimensional vectors, whilebis amdimensional vector,
andAis am×nmatrix withm < n.
Suppose we are given a LP of the form:
min
w
c
>
w(3.116a)
s. t.Aw≥b,(3.116b)
we can transform it into a canonical LP by introducing non-negative slack
variables
min
w,ξ
c
>
w(3.117a)
s. t.Aw−ξ=b,ξ≥0.(3.117b)
Next,  we  splitwinto  its  positive  and  negative  partsw
+
andw
−
respec-
tively by settingw
+
i
= max(0,w
i
) andw
−
i
= max(0,−w
i
). Using these new

1323  Optimization
variables we rewrite (3.117) as
min
w
+
,w
−
, ξ


c
−c
0


>


w
+
w
−
ξ


(3.118a)
s. t.
[
A−A−I
]


w
+
w
−
ξ


=b,


w
+
w
−
ξ


≥0,(3.118b)
thus yielding a canonical LP (3.115) in the variablesw
+
,w
−
andξ.
By introducing non-negative Lagrange multipliersαandβone can write
the Lagrangian of (3.115) as
L(w,β,s) =c
>
w+β
>
(Aw−b)−α
>
w.(3.119)
Taking gradients with respect to the primal and dual variables and setting
them to zero obtains
A
>
β−α=c(3.120a)
Aw=b(3.120b)
α
>
w= 0(3.120c)
w≥0(3.120d)
α≥0.(3.120e)
Condition (3.120c) can be simplified by noting that bothwandαare con-
strained to be non-negative, thereforeα
>
w= 0 if, and only if,α
i
w
i
= 0 for
i= 1,...,n.
Using (3.120a), (3.120c), and (3.120b) we can write
c
>
w= (A
>
β−α)
>
w=β
>
Aw=β
>
b.
Substituting this into (3.115) and eliminating the primal variablewyields
the following dual LP
max
α,β
b
>
β(3.121a)
s.t.A
>
β−α=c,α≥0.(3.121b)
As  before,  we  letβ
+
=  max(β,0)  andβ
−
=  max(0,−β)  and  convert  the

3.3  Constrained Optimization133
above LP into the following canonical LP
max
α,β
+
,β
−


b
−b
0


>


β
+
β
−
α


(3.122a)
s.t.
[
A
>
−A
>
−I
]


β
+
β
−
α


=c,


β
+
β
−
α


≥0.(3.122b)
It can be easily verified that the primal-dual problem is symmetric; by taking
the dual of the dual we recover the primal (Problem 3.17). One important
thing  to  note  however  is  that  the  primal  (3.115)  involvesnvariables  and
n+mconstraints,  while  the  dual  (3.122)  involves  2m+nvariables  and
4m+ 2nconstraints.
3.3.3.2  Quadratic Programming
An optimization problem with a convex quadratic objective function and lin-
ear constraints is said to be a convex quadratic program (QP). The canonical
convex QP can be written as follows:
min
w
1
2
w
>
Gx+w
>
d(3.123a)
s.t.a
>
i
w=b
i
fori∈E(3.123b)
a
>
i
w≤b
i
fori∈I(3.123c)
HereG0 is an×npositive semi-definite matrix,EandIare finite set of
indices, whiledanda
i
arendimensional vectors, andb
i
are scalars.
As a warm up let us consider the arguably simpler equality constrained
quadratic programs. In this case, we can stack thea
i
into a matrixAand
theb
i
into a vectorbto write
min
w
1
2
w
>
Gw+w
>
d(3.124a)
s.t.Aw=b(3.124b)
By introducing non-negative Lagrange multipliersβthe Lagrangian of the
above optimization problem can be written as
L(w,β) =
1
2
w
>
Gw+w
>
d+β(Aw−b).(3.125)
To find the saddle point of the Lagrangian we take gradients with respect

1343  Optimization
towandβand set them to zero. This obtains
Gw+d+A
>
β= 0
Aw=b.
Putting these two conditions together yields the following linear system of
equations
[
G A
>
A0
][
w
β
]
=
[
−d
b
]
.(3.126)
The matrix in the above equation is called the KKT matrix, and we can use
it to characterize the conditions under which (3.124) has a unique solution.
Theorem 3.23LetZbe an×(n−m)matrix whose columns form a basis
for  the  null  space  ofA,  that  is,AZ=  0.  IfAhas  full  row  rank,  and  the
reduced-Hessian matrixZ
>
GZis positive definite, then there exists a unique
pair(w
∗
,β
∗
)which solves(3.126). Furthermore,w
∗
also minimizes(3.124).
ProofNote  that  a  unique  (w
∗
,β
∗
)  exists  whenever  the  KKT  matrix  is
non-singular. Suppose this is not the case, then there exist non-zero vectors
aandbsuch that
[
G A
>
A0
][
a
b
]
= 0.
SinceAa= 0 this implies thatalies in the null space ofAand hence there
exists ausuch thata=Zu. Therefore
[
Zu0
]
[
G A
>
A0
][
Zu
0
]
=u
>
Z
>
GZu= 0.
Positive definiteness ofZ
>
GZimplies thatu= 0 and hencea= 0. On the
other  hand,  the  full  row  rank  ofAandA
>
b=  0  implies  thatb=  0.  In
summary, bothaandbare zero, a contradiction.
Letw6=w
∗
be any other feasible point and ∆w=w
∗
−w. SinceAw
∗
=
Aw=bwe have thatA∆w= 0. Hence, there exists a non-zerousuch that
∆w=Zu. The objective functionJ(w) can be written as
J(w) =
1
2
(w
∗
−∆w)
>
G(w
∗
−∆w) + (w
∗
−∆w)
>
d
=J(w
∗
) +
1
2
∆w
>
G∆w−(Gw
∗
+d)
>
∆w.
First note that
1
2
∆w
>
G∆w=
1
2
u
>
Z
>
GZu >0 by positive definiteness of
the reduced Hessian. Second, sincew
∗
solves (3.126) it follows that (Gw
∗
+

3.4  Stochastic Optimization135
d)
>
∆w=β
>
A∆w= 0. Together these two observations imply thatJ(w)>
J(w
∗
).
If the technical conditions of the above theorem are met, then solving the
equality constrained QP (3.124) is equivalent to solving the linear system
(3.126).  See  [NW99]  for  a  extensive  discussion  of  algorithms  that  can  be
used for this task.
Next we turn our attention to the general QP (3.123) which also contains
inequality constraints. The Lagrangian in this case can be written as
L(w,β) =
1
2
w
>
Gw+w
>
d+
∑
i∈I
α
i
(a
>
i
w−b
i
) +
∑
i∈E
β
i
(a
>
i
w−b
i
).(3.127)
Letw
∗
denote the minimizer of (3.123). If we define the active setA(w
∗
) as
A(w
∗
) =
{
is.t.i∈Ianda
>
i
w
∗
=b
i
}
,
then the KKT conditions (3.114) for this problem can be written as
a
>
i
w−b
i
<0∀i∈I\A(w
∗
)(3.128a)
a
>
i
w−b
i
= 0∀i∈E∪A(w
∗
)(3.128b)
α
∗
i
≥0∀i∈A(w
∗
)(3.128c)
Gw
∗
+d+
∑
i∈A(w
∗
)
α
∗
i
a
i
+
∑
i∈E
β
i
a
i
= 0.(3.128d)
Conceptually the main difficulty in solving (3.123) is in identifying the active
setA(w
∗
). This is becauseα
∗
i
= 0 for alli∈I\A(w
∗
). Most algorithms
for solving (3.123) can be viewed as different ways to identify the active set.
See [NW99] for a detailed discussion.
3.4  Stochastic Optimization
Recall that regularized risk minimization involves a data-driven optimization
problem in which the objective function involves the summation of loss terms
over a set of data to be modeled:
min
f
J(f) :=λΩ(f) +
1
m
m
∑
i=1
l(f(x
i
),y
i
).
Classical optimization techniques must compute this sum in its entirety for
each evaluation of the objective, respectively its gradient. As available data
sets grow ever larger, such “batch” optimizers therefore become increasingly
inefficient. They are also ill-suited for the incremental setting, where partial
data must be modeled as it arrives.

1363  Optimization
Stochastic gradient-based methods, by contrast, work with gradient esti-
mates obtained from small subsamples (mini-batches) of training data. This
can  greatly  reduce  computational  requirements:  on  large,  redundant  data
sets, simple stochastic gradient descent routinely outperforms sophisticated
second-order batch methods by orders of magnitude.
The key idea here is thatJ(w) is replaced by an instantaneous estimate
J
t
which is computed from a mini-batch of sizekcomprising of a subset of
points (x
t
i
,y
t
i
) withi= 1,...,kdrawn from the dataset:
J
t
(w) =λΩ(w) +
1
k
k
∑
i=1
l(w,x
t
i
,y
t
i
).(3.129)
Settingk=  1  obtains  an  algorithm  which  processes  data  points  as  they
arrive.
3.4.1  Stochastic Gradient Descent
Perhaps the simplest stochastic optimization algorithm is Stochastic Gradi-
ent Descent (SGD). The parameter update of SGD takes the form:
w
t+1
=w
t
−η
t
∇J
t
(w
t
).(3.130)
IfJ
t
is not differentiable, then one can choose an arbitrary subgradient from
∂J
t
(w
t
) to compute the update. It has been shown that SGD asymptotically
converges to the true minimizer ofJ(w) if the stepsizeη
t
decays asO(1/
√
t).
For instance, one could set
η
t
=
√
τ
τ+t
,(3.131)
whereτ >0 is a tuning parameter. See Algorithm 3.8 for details.
3.4.1.1  Practical Considerations
One simple yet effective rule of thumb to tuneτis to select a small subset
of data, try various values ofτon this subset, and choose theτthat most
reduces the objective function.
In some cases lettingη
t
to decay asO(1/t) has been found to be more
effective:
η
t
=
τ
τ+t
.(3.132)
The free parameterτ >0 can be tuned as described above. If Ω(w) isσ-
strongly convex, then dividing the stepsizeη
t
byσλyields good practical
performance.

3.5  Nonconvex Optimization137
Algorithm 3.8Stochastic Gradient Descent
1:Input:Maximum iterationsT, batch sizek, andτ
2:Sett= 0 andw
0
= 0
3:whilet < Tdo
4:Choose a subset ofkdata points (x
t
i
,y
t
i
) and compute∇J
t
(w
t
)
5:Compute stepsizeη
t
=
√
τ
τ+t
6:w
t+1
=w
t
−η
t
∇J
t
(w
t
)
7:t=t+ 1
8:end while
9:Return:w
T
3.5  Nonconvex Optimization
Our focus in the previous sections was on convex objective functions. Some-
times non-convex objective functions also arise in machine learning applica-
tions. These problems are significantly harder and tools for minimizing such
objective functions are not as well developed. We briefly describe one algo-
rithm which can be applied whenever we can write the objective function as
a difference of two convex functions.
3.5.1  Concave-Convex Procedure
Any function with a bounded Hessian can be decomposed into the difference
of two (non-unique) convex functions, that is, one can write
J(w) =f(w)−g(w),(3.133)
wherefandgare  convex  functions.  Clearly,Jis  not  convex,  but  there
exists a reasonably simple algorithm namely the Concave-Convex Procedure
(CCP)  for  finding  a  local  minima  ofJ.  The  basic  idea  is  simple:  In  the
t
th
iteration  replacegby  its  first  order  Taylor  expansion  atw
t
,  that  is,
g(w
t
) +〈w−w
t
,∇g(w
t
)〉and minimize
J
t
(w) =f(w)−g(w
t
)−〈w−w
t
,∇g(w
t
)〉.(3.134)
Taking gradients and setting it to zero shows thatJ
t
is minimized by setting
∇f(w
t+1
) =∇g(w
t
).(3.135)
The iterations of CCP on a toy minimization problem is illustrated in Figure
3.13, while the complete algorithm listing can be found in Algorithm 3.9.

1383  Optimization
1.0
1.5
2.02.53.03.54.0
80
70
60
50
40
30
20
10
1.0
1.5
2.02.53.03.54.0
50
0
50
100
150
200
Fig. 3.13.  Given the function on the left we decompose it into the difference of two
convex functions depicted on the right panel. The CCP algorithm generates iterates
by matching points on the two convex curves which have the same tangent vectors.
As can be seen, the iterates approach the solutionx= 2.0.
Algorithm 3.9Concave-Convex Procedure
1:Input:Initial pointw
0
, maximum iterationsT, convex functionsf,g
2:Sett= 0
3:whilet < Tdo
4:Setw
t+1
= argmin
w
f(w)−g(w
t
)−〈w−w
t
,∇g(w
t
)〉
5:t=t+ 1
6:end while
7:Return:w
T
Theorem 3.24LetJbe a function which can be decomposed into a differ-
ence of two convex functionse.g., (3.133). The iterates generated by(3.135)
monotically decreaseJ. Furthermore, the stationary point of the iterates is
a local minima ofJ.
ProofSincefandgare convex
f(w
t
)≥f(w
t+1
) +〈w
t
−w
t+1
,∇f(w
t+1
)〉
g(w
t+1
)≥g(w
t
) +〈w
t+1
−w
t
,∇g(w
t
)〉.
Adding the two inequalities, rearranging, and using (3.135) shows thatJ(w
t
) =
f(w
t
)−g(w
t
)≥f(w
t+1
)−g(w
t+1
) =J(w
t+1
), as claimed.
Letw
∗
be  a  stationary  point  of  the  iterates.  Then∇f(w
∗
)  =∇g(w
∗
),
which in turn implies thatw
∗
is a local minima ofJbecause∇J(w
∗
) = 0.
There are a number of extensions to CCP. We mention only a few in the
passing. First, it can be shown that all instances of the EM algorithm (Sec-
tion??) can be shown to be special cases of CCP. Second, the rate of con-

3.6  Some Practical Advice139
vergence of CCP is related to the eigenvalues of the positive semi-definite
matrix∇
2
(f+g). Third, CCP can also be extended to solve constrained
problems of the form:
min
w
f
0
(w)−g
0
(w)
s.t.f
i
(w)−g
i
(w)≤c
i
fori= 1,...,n.
where, as before,f
i
andg
i
fori= 0,1,...,nare assumed convex. At every
iteration, we replaceg
i
by its first order Taylor approximation and solve the
following constrained convex problem:
min
w
f
0
(w)−g
0
(w
t
) +〈w−w
t
,∇g
0
(w
t
)〉
s.t.f
i
(w)−g
i
(w
t
) +〈w−w
t
,∇g
i
(w
t
)〉≤c
i
fori= 1,...,n.
3.6  Some Practical Advice
The range of optimization algorithms we presented in this chapter might be
somewhat  intimidating  for  the  beginner.  Some  simple  rules  of  thumb  can
alleviate this anxiety
Code Reuse:Implementing an efficient optimization algorithm correctly
is both time consuming and error prone. Therefore, as far as possible use
existing libraries. A number of high class optimization libraries both com-
mercial and open source exist.
Unconstrained Problems:For unconstrained minimization of a smooth
convex function LBFGS (Section 3.2.6.1 is the algorithm of choice. In many
practical  situations  the  spectral  gradient  method  (Section  3.2.6.2)  is  also
very competitive. It also has the added advantage of being easy to imple-
ment. If the function to be minimized is non-smooth then Bundle methods
(Section 3.2.7) are to be preferred. Amongst the different formulations, the
Bundle Trust algorithm tends to be quite robust.
Constrained Problems:For constrained problems it is very important
to understand the nature of the constraints. Simple equality (Ax=b) and
box  (l≤x≤u)  constraints  are  easier  to  handle  than  general  non-linear
constraints. If the objective function is smooth, the constraint set Ω is simple,
and orthogonal projectionsP
Ω
are easy to compute, then spectral projected
gradient (Section 3.3.1) is the method of choice. If the optimization problem
is a QP or an LP then specialized solvers tend to be much faster than general
purpose solvers.

1403  Optimization
Large Scale Problems:If your parameter vector is high dimensional then
consider coordinate descent (Section 3.2.2) especially if the one dimensional
line search along a coordinate can be carried out efficiently. If the objective
function  is  made  up  of  a  summation  of  large  number  of  terms,  consider
stochastic gradient descent (Section 3.4.1). Although both these algorithms
do not guarantee a very accurate solution, practical experience shows that
for large scale machine learning problems this is rarely necessary.
Duality:Sometimes problems which are hard to optimize in the primal
may become simpler in the dual. For instance, if the objective function is
strongly  convex  but  non-smooth,  its  Fenchel  conjugate  is  smooth  with  a
Lipschitz continuous gradient.
Problems
Problem 3.1 (Intersection of Convex Sets{1})IfC
1
andC
2
are con-
vex sets, then show thatC
1
∩C
2
is also convex. Extend your result to show
that
⋂
n
i=1
C
i
are convex ifC
i
are convex.
Problem 3.2 (Linear Transform of Convex Sets{1})Given a setC⊂
R
n
and  a  linear  transformA∈R
m×n
,  defineAC:={y=Ax:x∈C}.  If
Cis convex then show thatACis also convex.
Problem 3.3 (Convex Combinations{1})Show that a subset ofR
n
is
convex if and only if it contains all the convex combination of its elements.
Problem 3.4 (Convex Hull{2})Show that the convex hull,conv(X)is
the smallest convex set which containsX.
Problem 3.5 (Epigraph of a Convex Function{2})Show that a func-
tion satisfies Definition 3.3 if, and only if, its epigraph is convex.
Problem 3.6Prove the Jensen’s inequality(3.6).
Problem 3.7 (Strong convexity of the negative entropy{3})Show that
the negative entropy(3.15)is 1-strongly convex with respect to the‖·‖
1
norm
on  the  simplex.  Hint:  First  show  thatφ(t) := (t−1) logt−2
(t−1)
2
t+1
≥0for
allt≥0. Next substitutet=x
i
/y
i
to show that
∑
i
(x
i
−y
i
) log
x
i
y
i
≥‖x−y‖
2
1
.

3.6  Some Practical Advice141
Problem 3.8 (Strongly Convex Functions{2})Prove 3.16, 3.17, 3.18
and 3.19.
Problem 3.9 (Convex Functions with Lipschitz Continuous Gradient{2})
Prove 3.22, 3.23, 3.24 and 3.25.
Problem 3.10 (One Dimensional Projection{1})Iff:R
d
→Ris
convex, then show that for an arbitraryxandpinR
d
the one dimensional
functionΦ(η) :=f(x+ηp)is also convex.
Problem 3.11 (Quasi-Convex Functions{2})In Section 3.1 we showed
that the below-sets of a convex functionX
c
:={x|f(x)≤c}are convex. Give
a counter-example to show that the converse is not true, that is, there exist
non-convex functions whose below-sets are convex. This class of functions is
called Quasi-Convex.
Problem 3.12 (Gradient of thep-norm{1})Show that the gradient of
thep-norm(3.31)is given by(3.32).
Problem 3.13Derive the Fenchel conjugate of the following functions
f(x) =
{
0ifx∈C
∞otherwise.
whereCis a convex set
f(x) =ax+b
f(x) =
1
2
x
>
AxwhereAis a positive definite matrix
f(x) =−log(x)
f(x) = exp(x)
f(x) =xlog(x)
Problem 3.14 (Convergence of gradient descent{2})SupposeJhas
a Lipschitz continuous gradient with modulusL. Then show that Algorithm
3.2  with  an  inexact  line  search  satisfying  the  Wolfe  conditions(3.42)and
(3.43)will return a solutionw
t
with‖∇J(w
t
)‖≤in at mostO(1/
2
)iter-
ations.
Problem 3.15Show that
1 +
∑
T
t=1
1
t
∑
T
t=1
1
√
t
≤
1
√
T

1423  Optimization
Problem 3.16 (Coordinate Descent for Quadratic Programming{2})
Derive a projection based method which uses coordinate descent to generate
directions of descent for solving the following box constrained QP:
min
w∈R
n
1
2
w
>
Qw+c
>
w
s.t.l≤w≤u.
You may assume thatQis positive definite andlanduare scalars.
Problem 3.17 (Dual of a LP{1})Show that the dual of the LP(3.122)
is(3.115).  In  other  words,  we  recover  the  primal  by  computing  the  dual  of
the dual.

4
Online Learning and Boosting
So far the learning algorithms we considered assumed that all the training
data is available before building a model for predicting labels on unseen data
points. In many modern applications data is available only in a streaming
fashion, and one needs to predict labels on the fly. To describe a concrete
example, consider the task of spam filtering. As emails arrive the learning
algorithm needs to classify them as spam or ham. Tasks such as these are
tackled  via  online  learning.  Online  learning  proceeds  in  rounds.  At  each
round a training example is revealed to the learning algorithm, which uses
its  current  model  to  predict  the  label.  The  true  label  is  then  revealed  to
the learner which incurs a loss and updates its model based on the feedback
provided. This protocol is summarized in Algorithm 4.1. The goal of online
learning  is  to  minimize  the  total  loss  incurred.  By  an  appropriate  choice
of  labels  and  loss  functions,  this  setting  encompasses  a  large  number  of
tasks such as classification, regression, and density estimation. In our spam
detection example, if an email is misclassified the user can provide feedback
which  is  used  to  update  the  spam  filter,  and  the  goal  is  to  minimize  the
number of misclassified emails.
4.1  Halving Algorithm
The halving algorithm is conceptually simple, yet it illustrates many of the
concepts in online learning. Suppose we have access to a set ofnexperts,
that is, functionsf
i
which map from the input spaceXto the output space
Y={±1}. Furthermore, assume that one of the experts is consistent, that
is, there exists aj∈ {1,...,n}such thatf
j
(x
t
) =y
t
fort= 1,...,T. The
halving algorithm maintains a setC
t
of consistent experts at timet. Initially
C
0
={1,...,n}, and it is updated recursively as
C
t+1
={i∈C
t
s.t.f
i
(x
t+1
) =y
t+1
}.(4.1)
The prediction on a new data point is computed via a majority vote amongst
the consistent experts: ˆy
t
= majority(C
t
).
Lemma 4.1The Halving algorithm makes at mostlog
2
(n)mistakes.
143

1444  Online Learning and Boosting
Algorithm 4.1Protocol of Online Learning
1:fort= 1,...,Tdodo
2:Get training instancex
t
3:Predict label ˆy
t
4:Get true labely
t
5:Incur lossl(ˆy
t
,x
t
,y
t
)
6:Update model
7:end for
ProofLetMdenote the total number of mistakes. The halving algorithm
makes a mistake at iterationtif at least half the consistent expertsC
t
predict
the wrong label. This in turn implies that
|C
t+1
|≤
|C
t
|
2
≤
|C
0
|
2
M
=
n
2
M
.
On  the  other  hand,  since  one  of  the  experts  is  consistent  it  follows  that
1≤|C
t+1
|. Therefore, 2
M
≤n. Solving forMcompletes the proof.
4.2  Weighted Majority
We now turn to the scenario where none of the experts is consistent. There-
fore, the aim here is not to minimize the number mistakes but to minimize
regret.
In this chapter we will consider online methods for solving the following
optimization problem:
min
w∈Ω
J(w) whereJ(w) =
T
∑
t=1
f
t
(w).(4.2)
Suppose we have access to a functionψwhich is continuously differentiable
and strongly convex with modulus of strong convexityσ >0 (see Section
3.1.4  for  definition  of  strong  convexity),  then  we  can  define  the  Bregman
divergence (3.29) corresponding toψas
∆
ψ
(w,w
′
) =ψ(w)−ψ(w
′
)−
〈
w−w
′
,∇ψ(w
′
)
〉
.
We can also generalize the orthogonal projection (3.104) by replacing the
square Euclidean norm with the above Bregman divergence:
P
ψ,Ω
(w
′
) = argmin
w∈Ω
∆
ψ
(w,w
′
).(4.3)

4.2  Weighted Majority145
Algorithm 4.2Stochastic (sub)gradient Descent
1:Input:Initial pointx
1
, maximum iterationsT
2:fort= 1,...,Tdo
3:Compute  ˆw
t+1
=∇ψ
∗
(∇ψ(w
t
)−η
t
g
t
) withg
t
=∂
w
f
t
(w
t
)
4:Setw
t+1
=P
ψ,Ω
( ˆw
t+1
)
5:end for
6:Return:w
T+1
Denotew
∗
=P
ψ,Ω
(w
′
). Just like the Euclidean distance is non-expansive, the
Bregman projection can also be shown to be non-expansive in the following
sense:
∆
ψ
(w,w
′
)≥∆
ψ
(w,w
∗
) + ∆
ψ
(w
∗
,w
′
)(4.4)
for allw∈Ω. The diameter of Ω as measured by ∆
ψ
is given by
diam
ψ
(Ω) =  max
w,w
′
∈Ω
∆
ψ
(w,w
′
).(4.5)
For the rest of this chapter we will make the following standard assumptions:
•Eachf
t
is convex and revealed at time instancet.
•Ω is a closed convex subset ofR
n
with non-empty interior.
•The diameter diam
ψ
(Ω) of Ω is bounded byF <∞.
•The set of optimal solutions of (4.2) denoted by Ω
∗
is non-empty.
•The subgradient∂
w
f
t
(w) can be computed for everytandw∈Ω.
•The Bregman projection (4.3) can be computed for everyw
′
∈R
n
.
•The gradient∇ψ, and its inverse (∇ψ)
−1
=∇ψ
∗
can be computed.
The  method  we  employ  to  solve  (4.2)  is  given  in  Algorithm  4.2.  Before
analyzing the performance of the algorithm we would like to discuss three
special  cases.  First,  Euclidean  distance  squared  which  recovers  projected
stochastic gradient descent, second Entropy which recovers Exponentiated
gradient descent, and third thep-norms forp >2 which recovers thep-norm
Perceptron. BUGBUG TODO.
Our key result is Lemma 4.3 given below. It can be found in various guises
in different places most notably Lemma 2.1 and 2.2 in [?], Theorem 4.1 and
Eq. (4.21) and (4.15) in [?], in the proof of Theorem 1 of [?], as well as Lemma
3 of [?]. We prove a slightly general variant; we allow for projections with
an arbitrary Bregman divergence and also take into account a generalized
version of strong convexity off
t
. Both these modifications will allow us to
deal with general settings within a unified framework.

1464  Online Learning and Boosting
Definition 4.2We  say  that  a  convex  functionfis  strongly  convex  with
respect to another convex functionψwith modulusλif
f(w)−f(w
′
)−
〈
w−w
′
,μ
〉
≥λ∆
ψ
(w,w
′
)for allμ∈∂f(w
′
).(4.6)
The usual notion of strong convexity is recovered by settingψ(·) =
1
2
‖·‖
2
.
Lemma 4.3Letf
t
be strongly convex with respect toψwith modulusλ≥0
for allt. For anyw∈Ωthe sequences generated by Algorithm 4.2 satisfy
∆
ψ
(w,w
t+1
)≤∆
ψ
(w,w
t
)−η
t
〈g
t
,w
t
−w〉+
η
2
t
2σ
‖g
t
‖
2
(4.7)
≤(1−η
t
λ)∆
ψ
(w,w
t
)−η
t
(f
t
(w
t
)−f
t
(w)) +
η
2
t
2σ
‖g
t
‖
2
.(4.8)
ProofWe prove the result in three steps. First we upper bound ∆
ψ
(w,w
t+1
)
by ∆
ψ
(w,ˆw
t+1
). This is a consequence of (4.4) and the non-negativity of the
Bregman divergence which allows us to write
∆
ψ
(w,w
t+1
)≤∆
ψ
(w,ˆw
t+1
).(4.9)
In the next step we use Lemma 3.11 to write
∆
ψ
(w,w
t
) + ∆
ψ
(w
t
,ˆw
t+1
)−∆
ψ
(w,ˆw
t+1
) =〈∇ψ( ˆw
t+1
)−∇ψ(w
t
),w−w
t
〉.
Since∇ψ
∗
= (∇ψ)
−1
, the update in step 3 of Algorithm 4.2 can equivalently
be  written  as∇ψ( ˆw
t+1
)− ∇ψ(w
t
)  =−η
t
g
t
.  Plugging  this  in  the  above
equation and rearranging
∆
ψ
(w,ˆw
t+1
) = ∆
ψ
(w,w
t
)−η
t
〈g
t
,w
t
−w〉+ ∆
ψ
(w
t
,ˆw
t+1
).(4.10)
Finally we upper bound ∆
ψ
(w
t
,ˆw
t+1
). For this we need two observations:
First,〈x,y〉 ≤
1
2σ
‖x‖
2
+
σ
2
‖y‖
2
for allx,y∈R
n
andσ >0. Second, theσ
strong convexity ofψallows us to bound ∆
ψ
( ˆw
t+1
,w
t
)≥
σ
2
‖w
t
−ˆw
t+1
‖
2
.
Using these two observations
∆
ψ
(w
t
,ˆw
t+1
) =ψ(w
t
)−ψ( ˆw
t+1
)−〈∇ψ( ˆw
t+1
),w
t
−ˆw
t+1
〉
=−(ψ( ˆw
t+1
)−ψ(w
t
)−〈∇ψ(w
t
),ˆw
t+1
−w
t
〉) +〈η
t
g
t
,w
t
−ˆw
t+1
〉
=−∆
ψ
( ˆw
t+1
,w
t
) +〈η
t
g
t
,w
t
−ˆw
t+1
〉
≤−
σ
2
‖w
t
−ˆw
t+1
‖
2
+
η
2
t
2σ
‖g
t
‖
2
+
σ
2
‖w
t
−ˆw
t+1
‖
2
=
η
2
t
2σ
‖g
t
‖
2
.(4.11)
Inequality (4.7) follows by putting together (4.9), (4.10), and (4.11), while
(4.8) follows by using (4.6) withf=f
t
andw
′
=w
t
and substituting into

4.2  Weighted Majority147
(4.7).
Now we are ready to prove regret bounds.
Lemma 4.4Letw
∗
∈Ω
∗
denote  the  best  parameter  chosen  in  hindsight,
and let‖g
t
‖≤Lfor allt. Then the regret of Algorithm 4.2 can be bounded
via
T
∑
t=1
f
t
(w
t
)−f
t
(w
∗
)≤F
(
1
η
T
−Tλ
)
+
L
2
2σ
T
∑
t=1
η
t
.(4.12)
ProofSetw=w
∗
and rearrange (4.8) to obtain
f
t
(w
t
)−f
t
(w
∗
)≤
1
η
t
((1−λη
t
)∆
ψ
(w
∗
,w
t
)−∆
ψ
(w
∗
,w
t+1
)) +
η
t
2σ
‖g
t
‖
2
.
Summing overt
T
∑
t=1
f
t
(w
t
)−f
t
(w
∗
)≤
T
∑
t=1
1
η
t
((1−η
t
λ)∆
ψ
(w
∗
,w
t
)−∆
ψ
(w
∗
,w
t+1
))
︸︷︷︸
T
1
+
T
∑
t=1
η
t
2σ
‖g
t
‖
2
︸︷︷︸
T
2
.
Since the diameter of Ω is bounded byFand ∆
ψ
is non-negative
T
1
=
(
1
η
1
−λ
)
∆
ψ
(w
∗
,w
1
)−
1
η
T
∆
ψ
(w
∗
,w
T+1
) +
T
∑
t=2
∆
ψ
(w
∗
,w
t
)
(
1
η
t
−
1
η
t−1
−λ
)
≤
(
1
η
1
−λ
)
∆
ψ
(w
∗
,w
1
) +
T
∑
t=2
∆
ψ
(w
∗
,w
t
)
(
1
η
t
−
1
η
t−1
−λ
)
≤
(
1
η
1
−λ
)
F+
T
∑
t=2
F
(
1
η
t
−
1
η
t−1
−λ
)
=F
(
1
η
T
−Tλ
)
.
On  the  other  hand,  since  the  subgradients  are  Lipschitz  continuous  with
constantLit follows that
T
2
≤
L
2
2σ
T
∑
t=1
η
t
.
Putting together the bounds forT
1
andT
2
yields (4.12).
Corollary 4.5Ifλ >0and we setη
t
=
1
λt
then
T
∑
t=1
f
t
(x
t
)−f
t
(x
∗
)≤
L
2
2σλ
(1 + log(T)),

1484  Online Learning and Boosting
On the other hand, whenλ= 0, if we setη
t
=
1
√
t
then
T
∑
t=1
f
t
(x
t
)−f
t
(x
∗
)≤
(
F+
L
2
σ
)
√
T.
ProofFirst  considerλ >0  withη
t
=
1
λt
.  In  this  case
1
η
T
=Tλ,  and
consequently (4.12) specializes to
T
∑
t=1
f
t
(w
t
)−f
t
(w
∗
)≤
L
2
2σλ
T
∑
t=1
1
t
≤
L
2
2σλ
(1 + log(T)).
Whenλ= 0, and we setη
t
=
1
√
t
and use problem 4.2 to rewrite (4.12) as
T
∑
t=1
f
t
(w
t
)−f
t
(w
∗
)≤F
√
T+
L
2
σ
T
∑
t=1
1
2
√
t
≤F
√
T+
L
2
σ
√
T.
Problems
Problem 4.1 (Generalized Cauchy-Schwartz{1})Show that〈x,y〉≤
1
2σ
‖x‖
2
+
σ
2
‖y‖
2
for allx,y∈R
n
andσ >0.
Problem 4.2 (Bounding sum of a series{1})Show  that
∑
b
t=a
1
2
√
t
≤
√
b−a+ 1.Hint:Upper bound the sum by an integral.

5
Conditional Densities
A  number  of  machine  learning  algorithms  can  be  derived  by  using  condi-
tional  exponential  families  of  distribution  (Section  2.3).  Assume  that  the
training  set{(x
1
,y
1
),...,(x
m
,y
m
)}was  drawn  iid  from  some  underlying
distribution. Using Bayes rule (1.15) one can write the likelihood
p(θ|X,Y)∝p(θ)p(Y|X,θ) =p(θ)
m
∏
i=1
p(y
i
|x
i
,θ),(5.1)
and hence the negative log-likelihood
−logp(θ|X,Y) =−
m
∑
i=1
logp(y
i
|x
i
,θ)−logp(θ) + const.(5.2)
Because we do not have any prior knowledge about the data, we choose a
zero mean unit variance isotropic normal distribution forp(θ). This yields
−logp(θ|X,Y) =
1
2
‖θ‖
2
−
m
∑
i=1
logp(y
i
|x
i
,θ) + const.(5.3)
Finally, if we assume a conditional exponential family model forp(y|x,θ),
that is,
p(y|x,θ) = exp (〈φ(x,y),θ〉−g(θ|x)),(5.4)
then
−logp(θ|X,Y) =
1
2
‖θ‖
2
+
m
∑
i=1
g(θ|x
i
)−〈φ(x
i
,y
i
),θ〉+ const.(5.5)
where
g(θ|x) = log
∑
y∈Y
exp (〈φ(x,y),θ〉),(5.6)
is  the  log-partition  function.  Clearly,  (5.5)  is  a  smooth  convex  objective
function,  and  algorithms  for  unconstrained  minimization  from  Chapter  3
149

1505  Conditional Densities
can be used to obtain the maximum aposteriori (MAP) estimate forθ. Given
the optimalθ, the class label at any givenxcan be predicted using
y
∗
= argmax
y
p(y|x,θ).(5.7)
In  this  chapter  we  will  discuss  a  number  of  these  algorithms  that  can  be
derived  by  specializing  the  above  setup.  Our  discussion  unifies  seemingly
disparate algorithms, which are often discussed separately in literature.
5.1  Logistic Regression
We begin with the simplest case namely binary classification
1
. The key ob-
servation here is that the labelsy∈{±1}and hence
g(θ|x) = log (exp (〈φ(x,+1),θ〉) + exp (〈φ(x,−1),θ〉)).(5.8)
Define
ˆ
φ(x)  :=φ(x,+1)−φ(x,−1).  Plugging  (5.8)  into  (5.4),  using  the
definition of
ˆ
φand rearranging
p(y= +1|x,θ) =
1
1 + exp
(〈
−
ˆ
φ(x),θ
〉)
and
p(y=−1|x,θ) =
1
1 + exp
(〈
ˆ
φ(x),θ
〉)
,
or more compactly
p(y|x,θ) =
1
1 + exp
(〈
−y
ˆ
φ(x),θ
〉)
.(5.9)
Sincep(y|x,θ) is a logistic function, hence the name logistic regression. The
classification rule (5.7) in this case specializes as follows: predict +1 when-
everp(y= +1|x,θ)≥p(y=−1|x,θ) otherwise predict−1. However
log
p(y= +1|x,θ)
p(y=−1|x,θ)
=
〈
ˆ
φ(x),θ
〉
,
therefore one can equivalently use sign
(〈
ˆ
φ(x),θ
〉)
as our prediction func-
tion. Using (5.9) we can write the objective function of logistic regression
as
1
2
‖θ‖
2
+
m
∑
i=1
log
(
1 + exp
(〈
−y
i
ˆ
φ(x
i
),θ
〉))
1
The name logisticregressionis a misnomer!

5.2  Regression151
To minimize the above objective function we first compute the gradient.
∇J(θ) =θ+
m
∑
i=1
exp
(〈
−y
i
ˆ
φ(x
i
),θ
〉)
1 + exp
(〈
−y
i
ˆ
φ(x
i
),θ
〉)
(−y
i
ˆ
φ(x
i
))
=θ+
m
∑
i=1
(p(y
i
|x
i
,θ)−1)y
i
ˆ
φ(x
i
).
Notice that the second term of the gradient vanishes wheneverp(y
i
|x
i
,θ) =
1. Therefore, one way to interpret logistic regression is to view it as a method
to maximizep(y
i
|x
i
,θ) for each point (x
i
,y
i
) in the training set. Since the
objective function of logistic regression is twice differentiable one can also
compute its Hessian
∇
2
J(θ) =I−
m
∑
i=1
p(y
i
|x
i
,θ)(1−p(y
i
|x
i
,θ))
ˆ
φ(x
i
)
ˆ
φ(x
i
)
>
,
where  we  usedy
2
i
=  1.  The  Hessian  can  be  used  in  the  Newton  method
(Section 3.2.6) to obtain the optimal parameterθ.
5.2  Regression
5.2.1  Conditionally Normal Models
fixed variance
5.2.2  Posterior Distribution
integrating out vs. Laplace approximation, efficient estimation (sparse greedy)
5.2.3  Heteroscedastic Estimation
explain that we have two parameters. not too many details (do that as an
assignment).
5.3  Multiclass Classification
5.3.1  Conditionally Multinomial Models
joint feature map

1525  Conditional Densities
5.4  What is a CRF?
•Motivation with learning a digit example
•general definition
•Gaussian process + structure = CRF
5.4.1  Linear Chain CRFs
•Graphical model
•Applications
•Optimization problem
5.4.2  Higher Order CRFs
•2-d CRFs and their applications in vision
•Skip chain CRFs
•Hierarchical CRFs (graph transducers, sutton et. al. JMLR etc)
5.4.3  Kernelized CRFs
•From feature maps to kernels
•The clique decomposition theorem
•The representer theorem
•Optimization strategies for kernelized CRFs
5.5  Optimization Strategies
5.5.1  Getting Started
•three things needed to optimize
–MAP estimate
–log-partition function
–gradient of log-partition function
•Worked out example (linear chain?)
5.5.2  Optimization Algorithms
- Optimization algorithms (LBFGS, SGD, EG (Globerson et. al))
5.5.3  Handling Higher order CRFs
- How things can be done for higher order CRFs (briefly)

5.6  Hidden Markov Models153
5.6  Hidden Markov Models
•Definition
•Discuss that they are modeling joint distributionp(x,y)
•The way they predict is by marginalizing outx
•Why they are wasteful and why CRFs generally outperform them
5.7  Further Reading
What we did not talk about:
•Details of HMM optimization
•CRFs applied to predicting parse trees via matrix tree theorem (collins,
koo et al)
•CRFs for graph matching problems
•CRFs with Gaussian distributions (yes they exist)
5.7.1  Optimization
issues in optimization (blows up with number of classes). structure is not
there. can we do better?
Problems
Problem 5.1Poisson models
Problem 5.2Bayes Committee Machine
Problem 5.3Newton / CG approach



6
Kernels and Function Spaces
Kernels are measures of similarity. Broadly speaking, machine learning al-
gorithms which rely only on the dot product between instances can be “ker-
nelized”  by  replacing  all  instances  of〈x,x
′
〉by  a  kernel  functionk(x,x
′
).
We saw examples of such algorithms in Sections 1.3.3 and 1.3.4 and we will
see many more examples in Chapter 7. Arguably, the design of a good ker-
nel underlies the success of machine learning in many applications. In this
chapter we will lay the ground for the theoretical properties of kernels and
present a number of examples. Algorithms which use these kernels can be
found in later chapters.
6.1  The Basics
LetXdenote the space of inputs andk:X×X→Rbe a function which
satisfies
k(x,x
′
) =〈Φ(x),Φ(x)〉(6.1)
where Φ is a feature map which mapsXinto some dot product spaceH. In
other words, kernels correspond to dot products in some dot product space.
The main advantage of using a kernel as a similarity measure are threefold:
First,  if  the  feature  space  is  rich  enough,  then  simple  estimators  such  as
hyperplanes and half-spaces may be sufficient. For instance, to classify the
points  in  Figure  BUGBUG,  we  need  a  nonlinear  decision  boundary,  but
once  we  map  the  points  to  a  3  dimensional  space  a  hyperplane  suffices.
Second,  kernels  allow  us  to  construct  machine  learning  algorithms  in  the
dot product spaceHwithout explicitly computing Φ(x). Third, we need not
make any assumptions about the input spaceXother than for it to  be  a
set. As we will see later in this chapter, this allows us to compute similarity
between discrete objects such as strings, trees, and graphs. In the first half
of this chapter we will present some examples of kernels, and discuss some
theoretical properties of kernels in the second half.
155

1566  Kernels and Function Spaces
6.1.1  Examples
6.1.1.1  Linear Kernel
Linear kernels are perhaps the simplest of all kernels. We assume thatx∈R
n
and define
k(x,x
′
) =
〈
x,x
′
〉
=
∑
i
x
i
x
′
i
.
Ifxandx
′
are dense then computing the kernel takesO(n) time. On the
other hand, for sparse vectors this can be reduced toO(|nnz(x)∩nnz(x
′
)|),
wherennz(·)  denotes  the  set  of  non-zero  indices  of  a  vector  and|·|de-
notes the size of a set. Linear kernels are a natural representation to use for
vectorial data. They are also widely used in text mining where documents
are represented by a vector containing the frequency of occurrence of words
(Recall  that  we  encountered  this  so-called  bag  of  words  representation  in
Chapter 1). Instead of a simple bag of words, one can also map a text to the
set of pairs of words that co-occur in a sentence for a richer representation.
6.1.1.2  Polynomial Kernel
Givenx∈R
n
,  we  can  compute  a  feature  map  Φ  by  taking  all  thed-th
order products (also called the monomials) of the entries ofx. To illustrate
with a concrete example, let us considerx= (x
1
,x
2
) andd= 2, in which
case  Φ(x)  =
(
x
2
1
,x
2
2
,x
1
x
2
,x
2
x
1
)
.  Although  it  is  tedious  to  compute  Φ(x)
and Φ(x
′
) explicitly in order to computek(x,x), there is a shortcut as the
following proposition shows.
Proposition 6.1LetΦ(x)(resp.Φ(x
′
))  denote  the  vector  whose  entries
are  all  possibled-th  degree  ordered  products  of  the  entries  ofx(resp.x
′
).
Then
k(x,x
′
) =
〈
Φ(x),Φ(x
′
)
〉
=
(〈
x,x
′
〉)
d
.(6.2)
ProofBy direct computation
〈
Φ(x),Φ(x
′
)
〉
=
∑
j
1
...
∑
j
d
x
j
1
...x
j
d
·x
′
j
1
...x
′
j
d
=
∑
j
1
x
j
1
·x
′
j
1
...
∑
j
d
x
j
d
·x
′
j
d
=


∑
j
x
j
·x
′
j


d
=
(〈
x,x
′
〉)
d

6.1  The Basics157
The kernel (6.2) is called the polynomial kernel. An useful extension is the
inhomogeneous polynomial kernel
k(x,x
′
) =
(〈
x,x
′
〉
+c
)
d
,(6.3)
which computes all monomials up to degreed(problem 6.2).
6.1.1.3  Radial Basis Function Kernels
6.1.1.4  Convolution Kernels
The framework of convolution kernels is a general way to extend the notion
of kernels to structured objects such as strings, trees, and graphs. Letx∈X
be a discrete object which can be decomposed intoPpartsx
p
∈X
p
in many
different ways. As a concrete example consider the stringx=abcwhich can
be split into two sets of substrings of size two namely{a,bc}and{ab,c}.
We denote the set of all such decompositions asR(x), and use it to build a
kernel onXas follows:
[k
1
? ... ? k
P
] (x,x
′
) =
∑
 ̄x∈R(x), ̄x
′
∈R(x
′
)
P
∏
p=1
k
p
( ̄x
p
, ̄x
′
p
).(6.4)
Here, the sum is over all possible ways in which we can decomposexand
x
′
into   ̄x
1
,..., ̄x
P
and   ̄x
′
1
,..., ̄x
′
P
respectively. If the cardinality ofR(x) is
finite, then it can be shown that (6.4) results in a valid kernel. Although
convolution kernels provide the abstract framework, specific instantiations
of  this  idea  lead  to  a  rich  set  of  kernels  on  discrete  objects.  We  will  now
discuss some of them in detail.
6.1.1.5  String Kernels
The  basic  idea  behind  string  kernels  is  simple:  Compare  the  strings  by
means of the subsequences they contain. More the number of common sub-
sequences, the more similar two strings are. The subsequences need not have
equal weights. For instance, the weight of a subsequence may be given by the
inverse frequency of its occurrence. Similarly, if the first and last characters
of  a  subsequence  are  rather  far  apart,  then  its  contribution  to  the  kernel
must be down-weighted.
Formally, a stringxis composed of characters from a finite alphabet Σ
and|x|denotes its length. We say thatsis a subsequence ofx=x
1
x
2
...x
|x|
ifs=x
i
1
x
i
2
...x
i
|s|
for some 1≤i
1
< i
2
< ... < i
|s|
≤ |x|. In particular, if
i
i+1
=i
i
+ 1 thensis a substring ofx. For example,acbis not a subsequence
ofadbcwhileabcis a subsequence andadcis a substring. Assume that there
exists a function #(x,s) which returns the number of times a subsequence

1586  Kernels and Function Spaces
soccurs inxand a non-negative weighting functionw(s)≥0 which returns
the weight associated withs. Then the basic string kernel can be written as
k(x,x
′
) =
∑
s
#(x,s) #(x
′
,s)w(s).(6.5)
Different string kernels are derived by specializing the above equation:
All substrings kernel:If we restrict the summation in (6.5) to sub-
strings then [VS04] provide a suffix tree based algorithm which allows one
to compute for arbitraryw(s) the kernelk(x,x
′
) inO(|x|+|x
′
|) time and
memory.
k-Spectrum kernel:Thek-spectrum kernel is obtained by restricting
the summation in (6.5) to substrings of lengthk. A slightly general variant
considers  all  substrings  of  length  up  tok.  Herekis  a  tuning  parameter
which is typically set to be a small number (e.g.,5). A simple trie based
algorithm can be used to compute thek-spectrum kernel inO((|x|+|x
′
|)k)
time (problem 6.3).
Inexact  substring  kernel:Sometimes  the  input  strings  might  have
measurement errors and therefore it is desirable to take into account inexact
matches.  This  is  done  by  replacing  #(x,s)  in  (6.5)  by  another  function
#(x,s,) which reports the number of approximate matches ofsinx. Here
denotes the number of mismatches allowed, typically a small number (e.g.,
3). By trading off computational complexity with storage the kernel can be
computed efficiently. See [LK03] for details.
Mismatch kernel:Instead of simply counting the number of occurrences
of a substring if we use a weighting scheme which down-weights the contribu-
tions of longer subsequences then this yields the so-called mismatch kernel.
Given an index sequenceI= (i
1
,...,i
k
) with 1≤i
1
< i
2
< ... < i
k
≤ |x|
we can associate the subsequencex(I) =x
i
1
x
i
2
...x
i
k
withI. Furthermore,
define|I|=i
k
−i
1
+ 1. Clearly,|I|> kifIis not contiguous. Letλ≤1 be
a decay factor. Redefine
#(x,s) =
∑
s=x(I)
λ
|I|
,(6.6)
that is, we count all occurrences ofsinxbut now the weight associated with
a subsequence depends on its length. To illustrate, consider the subsequence
abcwhich occurs in the stringabcebctwice, namely,abc
ebcandabcebc. The
first  occurrence  is  counted  with  weightλ
3
while  the  second  occurrence  is
counted with the weightλ
6
. As it turns out, this kernel can be computed
by a dynamic programming algorithm (problem BUGBUG) inO(|x|·|x
′
|)
time.

6.1  The Basics159
6.1.1.6  Graph Kernels
There  are  two  different  notions  of  graph  kernels.  First,  kernelsongraphs
are used to compare nodes of a single graph. In contrast, kernelsbetween
graphs focus on comparing two graphs. A random walk (or its continuous
time limit, diffusion) underlie both types of kernels. The basic intuition is
that  two  nodes  are  similar  if  there  are  a  number  of  paths  which  connect
them while two graphs are similar if they share many common paths. To
describe these kernels formally we need to introduce some notation.
A graphGconsists of an ordered set ofnverticesV={v
1
,v
2
,...,v
n
},
and a set of directed edgesE⊂V×V. A vertexv
i
is said to be a neighbor
of another vertexv
j
if they are connected by an edge,i.e.,if (v
i
,v
j
)∈E;
this is also denotedv
i
∼v
j
. The adjacency matrix of a graph is then×n
matrixAwithA
ij
= 1 ifv
i
∼v
j
, and 0 otherwise. A walk of lengthkonG
is a sequence of indicesi
0
,i
1
,...i
k
such thatv
i
r−1
∼v
i
r
for all 1≤r≤k.
The adjacency matrix has a normalized cousin, defined
 ̃
A:=D
−1
A, which
has  the  property  that  each  of  its  rows  sums  to  one,  and  it  can  therefore
serve as the transition matrix for a stochastic process. Here,Dis a diag-
onal matrix  of node  degrees,i.e.,D
ii
=d
i
=
∑
j
A
ij
. A  random walk on
Gis a process generating sequences of verticesv
i
1
,v
i
2
,v
i
3
,...according to
P(i
k+1
|i
1
,...i
k
) =
 ̃
A
i
k
,i
k+1
. Thet
th
power of
 ̃
Athus describest-length walks,
i.e.,(
 ̃
A
t
)
ij
is the probability of a transition from vertexv
j
to vertexv
i
via
a walk of lengtht(problem BUGBUG). Ifp
0
is an initial probability dis-
tribution  over  vertices,  then  the  probability  distributionp
t
describing  the
location of our random walker at timetisp
t
=
 ̃
A
t
p
0
. Thej
th
component of
p
t
denotes the probability of finishing at-length walk at vertexv
j
. A random
walk need not continue indefinitely; to model this, we associate every node
v
i
k
in the graph with a stopping probabilityq
i
k
. The overall probability of
stopping aftertsteps is given byq
>
p
t
.
Given  two  graphsG(V,E)  andG
′
(V
′
,E
′
),  their  direct  productG
×
is  a
graph with vertex set
V
×
={(v
i
,v
′
r
) :v
i
∈V, v
′
r
∈V
′
},(6.7)
and edge set
E
×
={((v
i
,v
′
r
),(v
j
,v
′
s
))  :  (v
i
,v
j
)∈E∧(v
′
r
,v
′
s
)∈E
′
}.(6.8)
In  other  words,G
×
is  a  graph  over  pairs  of  vertices  fromGandG
′
,  and
two vertices inG
×
are neighbors if and only if the corresponding vertices
inGandG
′
are both neighbors; see Figure 6.1 for an illustration. IfAand
A
′
are the respective adjacency matrices ofGandG
′
, then the adjacency

1606  Kernels and Function Spaces
G
1
1
2
3
G
2
1’2’
3’4’
G
×
11’21’31’
34’12’
24’22’
14’32’
33’23’13’
Fig. 6.1.  Two graphs (G
1
&G
2
) and their direct product (G
×
). Each node of the
direct  product  graph  is  labeled  with  a  pair  of  nodes  (6.7);  an  edge  exists  in  the
direct product if and only if the corresponding nodes are adjacent in both original
graphs (6.8). For instance, nodes 11
′
and 32
′
are adjacent because there is an edge
between nodes 1 and 3 in the first, and 1
′
and 2
′
in the second graph.
matrix ofG
×
isA
×
=A⊗A
′
. Similarly,
 ̃
A
×
=
 ̃
A⊗
 ̃
A
′
. Performing a random
walk on the direct product graph is equivalent to performing a simultaneous
random walk onGandG
′
. Ifpandp
′
denote initial probability distributions
over  the  vertices  ofGandG
′
,  then  the  corresponding  initial  probability
distribution on the direct product graph isp
×
:=p⊗p
′
. Likewise, ifqand
q
′
are  stopping  probabilities  (that  is,  the  probability  that  a  random  walk
ends at a given vertex), then the stopping probability on the direct product
graph isq
×
:=q⊗q
′
.
To define a kernel which computes the similarity betweenGandG
′
, one
natural idea is to simply sum upq
>
×
 ̃
A
t
×
p
×
for all values oft. However, this
sum might not converge, leaving the kernel value undefined. To overcome
this  problem,  we  introduce  appropriately  chosen  non-negative  coefficients
μ(t), and define the kernel betweenGandG
′
as
k(G,G
′
) :=
∞
∑
t=0
μ(t)q
>
×
 ̃
A
t
×
p
×
.(6.9)
This idea can be extended to graphs whose nodes are associated with labels
by replacing the matrix
 ̃
A
×
with a matrix of label similarities. For appro-
priate choices ofμ(t) the above sum converges and efficient algorithms for
computing the kernel can be devised. See [?] for details.
As it turns out, the simple idea of performing a random walk on the prod-

6.2  Kernels161
uct graph can be extended to compute kernels on Auto Regressive Moving
Average (ARMA) models [VSV07]. Similarly, it can also be used to define
kernels between transducers. Connections between the so-called rational ker-
nels on transducers and the graph kernels defined via (6.9) are made explicit
in [?].
6.2  Kernels
6.2.1  Feature Maps
give examples, linear classifier, nonlinear ones with r2-r3 map
6.2.2  The Kernel Trick
6.2.3  Examples of Kernels
gaussian, polynomial, linear, texts, graphs
- stress the fact that there is a difference between structure in the input
space and structure in the output space
6.3  Algorithms
6.3.1  Kernel Perceptron
6.3.2  Trivial Classifier
6.3.3  Kernel Principal Component Analysis
6.4  Reproducing Kernel Hilbert Spaces
As it turns out, this class of functions coincides with the class of positive
semi-definite  functions.  Intuitively,  the  notion  of  a  positive  semi-definite
function  is  an  extension  of  the  familiar  notion  of  a  positive  semi-definite
matrix (also see Appendix BUGBUG):
Definition 6.2A realn×nsymmetric matrixKsatisfying
∑
i,j
α
i
α
j
K
i,j
≥0(6.10)
for allα
i
,α
j
∈Ris called positive semi-definite. If equality in(6.10)occurs
only whenα
1
,...,α
n
= 0, thenKis said to be positive definite.
Definition 6.3Given a set of pointsx
1
,...,x
n
∈Xand a functionk, the
matrix
K
i,j
=k(x
i
,x
j
)(6.11)

1626  Kernels and Function Spaces
is called the Gram matrix or the kernel matrix ofkwith respect tox
1
,...,x
n
.
Definition 6.4LetXbe a nonempty set,k:X×X→Rbe a function. If
kgives rise to a positive (semi-)definite Gram matrix for allx
1
,...,x
n
∈X
andn∈Nthenkis said to be positive (semi-)definite.
Clearly, every kernel functionkof the form (6.1) is positive semi-definite.
To see this simply write
∑
i,j
α
i
α
j
k(x
i
,x
j
) =
∑
i,j
α
i
α
j
〈x
i
,x
j
〉=
〈
∑
i
α
i
x
i
,
∑
j
α
j
x
j
〉
≥0.
We now establish the converse, that is, we show that every positive semi-
definite kernel function can be written as (6.1). Towards this end, define a
map Φ fromXinto the space of functions mappingXtoR(denotedR
X
) via
Φ(x) =k(·,x). In other words, Φ(x) :X→Ris a function which assigns the
valuek(x
′
,x) tox
′
∈X. Next construct a vector space by taking all possible
linear combinations of Φ(x)
f(·) =
n
∑
i=1
α
i
Φ(x
i
) =
n
∑
i=1
α
i
k(·,x
i
),(6.12)
wherei∈N,α
i
∈R, andx
i
∈Xare arbitrary. This space can be endowed
with a natural dot product
〈f,g〉=
n
∑
i=1
n
′
∑
j=1
α
i
β
j
k(x
i
,x
′
j
).(6.13)
To see that the above dot product is well defined even though it contains
the  expansion  coefficients  (which  need  not  be  unique),  note  that〈f,g〉=
∑
n
′
j=1
β
j
f(x
′
j
), independent ofα
i
. Similarly, forg, note that〈f,g〉=
∑
n
i=1
α
i
f(x
i
),
this time independent ofβ
j
. This also shows that〈f,g〉is bilinear. Symme-
try follows because〈f,g〉=〈g,f〉, while the positive semi-definiteness ofk
implies that
〈f,f〉=
∑
i,j
α
i
α
j
k(x
i
,x
j
)≥0.(6.14)
Applying (6.13) shows that for all functions (6.12) we have
〈f,k(·,x)〉=f(x).(6.15)
In particular
〈
k(·,x),k(·,x
′
)
〉
=k(x,x
′
).(6.16)

6.4  Reproducing Kernel Hilbert Spaces163
In view of these properties,kis called a reproducing kernel. By using (6.15)
and the following property of positive semi-definite functions (problem 6.1)
k(x,x
′
)
2
≤k(x,x)·k(x
′
,x
′
)(6.17)
we can now write
|f(x)|
2
=|〈f,k(·,x)〉|≤k(x,x)·〈f,f〉.(6.18)
From  the  above  inequality,f=  0  whenever〈f,f〉=  0,  thus  establishing
〈·,·〉as a valid dot product. In fact, one can complete the space of functions
(6.12) in the norm corresponding to the dot product (6.13), and thus get a
Hilbert spaceH, called thereproducing kernel Hilbert Space (RKHS).
An alternate way to define a RKHS is as a Hilbert spaceHon functions
from some input spaceXtoRwith the property that for anyf∈Hand
x∈X,  the  point  evaluationsf→f(x)  are  continuous  (in  particular,  all
points valuesf(x) are well defined, which already distinguishes an RKHS
from manyL
2
Hilbert spaces). Given the point evaluation functional, one
can  then  construct  the  reproducing  kernel  using  the  Riesz  representation
theorem. The Moore-Aronszajn theorem states that, for every positive semi-
definite kernel onX×X, there exists a unique RKHS and vice versa.
We finish this section by noting that〈·,·〉is a positive semi-definite func-
tion in the vector space of functions (6.12). This follows directly from the
bilinearity of the dot product and (6.14) by which we can write for functions
f
1
,...,f
p
and coefficientsγ
1
,...,γ
p
∑
i
∑
j
γ
i
γ
j
〈f
i
,f
j
〉=
〈
∑
i
γ
i
f
i
,
∑
j
γ
j
f
j
〉
≥0.(6.19)
6.4.1  Hilbert Spaces
evaluation functionals, inner products
6.4.2  Theoretical Properties
Mercer’s theorem, positive semidefiniteness
6.4.3  Regularization
Representer theorem, regularization

1646  Kernels and Function Spaces
6.5  Banach Spaces
6.5.1  Properties
6.5.2  Norms and Convex Sets
-  smoothest  function  (L2)  -  smallest  coefficients  (L1)  -  structured  priors
(CAP formalism)
Problems
Problem 6.1Show that(6.17)holds for an arbitrary positive semi-definite
functionk.
Problem 6.2Show  that  the  inhomogeneous  polynomial  kernel(6.3)is  a
valid kernel and that it computes all monomials of degree up tod.
Problem 6.3 (k-spectrum kernel{2})Given two stringsxandx
′
show
how  one  can  compute  thek-spectrum  kernel  (section  6.1.1.5)  inO((|x|+
|x
′
|)k)time.Hint:You need to use a trie.

7
Linear Models
A hyperplane in a spaceHendowed with a dot product〈·,·〉is described by
the set
{x∈H|〈w,x〉+b= 0}(7.1)
wherew∈Handb∈R. Such a hyperplane naturally dividesHinto two
half-spaces:{x∈H|〈w,x〉+b≥0}and{x∈H|〈w,x〉+b <0},  and
hence  can  be  used  as  the  decision  boundary  of  a  binary  classifier.  In  this
chapter  we  will  study  a  number  of  algorithms  which  employ  such  linear
decision boundaries. Although such models look restrictive at first glance,
when combined with kernels (Chapter 6) they yield a large class of useful
algorithms.
All  the  algorithms  we  will  study  in  this  chapter  maximize  the  margin.
Given a setX={x
1
,...,x
m
}, the margin is the distance of the closest point
inXto the hyperplane (7.1). Elementary geometric arguments (Problem 7.1)
show that the distance of a pointx
i
to a hyperplane is given by|〈w,x
i
〉+
b|/‖w‖, and hence the margin is simply
min
i=1,...,m
|〈w,x
i
〉+b|
‖w‖
.(7.2)
Note that the parameterization of the hyperplane (7.1) is not unique; if we
multiply bothwandbby the same non-zero constant, then we obtain the
same hyperplane. One way to resolve this ambiguity is to set
min
i=1,...m
|〈w,x
i
〉+b|= 1.
In this case, the margin simply becomes 1/‖w‖. We postpone justification
of margin maximization for later and jump straight ahead to the description
of various algorithms.
7.1  Support Vector Classification
Consider  a  binary  classification  task,  where  we  are  given  a  training  set
{(x
1
,y
1
),...,(x
m
,y
m
)}withx
i
∈Handy
i
∈ {±1}.  Our  aim  is  to  find
a linear decision boundary parameterized by (w,b) such that〈w,x
i
〉+b≥0
165

1667  Linear Models
x
1
w
x
2
y
i
=−1
y
i
= +1
{x| 〈w,x〉+b=−1}
{x| 〈w,x〉+b= 1}
{x| 〈w,x〉+b= 0}
〈w,x
1
〉+b= +1
〈w,x
2
〉+b=−1
〈w,x
1
−x
2
〉= 2
〈
w
‖w‖
,x
1
−x
2
〉
=
2
‖w‖
Fig.  7.1.  A  linearly  separable  toy  binary  classification  problem  of  separating  the
diamonds from the circles. We normalize (w,b) to ensure that min
i=1,...m
|〈w,x
i
〉+
b|= 1. In this case, the margin is given by
1
‖w‖
as the calculation in the inset shows.
whenevery
i
= +1 and〈w,x
i
〉+b <0 whenevery
i
=−1. Furthermore, as dis-
cussed above, we fix the scaling ofwby requiring min
i=1,...m
|〈w,x
i
〉+b|= 1.
A compact way to write our desiderata is to requirey
i
(〈w,x
i
〉+b)≥1 for
alli(also see Figure 7.1). The problem of maximizing the margin therefore
reduces to
max
w,b
1
‖w‖
(7.3a)
s.t.y
i
(〈w,x
i
〉+b)≥1 for alli,(7.3b)
or equivalently
min
w,b
1
2
‖w‖
2
(7.4a)
s.t.y
i
(〈w,x
i
〉+b)≥1 for alli.(7.4b)
This is a constrained convex optimization problem with a quadratic objec-
tive function and linear constraints (see Section 3.3). In deriving (7.4) we
implicitly  assumed  that  the  data  is  linearly  separable,  that  is,  there  is  a
hyperplane which correctly classifies the training data. Such a classifier is
called  ahard  margin  classifier.  If  the  data  is  not  linearly  separable,  then
(7.4)  does  not  have  a  solution.  To  deal  with  this  situation  we  introduce

7.1  Support Vector Classification167
non-negative slack variablesξ
i
to relax the constraints:
y
i
(〈w,x
i
〉+b)≥1−ξ
i
.
Given anywandbthe constraints can now be satisfied by makingξ
i
large
enough. This renders the whole optimization problem useless. Therefore, one
has to penalize largeξ
i
. This is done via the following modified optimization
problem:
min
w,b,ξ
1
2
‖w‖
2
+
C
m
m
∑
i=1
ξ
i
(7.5a)
s.t.y
i
(〈w,x
i
〉+b)≥1−ξ
i
for alli(7.5b)
ξ
i
≥0,(7.5c)
whereC >0 is a penalty parameter. The resultant classifier is said to be a
soft margin classifier. By introducing non-negative Lagrange multipliersα
i
andβ
i
one can write the Lagrangian (see Section 3.3)
L(w,b,ξ,α,β) =
1
2
‖w‖
2
+
C
m
m
∑
i=1
ξ
i
+
m
∑
i=1
α
i
(1−ξ
i
−y
i
(〈w,x
i
〉+b))−
m
∑
i=1
β
i
ξ
i
.
Next take gradients with respect tow,bandξand set them to zero.
∇
w
L=w−
m
∑
i=1
α
i
y
i
x
i
= 0(7.6a)
∇
b
L=−
m
∑
i=1
α
i
y
i
= 0(7.6b)
∇
ξ
i
L=
C
m
−α
i
−β
i
= 0.(7.6c)
Substituting (7.6) into the Lagrangian and simplifying yields the dual ob-
jective function:
−
1
2
∑
i,j
y
i
y
j
α
i
α
j
〈x
i
,x
j
〉+
m
∑
i=1
α
i
,(7.7)
which needs to be maximized with respect toα. For notational convenience
we will minimize the negative of  (7.7) below. Next we turn our attention
to the dual constraints. Recall thatα
i
≥0 andβ
i
≥0, which in conjunc-
tion  with  (7.6c)  immediately  yields  0≤α
i
≤
C
m
.  Furthermore,  by  (7.6b)
∑
m
i=1
α
i
y
i
= 0. Putting everything together, the dual optimization problem

1687  Linear Models
boils down to
min
α
1
2
∑
i,j
y
i
y
j
α
i
α
j
〈x
i
,x
j
〉−
m
∑
i=1
α
i
(7.8a)
s.t.
m
∑
i=1
α
i
y
i
= 0(7.8b)
0≤α
i
≤
C
m
.(7.8c)
If we letHbe am×mmatrix with entriesH
ij
=y
i
y
j
〈x
i
,x
j
〉, whilee,α,
andybem-dimensional vectors whosei-th components are one,α
i
, andy
i
respectively, then the above dual can be compactly written as the following
Quadratic Program (QP) (Section 3.3.3):
min
α
1
2
α
>
Hα−α
>
e(7.9a)
s.t.α
>
y= 0(7.9b)
0≤α
i
≤
C
m
.(7.9c)
Before  turning  our  attention  to  algorithms  for  solving  (7.9),  a  number  of
observations are in order. First, note that computingHonly requires com-
puting dot products between training examples. If we map the input data to
a Reproducing Kernel Hilbert Space (RKHS) via a feature mapφ, then we
can still compute the entries ofHand solve for the optimalα. In this case,
H
ij
=y
i
y
j
〈φ(x
i
),φ(x
j
)〉=y
i
y
j
k(x
i
,x
j
),  wherekis  the  kernel  associated
with the RKHS. Given the optimalα, one can easily recover the decision
boundary. This is a direct consequence of (7.6a), which allows us to writew
as a linear combination of the training data:
w=
m
∑
i=1
α
i
y
i
φ(x
i
),
and hence the decision boundary as
〈w,x〉+b=
m
∑
i=1
α
i
y
i
k(x
i
,x) +b.(7.10)
By the KKT conditions (Section 3.3) we have
α
i
(1−ξ
i
−y
i
(〈w,x
i
〉+b)) = 0 andβ
i
ξ
i
= 0.
We now consider three cases fory
i
(〈w,x
i
〉+b) and the implications of the
KKT conditions (see Figure 7.2).

7.1  Support Vector Classification169
{x| 〈w,x〉+b=−1}
{x| 〈w,x〉+b= 1}
Fig. 7.2.  The picture depicts the well classified points (y
i
(〈w,x
i
〉+b)>1 in black,
the support vectorsy
i
(〈w,x
i
〉+b) = 1 in blue, and margin errorsy
i
(〈w,x
i
〉+b)<1
in red.
y
i
(〈w,x
i
〉+b)<1:In  this  case,ξ
i
>0,  and  hence  the  KKT  conditions
imply thatβ
i
= 0. Consequently,α
i
=
C
m
(see (7.6c)). Such points
are said to be margin errors.
y
i
(〈w,x
i
〉+b)>1:In this case,ξ
i
= 0, (1−ξ
i
−y
i
(〈w,x
i
〉+b))<0, and by
the KKT conditionsα
i
= 0. Such points are said to be well classified.
It is easy to see that the decision boundary (7.10) does not change
even if these points are removed from the training set.
y
i
(〈w,x
i
〉+b) =1:In this caseξ
i
= 0 andβ
i
≥0. Sinceα
i
is non-negative
and satisfies (7.6c) it follows that 0≤α
i
≤
C
m
. Such points are said
to be on the margin. They are also sometimes calledsupport vectors.
Since the support vectors satisfyy
i
(〈w,x
i
〉+b) = 1 andy
i
∈{±1}it follows
thatb=y
i
− 〈w,x
i
〉for  any  support  vectorx
i
.  However,  in  practice  to
recoverbwe average
b=y
i
−
∑
i
〈w,x
i
〉.(7.11)
over all support vectors, that is, pointsx
i
for which 0< α
i
<
C
m
. Because
it  uses  support  vectors,  the  overall  algorithm  is  called  C-Support  Vector
classifier or C-SV classifier for short.

1707  Linear Models
7.1.1  A Regularized Risk Minimization Viewpoint
A closer examination of (7.5) reveals thatξ
i
= 0 whenevery
i
(〈w,x
i
〉+b)>1.
On  the  other  hand,ξ
i
=  1−y
i
(〈w,x
i
〉+b)  whenevery
i
(〈w,x
i
〉+b)<
1.  In  short,ξ
i
=  max(0,1−y
i
(〈w,x
i
〉+b)).  Using  this  observation  one
can  eliminateξ
i
from  (7.5),  and  write  it  as  the  following  unconstrained
optimization problem:
min
w,b
1
2
‖w‖
2
+
C
m
m
∑
i=1
max(0,1−y
i
(〈w,x
i
〉+b)).(7.12)
Writing  (7.5)  as  (7.12)  is  particularly  revealing  because  it  shows  that  a
support vector classifier is nothing but a regularized risk minimizer. Here
the  regularizer  is  the  square  norm  of  the  decision  hyperplane
1
2
‖w‖
2
,  and
the loss function is the so-called binary hinge loss (Figure 7.3):
l(w,x,y) = max(0,1−y(〈w,x〉+b)).(7.13)
It  is  easy  to  verify  that  the  binary  hinge  loss  (7.13)  is  convex  but  non-
differentiable (see Figure 7.3) which renders the overall objective function
(7.12) to be convex but non-smooth. There are two different strategies to
minimize such an objective function. If minimizing (7.12) in the primal, one
can employ non-smooth convex optimizers such as bundle methods (Section
3.2.7). This yields addimensional problem wheredis the dimension ofx.
On the other hand, since (7.12) is strongly convex because of the presence
of  the
1
2
‖w‖
2
term,  its  Fenchel  dual  has  a  Lipschitz  continuous  gradient
(see Lemma 3.10). The dual problem ismdimensional and contains linear
constraints. This strategy is particularly attractive when the kernel trick is
used or wheneverdm. In fact, the dual problem obtained via Fenchel
duality is very related to the Quadratic programming problem (7.9) obtained
via Lagrange duality (problem 7.4).
7.1.2  An Exponential Family Interpretation
Our  motivating  arguments  for  deriving  the  SVM  algorithm  have  largely
been geometric. We now show that an equally elegant probabilistic interpre-
tation  also  exists.  Assuming  that  the  training  set{(x
1
,y
1
),...,(x
m
,y
m
)}
was drawn iid from some underlying distribution, and using the Bayes rule
(1.15) one can write the likelihood
p(θ|X,Y)∝p(θ)p(Y|X,θ) =p(θ)
m
∏
i=1
p(y
i
|x
i
,θ),(7.14)

7.1  Support Vector Classification171
y(〈w,x〉+b)
loss
Fig. 7.3.  The binary hinge loss. Note that the loss is convex but non-differentiable
at the kink point. Furthermore, it increases linearly as the distance from the decision
hyperplaney(〈w,x〉+b) decreases.
and hence the negative log-likelihood
−logp(θ|X,Y) =−
m
∑
i=1
logp(y
i
|x
i
,θ)−logp(θ) + const.(7.15)
In  the  absence  of  any  prior  knowledge  about  the  data,  we  choose  a  zero
mean unit variance isotropic normal distribution forp(θ). This yields
−logp(θ|X,Y) =
1
2
‖θ‖
2
−
m
∑
i=1
logp(y
i
|x
i
,θ) + const.(7.16)
The maximum aposteriori (MAP) estimate forθis obtained by minimizing
(7.16) with respect toθ. Given the optimalθ, we can predict the class label
at any givenxvia
y
∗
= argmax
y
p(y|x,θ).(7.17)
Of  course,  our  aim  is  not  just  to  maximizep(y
i
|x
i
,θ)  but  also  to  ensure
thatp(y|x
i
,θ) is small for ally6=y
i
. This, for instance, can be achieved by
requiring
p(y
i
|x
i
,θ)
p(y|x
i
,θ)
≥η,for ally6=y
i
and someη≥1.(7.18)
As we saw in Section 2.3 exponential families of distributions are rather flex-
ible modeling tools. We could, for instance, modelp(y
i
|x
i
,θ) as a conditional
exponential family distribution. Recall the definition:
p(y|x,θ) = exp (〈φ(x,y),θ〉−g(θ|x)).(7.19)

1727  Linear Models
Hereφ(x,y) is ajointfeature map which depends on both the input datax
and the labely, whileg(θ|x) is the log-partition function. Now (7.18) boils
down to
p(y
i
|x
i
,θ)
max
y6=y
i
p(y|x
i
,θ)
= exp
(〈
φ(x
i
,y
i
)−max
y6=y
i
φ(x
i
,y),θ
〉)
≥η.(7.20)
If we chooseηsuch that logη= 1, setφ(x,y) =
y
2
φ(x), and observe that
y∈{±1}we can rewrite (7.20) as
〈
y
i
2
φ(x
i
)−
(
−
y
i
2
)
φ(x
i
),θ
〉
=y
i
〈φ(x
i
),θ〉≥1.(7.21)
By replacing−logp(y
i
|x
i
,θ) in (7.16) with the condition (7.21) we obtain
the following objective function:
min
θ
1
2
‖θ‖
2
(7.22a)
s.t.y
i
〈φ(x
i
),θ〉≥1 for alli,(7.22b)
which  recovers  (7.4),  but  without  the  biasb.  The  prediction  function  is
recovered by noting that (7.17) specializes to
y
∗
= argmax
y∈{±1}
〈φ(x,y),θ〉= argmax
y∈{±1}
y
2
〈φ(x),θ〉= sign(〈φ(x),θ〉).(7.23)
As before, we can replace (7.21) by a linear penalty for constraint viola-
tion in order to recover (7.5). The quantity log
p(y
i
|x
i
,θ)
max
y6=y
i
p(y|x
i
,θ)
is sometimes
called  thelog-odds  ratio,  and  the  above  discussion  shows  that  SVMs  can
be interpreted as maximizing the log-odds ratio in the exponential family.
This interpretation will be developed further when we consider extensions of
SVMs to tackle multiclass, multilabel, and structured prediction problems.
7.1.3  Specialized Algorithms for Training SVMs
The main task in training SVMs boils down to solving  (7.9). Them×m
matrixHis usually dense and cannot be stored in memory. Decomposition
methods  are  designed  to  overcome  these  difficulties.  The  basic  idea  here
is  to  identify  and  update  a  smallworking  setBby  solving  a  small  sub-
problem at every iteration. Formally, letB⊂{1,...,m}be the working set
andα
B
be the corresponding sub-vector ofα. Define
 ̄
B={1,...,m}\B
andα
 ̄
B
analogously. In order to updateα
B
we need to solve the following

7.1  Support Vector Classification173
sub-problem of (7.9) obtained by freezingα
 ̄
B
:
min
α
B
1
2
[
α
>
B
α
>
 ̄
B
]
[
H
BB
H
B
 ̄
B
H
 ̄
BB
H
 ̄
B
 ̄
B
][
α
B
α
 ̄
B
]
−
[
α
>
B
α
>
 ̄
B
]
e(7.24a)
s.t.
[
α
>
B
α
>
 ̄
B
]
y= 0(7.24b)
0≤α
i
≤
C
m
for alli∈B.(7.24c)
Here,
[
H
BB
H
B
 ̄
B
H
 ̄
BB
H
 ̄
B
 ̄
B
]
is  a  permutation  of  the  matrixH.  By  eliminating
constant terms and rearranging, one can simplify the above problem to
min
α
B
1
2
α
>
B
H
BB
α
B
+α
>
B
(H
 ̄
BB
α
 ̄
B
−e)(7.25a)
s.t.α
>
B
y
B
=−α
>
 ̄
B
y
 ̄
B
(7.25b)
0≤α
i
≤
C
m
for alli∈B.(7.25c)
An extreme case of a decomposition method is the Sequential Minimal Op-
timization (SMO) algorithm of Platt [Pla99], which updates only two coef-
ficients per iteration. The advantage of this strategy as we will see below is
that the resultant sub-problem can be solved analytically. Without loss of
generality letB={i,j}, and defines=y
i
/y
j
,
[
c
i
c
j
]
= (H
 ̄
BB
α
 ̄
B
−e)
>
andd= (−α
>
 ̄
B
y
 ̄
B
/y
j
). Then (7.25) specializes to
min
α
i
,α
j
1
2
(H
ii
α
2
i
+H
jj
α
2
j
+ 2H
ij
α
j
α
i
) +c
i
α
i
+c
j
α
j
(7.26a)
s.t.sα
i
+α
j
=d(7.26b)
0≤α
i
,α
j
≤
C
m
.(7.26c)
This QP in two variables has an analytic solution.
Lemma 7.1 (Analytic solution of 2 variable QP)Define bounds
L=
{
max(0,
d−
C
m
s
)ifs >0
max(0,
d
s
)otherwise
(7.27)
H=
{
min(
C
m
,
d
s
)ifs >0
min(
C
m
,
d−
C
m
s
)otherwise,
(7.28)

1747  Linear Models
and auxiliary variables
χ= (H
ii
+H
jj
s
2
−2sH
ij
)and(7.29)
ρ= (c
j
s−c
i
−H
ij
d+H
jj
ds).(7.30)
The optimal value of(7.26)can be computed analytically as follows: Ifχ= 0
then
α
i
=
{
Lifρ <0
Hotherwise.
Ifχ >0, thenα
i
= max(L,min(H,ρ/χ)). In both cases,α
j
= (d−sα
i
).
ProofEliminate the equality constraint by settingα
j
= (d−sα
i
). Due to
the  constraint  0≤α
j
≤
C
m
it  follows  thatsα
i
=d−α
j
can  be  bounded
viad−
C
m
≤sα
i
≤d.  Combining  this  with  0≤α
i
≤
C
m
one  can  write
L≤α
i
≤HwhereLandHare given by (7.27) and (7.28) respectively.
Substitutingα
j
= (d−sα
i
) into the objective function, dropping the terms
which do not depend onα
i
, and simplifying by substitutingχandρyields
the following optimization problem inα
i
:
min
α
i
1
2
α
2
i
χ−α
i
ρ
s.t.L≤α
i
≤H.
First consider the case whenχ= 0. In this case,α
i
=Lifρ <0 otherwise
α
i
=H. On other hand, ifχ >0 then the unconstrained optimum of the
above optimization problem is given byρ/χ. The constrained optimum is
obtained  by  clipping  appropriately:  max(L,min(H,ρ/χ)).  This  concludes
the proof.
To complete the description of SMO we need a valid stopping criterion as
well as a scheme for selecting the working set at every iteration. In order
to derive a stopping criterion we will use the KKT gap, that is, the extent
to which the KKT conditions are violated. Towards this end introduce non-
negative Lagrange  multipliersb∈R,λ∈R
m
andμ∈R
m
and write the
Lagrangian of (7.9).
L(α,b,λ,μ) =
1
2
α
>
Hα−α
>
e+bα
>
y−λ
>
α+μ
>
(α−
C
m
e).(7.31)
If  we  letJ(α)  =
1
2
α
>
Hα−α
>
ebe  the  objective  function  and∇J(α)  =
Hα−eits gradient, then taking gradient of the Lagrangian with respect to
αand setting it to 0 shows that
∇J(α) +by=λ−μ.(7.32)

7.1  Support Vector Classification175
Furthermore, by the KKT conditions we have
λ
i
α
i
= 0 andμ
i
(
C
m
−α
i
) = 0,(7.33)
withλ
i
≥0  andμ
i
≥0.  Equations  (7.32)  and  (7.33)  can  be  compactly
rewritten as
∇J(α)
i
+by
i
≥0 ifα
i
= 0(7.34a)
∇J(α)
i
+by
i
≤0 ifα
i
=
C
m
(7.34b)
∇J(α)
i
+by
i
= 0 if 0< α
i
<
C
m
.(7.34c)
Sincey
i
∈{±1}, we can further rewrite (7.34) as
−y
i
∇J(α)
i
≤bfor alli∈I
up
−y
i
∇J(α)
i
≥bfor alli∈I
down
,
where the index setsI
up
andI
down
are defined as
I
up
={i:α
i
<
C
m
,y
i
= 1 orα
i
>0,y
i
=−1}(7.35a)
I
down
={i:α
i
<
C
m
,y
i
=−1 orα
i
>0,y
i
= 1}.(7.35b)
In summary, the KKT conditions imply thatαis a solution of  (7.9) if and
only if
m(α)≤M(α)
where
m(α) = max
i∈I
up
−y
i
∇J(α)
i
andM(α) =   min
i∈I
down
−y
i
∇J(α)
i
.(7.36)
Therefore, a natural stopping criterion is to stop when the KKT gap falls
below a desired tolerance, that is,
m(α)≤M(α) +.(7.37)
Finally, we turn our attention to the issue of working set selection. The
first order approximation to the objective functionJ(α) can be written as
J(α+d)≈J(α) +∇J(α)
>
d.
Since we are only interested in updating coefficients in the working setB
we setd
>
=
[
d
>
B
0
]
, in which case we can rewrite the above first order

1767  Linear Models
approximation as
∇J(α)
>
B
d
B
≈J(α+d)−J(α).
From among all possible directionsd
B
we wish to choose one which decreases
the  objective  function  the  most  while  maintaining  feasibility.  This  is  best
expressed as the following optimization problem:
min
d
B
∇J(α)
>
B
d
B
(7.38a)
s.t.y
>
B
d
B
= 0(7.38b)
d
i
≥0 ifα
i
= 0 andi∈B(7.38c)
d
i
≤0 ifα
i
=
C
m
andi∈B(7.38d)
−1≤d
i
≤1.(7.38e)
Here  (7.38b)  comes  fromy
>
(α+d)  =  0  andy
>
α=  0,  while  (7.38c)  and
(7.38d)  comes  from  0≤α
i
≤
C
m
.  Finally,  (7.38e)  prevents  the  objective
function from diverging to−∞. If we specialize (7.38) to SMO, we obtain
min
i,j
∇J(α)
i
d
i
+∇J(α)
j
d
j
(7.39a)
s.t.y
i
d
i
+y
j
d
j
= 0(7.39b)
d
k
≥0 ifα
k
= 0 andk∈{i,j}(7.39c)
d
k
≤0 ifα
k
=
C
m
andk∈{i,j}(7.39d)
−1≤d
k
≤1 fork∈{i,j}.(7.39e)
At  first  glance,  it  seems  that  choosing  the  optimaliandjfrom  the  set
{1,...,m}×{1,...m}requiresO(m
2
) effort. We now show thatO(m) effort
suffices.
Define  new  variables
ˆ
d
k
=y
k
d
k
fork∈ {i,j},  and  use  the  observation
y
k
∈{±1}to rewrite the objective function as
(−y
i
∇J(α)
i
+y
j
∇J(α)
j
)
ˆ
d
j
.
Consider  the  case−∇J(α)
i
y
i
≥ −∇J(α)
j
y
j
.  Because  of  the  constraints
(7.39c) and (7.39d) if we choosei∈I
up
andj∈I
down
, then
ˆ
d
j
=−1 and
ˆ
d
i
= 1 is feasible and the objective function attains a negative value. For
all other choices ofiandj(i,j∈I
up
;i,j∈I
down
;i∈I
down
andj∈I
up
)
the  objective  function  value  of  0  is  attained  by  setting
ˆ
d
i
=
ˆ
d
j
=  0.  The
case−∇J(α)
j
y
j
≥ −∇J(α)
i
y
i
is analogous. In summary, the optimization

7.2  Extensions177
problem (7.39) boils down to
min
i∈I
up
,j∈I
down
y
i
∇J(α)
i
−y
j
∇J(α)
j
= min
i∈I
up
y
i
∇J(α)
i
−max
j∈I
down
y
j
∇J(α)
j
,
which clearly can be solved inO(m) time. Comparison with (7.36) shows
that at every iteration of SMO we choose to update coefficientsα
i
andα
j
which maximally violate the KKT conditions.
7.2  Extensions
7.2.1  Theνtrick
In the soft margin formulation the parameterCis a trade-off between two
conflicting requirements namely maximizing the margin and minimizing the
training error. Unfortunately, this parameter is rather unintuitive and hence
difficult to tune. Theν-SVM was proposed to address this issue. As Theorem
7.3 below shows,νcontrols the number of support vectors and margin errors.
The primal problem for theν-SVM can be written as
min
w,b,ξ,ρ
1
2
‖w‖
2
−ρ+
1
νm
m
∑
i=1
ξ
i
(7.40a)
s.t.y
i
(〈w,x
i
〉+b)≥ρ−ξ
i
for alli(7.40b)
ξ
i
≥0,andρ≥0.(7.40c)
As before, if we write the Lagrangian by introducing non-negative Lagrange
multipliers, take gradients with respect to the primal variables and set them
to zero, and substitute the result back into the Lagrangian we obtain the
following dual:
min
α
1
2
∑
i,j
y
i
y
j
α
i
α
j
〈x
i
,x
j
〉(7.41a)
s.t.
m
∑
i=1
α
i
y
i
= 0(7.41b)
m
∑
i=1
α
i
≥1(7.41c)
0≤α
i
≤
1
νm
.(7.41d)
It turns out that the dual can be further simplified via the following lemma.

1787  Linear Models
Lemma 7.2Letν∈[0,1]and(7.41)be feasible. Then there is at least one
solutionαwhich satisfies
∑
i
α
i
= 1. Furthermore, if the final objective value
of(7.41)is non-zero then all solutions satisfy
∑
i
α
i
= 1.
ProofThe feasible region of  (7.41) is bounded, therefore if it is feasible
then there exists an optimal solution. Letαdenote this solution and assume
that
∑
i
α
i
>1. In this case we can define
 ̄α=
1
∑
j
α
j
α,
and easily check that   ̄αis also feasible. As before, letHdenote am×m
matrix withH
ij
=y
i
y
j
〈x
i
,x
j
〉. Sinceαis the optimal solution of  (7.41) it
follows that
1
2
α
>
Hα≤
1
2
 ̄α
>
H ̄α=
(
1
∑
j
α
j
)
2
1
2
α
>
Hα≤
1
2
α
>
Hα.
This implies that either
1
2
α
>
Hα= 0, in which case  ̄αis an optimal solution
with the desired property or
1
2
α
>
Hα6= 0, in which case all optimal solutions
satisfy
∑
i
α
i
= 1.
In  view  of  the  above  theorem  one  can  equivalently  replace  (7.41)  by  the
following simplified optimization problem with two equality constraints
min
α
1
2
∑
i,j
y
i
y
j
α
i
α
j
〈x
i
,x
j
〉(7.42a)
s.t.
m
∑
i=1
α
i
y
i
= 0(7.42b)
m
∑
i=1
α
i
= 1(7.42c)
0≤α
i
≤
1
νm
.(7.42d)
The following theorems, which we state without proof, explain the signif-
icance ofνand the connection betweenν-SVM and the soft margin formu-
lation.
Theorem 7.3Suppose  we  runν-SVM  with  kernelkon  some  data  and
obtainρ >0. Then
(i)νis  an  upper  bound  on  the  fraction  of  margin  errors,  that  is  points
for whichy
i
(〈w,x
i
〉+b
i
)< ρ.

7.2  Extensions179
(ii)νis  a  lower  bound  on  the  fraction  of  support  vectors,  that  is  points
for whichy
i
(〈w,x
i
〉+b
i
) =ρ.
(iii)Suppose the data(X,Y)were generated iid from a distributionp(x,y)
such  that  neitherp(x,y= +1)orp(x,y=−1)contain  any  discrete
components. Moreover, assume that the kernelkis analytic and non-
constant. With probability 1, asympotically,νequals both the fraction
of support vectors and fraction of margin errors.
Theorem 7.4If(7.40)leads to a decision function withρ >0, then(7.5)
withC=
1
ρ
leads to the same decision function.
7.2.2  Squared Hinge Loss
In binary classification, the actual loss which one would like to minimize is
the so-called 0-1 loss
l(w,x,y) =
{
0ify(〈w,x〉+b)≥1
1otherwise.
(7.43)
This loss is difficult to work with because it is non-convex (see Figure 7.4). In
y(〈w,x〉+b)
loss
Fig. 7.4.  The 0-1 loss which is non-convex and intractable is depicted in red. The
hinge loss is a convex upper bound to the 0-1 loss and shown in blue. The square
hinge loss is a differentiable convex upper bound to the 0-1 loss and is depicted in
green.
fact, it has been shown that finding the optimal (w,b) pair which minimizes
the 0-1 loss on a training dataset ofmlabeled points is NP hard [BDEL03].
Therefore various proxy functions such as the binary hinge loss (7.13) which
we discussed in Section 7.1.1 are used. Another popular proxy is the square

1807  Linear Models
hinge loss:
l(w,x,y) = max(0,1−y(〈w,x〉+b))
2
.(7.44)
Besides  being  a  proxy  for  the  0-1  loss,  the  squared  hinge  loss,  unlike  the
hinge loss, is also differentiable everywhere. This sometimes makes the opti-
mization in the primal easier. Just like in the case of the hinge loss one can
derive the dual of the regularized risk minimization problem and show that
it is a quadratic programming problem (problem 7.5).
7.2.3  Ramp Loss
The ramp loss
l(w,x,y) = min(1−s,max(0,1−y(〈w,x〉+b)))(7.45)
parameterized bys≤0 is another proxy for the 0-1 loss (see Figure 7.5).
Although  not  convex,  it  can  be  expressed  as  the  difference  of  two  convex
functions
l
conc
(w,x,y) = max(0,1−y(〈w,x〉+b)) and
l
cave
(w,x,y) = max(0,s−y(〈w,x〉+b)).
Therefore the Convex-Concave procedure (CCP) we discussed in Section
Fig.  7.5.  The  ramp  loss  depicted  here  withs=−0.3  can  be  viewed  as  the  sum
of  a  convex  function  namely  the  binary  hinge  loss  (left)  and  a  concave  function
min(0,1−y(〈w,x〉+b)) (right). Viewed alternatively, the ramp loss can be written
as the difference of two convex functions.
3.5.1 can be used to solve the resulting regularized risk minimization problem
with the ramp loss. Towards this end write
J(w) =
1
2
‖w‖
2
+
C
m
m
∑
i=1
l
conc
(w,x
i
,y
i
)
︸︷︷︸
J
conc
(w)
−
C
m
m
∑
i=1
l
cave
(w,x
i
,y
i
)
︸︷︷︸
J
cave
(w)
.(7.46)

7.3  Support Vector Regression181
Recall  that  at  every  iteration  of  the  CCP  we  replaceJ
cave
(w)  by  its  first
order Taylor approximation, computing which requires
∂
w
J(w) =
C
m
m
∑
i=1
∂
w
l
cave
(w,x
i
,y
i
).(7.47)
This in turn can be computed as
∂
w
l
cave
(w,x
i
,y
i
) =δ
i
y
i
x
i
withδ
i
=
{
−1ifs > y(〈w,x〉+b)
0otherwise.
(7.48)
Ignoring constant terms, each iteration of the CCP algorithm involves solv-
ing the following minimization problem (also see (3.134))
J(w) =
1
2
‖w‖
2
+
C
m
m
∑
i=1
l
conc
(w,x
i
,y
i
)−
(
C
m
m
∑
i=1
δ
i
y
i
x
i
)
w.(7.49)
Letδdenote a vector inR
m
with componentsδ
i
. Using the same notation
as in (7.9) we can write the following dual optimization problem which is
very closely related to the standard SVM dual (7.9) (see problem 7.6)
min
α
1
2
α
>
Hα−α
>
e(7.50a)
s.t.α
>
y= 0(7.50b)
−
C
m
δ≤α
i
≤
C
m
(e−δ).(7.50c)
In fact, this problem can be solved by a SMO solver with minor modifica-
tions. Putting everything together yields Algorithm 7.1.
Algorithm 7.1CCP for Ramp Loss
1:Initializeδ
0
andα
0
2:repeat
3:Solve (7.50) to findα
t+1
4:Computeδ
t+1
using (7.48)
5:untilδ
t+1
=δ
t
7.3  Support Vector Regression
As  opposed  to  classification  where  the  labelsy
i
are  binary  valued,  in  re-
gression they are real valued. Given a tolerance, our aim here is to find a

1827  Linear Models
y−(〈w,x〉+b)
loss

Fig.  7.6.  Theinsensitive  loss.  All  points  which  lie  within  thetube  shaded  in
gray incur zero loss while points outside incur a linear loss.
hyperplane parameterized by (w,b) such that
|y
i
−(〈w,x
i
〉+b)|≤.(7.51)
In other words, we want to find a hyperplane such that all the training data
lies within antube around the hyperplane. We may not always be able to
find such a hyperplane, hence we relax the above condition by introducing
slack variablesξ
+
i
andξ
−
i
and write the corresponding primal problem as
min
w,b,ξ
+
,ξ
−
1
2
‖w‖
2
+
C
m
m
∑
i=1
(ξ
+
i
+ξ
−
i
)(7.52a)
s.t.y
i
−(〈w,x
i
〉+b)≤+ξ
+
i
for alli(7.52b)
(〈w,x
i
〉+b)−y
i
≤+ξ
−
i
for alli(7.52c)
ξ
+
i
≥0,andξ
−
i
≥0.(7.52d)
The Lagrangian can be written by introducing non-negative Lagrange mul-
tipliersα
+
i
,α
−
i
,β
+
i
andβ
−
i
:
L(w,b,ξ
+
,ξ
−
,α
+
,α
−
,β
+
,β
−
) =
1
2
‖w‖
2
+
C
m
m
∑
i=1
(ξ
+
i
+ξ
−
i
)−
m
∑
i=1
(β
+
i
ξ
+
i
+β
−
i
ξ
−
i
)
+
m
∑
i=1
α
+
i
(y
i
−(〈w,x
i
〉+b)−−ξ
+
)
+
m
∑
i=1
α
−
i
((〈w,x
i
〉+b)−y
i
−−ξ
−
).

7.3  Support Vector Regression183
Taking gradients with respect to the primal variables and setting them to
0, we obtain the following conditions:
w=
m
∑
i=1
(α
+
i
−α
−
i
)x
i
(7.53)
m
∑
i=1
α
+
i
=
m
∑
i=1
α
−
i
(7.54)
α
+
i
+β
+
i
=
C
m
(7.55)
α
−
i
+β
−
i
=
C
m
.(7.56)
Noting thatα
{+,−}
i
,β
{+,−}
i
≥0 and substituting the above conditions into
the Lagrangian yields the dual
min
α
+
,α
−
1
2
∑
i,j
(α
+
i
−α
−
i
)(α
+
j
−α
−
j
)〈x
i
,x
j
〉(7.57a)
+
m
∑
i=1
(α
+
i
+α
−
i
)−
m
∑
i=1
y
i
(α
+
i
−α
−
i
)
s.t.
m
∑
i=1
α
+
i
=
m
∑
i=1
α
−
i
(7.57b)
0≤α
+
i
≤
C
m
(7.57c)
0≤α
−
i
≤
C
m
.(7.57d)
This is a quadratic programming problem with one equality constraint, and
hence  a  SMO  like  decomposition  method  can  be  derived  for  finding  the
optimal coefficientsα
+
andα
−
(Problem 7.7).
As a consequence of  (7.53), analogous to the classification case, one can
map the data via a feature mapφinto an RKHS with kernelkand recover
the decision boundaryf(x) =〈w,φ(x)〉+bvia
f(x) =
m
∑
i=1
(α
+
i
−α
−
i
)〈φ(x)
i
,φ(x)〉+b=
m
∑
i=1
(α
+
i
−α
−
i
)k(x
i
,x) +b.(7.58)
Finally, the KKT conditions
(
C
m
−α
+
i
)
ξ
+
i
= 0
(
C
m
−α
−
i
)
ξ
−
i
= 0 and
α
−
i
((〈w,x
i
〉+b)−y
i
−−ξ
−
) = 0α
+
i
(y
i
−(〈w,x
i
〉+b)−−ξ
+
) = 0,

1847  Linear Models
allow us to draw many useful conclusions:
•Whenever|y
i
−(〈w,x
i
〉+b)|< ,  this  implies  thatξ
+
i
=ξ
−
i
=α
+
i
=
α
−
i
=  0.  In  other  words,  points  which  lie  inside  thetube  around  the
hyperplane〈w,x〉+bdo  not  contribute  to  the  solution  thus  leading  to
sparse expansions in terms ofα.
•If (〈w,x
i
〉+b)−y
i
> we haveξ
−
i
>0 and thereforeα
−
i
=
C
m
. On the other
hand,ξ
+
= 0 andα
+
i
= 0. The casey
i
−(〈w,x
i
〉+b)> is symmetric
and yieldsξ
−
= 0,ξ
+
i
>0,α
+
i
=
C
m
, andα
−
i
= 0.
•Finally, if (〈w,x
i
〉+b)−y
i
=we haveξ
−
i
= 0 and 0≤α
−
i
≤
C
m
, while
ξ
+
=  0  andα
+
i
=  0.  Similarly,  wheny
i
−(〈w,x
i
〉+b)  =we  obtain
ξ
+
i
= 0, 0≤α
+
i
≤
C
m
,ξ
−
= 0 andα
−
i
= 0.
Note thatα
+
i
andα
−
i
are never simultaneously non-zero.
7.3.1  Incorporating General Loss Functions
Using the same reasoning as in Section 7.1.1 we can deduce from (7.52) that
the loss function of support vector regression is given by
l(w,x,y) = max(0,|y−〈w,x〉|−).(7.59)
It  turns  out  that  the  support  vector  regression  framework  can  be  easily
extended to handle other, more general, convex loss functions such as the
ones found in Table 7.1. Different losses have different properties and hence
lead to different estimators. For instance, the square loss leads to penalized
least squares (LS) regression, while the Laplace loss leads to the penalized
least absolute deviations (LAD) estimator. Huber’s loss on the other hand is
a combination of the penalized LS and LAD estimators, and the pinball loss
with parameterτ∈[0,1] is used to estimateτ-quantiles. Settingτ= 0.5
in the pinball loss leads to a scaled version of the Laplace loss. If we define
ξ=y−〈w,x〉, then it is easily verified that all these losses can all be written
as
l(w,x,y) =





l
+
(ξ−)ifξ > 
l
−
(−ξ−)ifξ < 
0ifξ∈[−,].
(7.60)
For all these different loss functions, the support vector regression formu-

7.3  Support Vector Regression185
lation can be written in a unified fashion as follows
min
w,b,ξ
+
,ξ
−
1
2
‖w‖
2
+
C
m
m
∑
i=1
l
+
(ξ
+
i
) +l
−
(ξ
−
i
)(7.61a)
s.t.y
i
−(〈w,x
i
〉+b)≤+ξ
+
i
for alli(7.61b)
(〈w,x
i
〉+b)−y
i
≤+ξ
−
i
for alli(7.61c)
ξ
+
i
≥0,andξ
−
i
≥0.(7.61d)
The dual in this case is given by
min
α
+
,α
−
1
2
∑
i,j
(α
+
i
−α
−
i
)(α
+
j
−α
−
j
)〈x
i
,x
j
〉(7.62a)
−
C
m
m
∑
i=1
T
+
(ξ
+
) +T
−
(ξ
−
) +
m
∑
i=1
(α
+
i
+α
−
i
)−
m
∑
i=1
y
i
(α
+
i
−α
−
i
)
s.t.
m
∑
i=1
α
+
i
=
m
∑
i=1
α
−
i
(7.62b)
0≤α
{+,−}
i
≤
C
m
∂
ξ
l
{+,−}
(ξ
{+,−}
i
)(7.62c)
0≤ξ
{+,−}
i
(7.62d)
ξ
{+,−}
i
= inf
{
ξ
{+,−}
|
C
m
∂
ξ
l
{+,−}
≥α
{+,−}
i
}
.(7.62e)
HereT
+
(ξ) =l
+
(ξ)−ξ∂
ξ
l
+
(ξ) andT
−
(ξ) =l
−
(ξ)−ξ∂
ξ
l
−
(ξ). We now show
how (7.62) can be specialized to the pinball loss. Clearly,l
+
(ξ) =τξwhile
l
−
(−ξ) = (τ−1)ξ, and hencel
−
(ξ) = (1−τ)ξ. Therefore,T
+
(ξ) = (τ−1)ξ−
ξ(τ−1) = 0. SimilarlyT
−
(ξ) = 0. Since∂
ξ
l
+
(ξ) =τand∂
ξ
l
−
(ξ) = (1−τ)
for  allξ≥0,  it  follows  that  the  bounds  onα
{+,−}
can  be  computed  as
0≤α
+
i
≤
C
m
τand  0≤α
−
i
≤
C
m
(1−τ).  If  we  denoteα=α
+
−α
−
and
Table 7.1.Various loss functions which can be used in support vector
regression. For brevity we denotey−〈w,x〉asξand write the loss
l(w,x,y)in terms ofξ.
-insensitive lossmax(0,|ξ|−)
Laplace loss|ξ|
Square loss
1
2
|ξ|
2
Huber’s robust loss
{
1
2σ
ξ
2
if|ξ|≤σ
|ξ|−
σ
2
otherwise
Pinball loss
{
τξifξ≥0
(τ−1)ξotherwise.

1867  Linear Models
observe that= 0 for the pinball loss then (7.62) specializes as follows:
min
α
1
2
∑
i,j
α
i
α
j
〈x
i
,x
j
〉−
m
∑
i=1
y
i
α
i
(7.63a)
s.t.
m
∑
i=1
α
i
= 0(7.63b)
C
m
(τ−1)≤α
i
≤
C
m
τ.(7.63c)
Similar specializations of (7.62) for other loss functions in Table 7.1 can be
derived.
7.3.2  Incorporating theνTrick
One  can  also  incorporate  theνtrick  into  support  vector  regression.  The
primal problem obtained after incorporating theνtrick can be written as
min
w,b,ξ
+
,ξ
−
,
1
2
‖w‖
2
+
(
+
1
νm
m
∑
i=1
(ξ
+
i
+ξ
−
i
)
)
(7.64a)
s.t.    (〈w,x
i
〉+b)−y
i
≤+ξ
+
i
for alli(7.64b)
y
i
−(〈w,x
i
〉+b)≤+ξ
−
i
for alli(7.64c)
ξ
+
i
≥0,ξ
−
i
≥0,and≥0.(7.64d)
Proceeding as before we obtain the following simplified dual
min
α
+
,α
−
1
2
∑
i,j
(α
−
i
−α
+
i
)(α
−
j
−α
+
j
)〈x
i
,x
j
〉−
m
∑
i=1
y
i
(α
−
i
−α
+
i
)(7.65a)
s.t.
m
∑
i=1
(α
−
i
−α
+
i
) = 0(7.65b)
m
∑
i=1
(α
−
i
+α
+
i
) = 1(7.65c)
0≤α
+
i
≤
1
νm
(7.65d)
0≤α
−
i
≤
1
νm
.(7.65e)
7.4  Novelty Detection
The large margin approach can also be adapted to perform novelty detection
or quantile estimation. Novelty detection is an unsupervised task where one

7.4  Novelty Detection187
is interested in flagging a small fraction of the inputX={x
1
,...,x
m
}as
atypical or novel. It can be viewed as a special case of the quantile estimation
task, where we are interested in estimating asimplesetCsuch thatPr(x∈
C)≥μfor  someμ∈[0,1].  One  way  to  measure  simplicity  is  to  use  the
volume  of  the  set.  Formally,  if|C|denotes  the  volume  of  a  set,  then  the
quantile estimation task is to estimate
arginf{|C|s.t.Pr(x∈C)≥μ}.(7.66)
Given the input dataXone can compute the empirical density
ˆp(x) =
{
1
m
ifx∈X
0otherwise,
and  estimate  its  (not  necessarily  unique)μ-quantiles.  Unfortunately,  such
estimates are very brittle and do not generalize well to unseen data. One
possible way to address this issue is to restrictCto be simple subsets such
as  spheres  or  half  spaces.  In  other  words,  we  estimate  simple  sets  which
containμfraction  of  the  dataset.  For  our  purposes,  we  specifically  work
with half-spaces defined by hyperplanes. While half-spaces may seem rather
restrictive  remember  that  the  kernel  trick  can  be  used  to  map  data  into
a  high-dimensional  space;  half-spaces  in  the  mapped  space  correspond  to
non-linear decision boundaries in the input space. Furthermore, instead of
explicitly identifyingCwe will learn an indicator function forC, that is, a
functionfwhich takes on values−1 insideCand−1 elsewhere.
With
1
2
‖w‖
2
as a regularizer, the problem of estimating a hyperplane such
that a large fraction of the points in the input dataXlie on one of its sides
can be written as:
min
w,ξ,ρ
1
2
‖w‖
2
+
1
νm
m
∑
i=1
ξ
i
−ρ(7.67a)
s.t.〈w,x
i
〉≥ρ−ξ
i
for alli(7.67b)
ξ
i
≥0.(7.67c)
Clearly, we wantρto be as large as possible so that the volume of the half-
space〈w,x〉≥ρis minimized. Furthermore,ν∈[0,1] is a parameter which
is analogous toνwe introduced for theν-SVM earlier. Roughly speaking,
it denotes the fraction of input data for which〈w,x
i
〉 ≤ρ. An alternative
interpretation of  (7.67) is to assume that we are separating the data setX
from the origin (See Figure 7.7 for an illustration). Therefore, this method
is also widely known as the one-class SVM.

1887  Linear Models
Fig. 7.7.  The novelty detection problem can be viewed as finding a large margin
hyperplane which separatesνfraction of the data points away from the origin.
The  Lagrangian  of  (7.67)  can  be  written  by  introducing  non-negative
Lagrange multipliersα
i
, andβ
i
:
L(w,ξ,ρ,α,β) =
1
2
‖w‖
2
+
1
νm
m
∑
i=1
ξ
i
−ρ+
m
∑
i=1
α
i
(ρ−ξ
i
−〈w,x
i
〉)−
m
∑
i=1
β
i
ξ
i
.
By taking gradients with respect to the primal variables and setting them
to 0 we obtain
w=
m
∑
i=1
α
i
x
i
(7.68)
α
i
=
1
νm
−β
i
≤
1
νm
(7.69)
m
∑
i=1
α
i
= 1.(7.70)
Noting thatα
i
,β
i
≥0 and substituting the above conditions into the La-
grangian yields the dual
min
α
1
2
∑
i,j
α
i
α
j
〈x
i
,x
j
〉(7.71a)
s.t.  0≤α
i
≤
1
νm
(7.71b)
m
∑
i=1
α
i
= 1.(7.71c)

7.5  Margins and Probability189
This  can  easily  be  solved  by  a  straightforward  modification  of  the  SMO
algorithm (see Section 7.1.3 and Problem 7.7). Like in the previous sections,
an analysis of the KKT conditions shows that 0< αif and only if〈w,x
i
〉≤ρ;
such points are called support vectors. As before, we can replace〈x
i
,x
j
〉by
a kernelk(x
i
,x
j
) to transform half-spaces in the feature space to non-linear
shapes in the input space. The following theorem explains the significance
of the parameterν.
Theorem 7.5Assume that the solution of(7.71)satisfiesρ6= 0, then the
following statements hold:
(i)νis an upper bound on the fraction of support vectors, that is points
for which〈w,x
i
〉≤ρ.
(ii)Suppose the dataXwere generated independently from a distribution
p(x)which does not contain discrete components. Moreover, assume
that  the  kernelkis  analytic  and  non-constant.  With  probability  1,
asympotically,νequals the fraction of support vectors.
7.5  Margins and Probability
discuss  the  connection  between  probabilistic  models  and  linear  classifiers.
issues of consistency, optimization, efficiency, etc.
7.6  Beyond Binary Classification
In contrast to binary classification where there are only two possible ways
to label a training sample, in some of the extensions we discuss below each
training  sample  may  be  associated  with  one  or  more  ofkpossible  labels.
Therefore, we will use the decision function
y
∗
=  argmax
y∈{1,...,k}
f(x,y) wheref(x,y) =〈φ(x,y),w〉.(7.72)
Recall  that  the  joint  feature  mapφ(x,y)  was  introduced  in  section  7.1.2.
One way to interpret the above equation is to viewf(x,y) as a compatibility
score between instancexand labely; we assign the label with the highest
compatibility  score  tox.  There  are  a  number  of  extensions  of  the  binary
hinge loss (7.13) which can be used to estimate this score function. In all
these cases the objective function is written as
min
w
J(w) :=
λ
2
‖w‖
2
+
1
m
m
∑
i=1
l(w,x
i
,y
i
).(7.73)

1907  Linear Models
Hereλis a scalar which trades off the regularizer
1
2
‖w‖
2
with the empirical
risk
1
m
∑
m
i=1
l(w,x
i
,y
i
). Plugging in different loss functions yields classifiers
for different settings. Two strategies exist for finding the optimalw. Just
like  in  the  binary  SVM  case,  one  can  compute  and  maximize  the  dual  of
(7.73). However, the number of dual variables becomesm|Y|, wheremis the
number of training points and|Y|denotes the size of the label set. The second
strategy is to optimize (7.73) directly. However, the loss functions we discuss
below are non-smooth, therefore non-smooth optimization algorithms such
as bundle methods (section 3.2.7) need to be used.
7.6.1  Multiclass Classification
In multiclass classification a training example is labeled with one ofkpos-
sible labels, that is,Y={1,...,k}. We discuss two different extensions of
the binary hinge loss to the multiclass setting. It can easily be verified that
settingY={±1}andφ(x,y) =
y
2
φ(x) recovers the binary hinge loss in both
cases.
7.6.1.1  Additive Multiclass Hinge Loss
A  natural  generalization  of  the  binary  hinge  loss  is  to  penalize  all  labels
which have been misclassified. The loss can now be written as
l(w,x,y) =
∑
y
′
6=y
max
(
0,1−(
〈
φ(x,y)−φ(x,y
′
),w
〉
)
)
.(7.74)
7.6.1.2  Maximum Multiclass Hinge Loss
Another variant of (7.13) penalizes only the maximally violating label:
l(w,x,y) := max
(
0,max
y
′
6=y
(1−
〈
φ(x,y)−φ(x,y
′
),w
〉
)
)
.(7.75)
Note that both (7.74) and (7.75) are zero whenever
f(x,y) =〈φ(x,y),w〉≥1 + max
y
′
6=y
〈
φ(x,y
′
),w
〉
= 1 + max
y
′
6=y
f(x,y
′
).(7.76)
In other words, they both ensure an adequate margin of separation, in this
case  1,  between  the  score  of  the  true  labelf(x,y)  and  every  other  label
f(x,y
′
). However, they differ in the way they penalize violators, that is, la-
belsy
′
6=yfor whichf(x,y)≤1 +f(x,y
′
). In one case we linearly penalize
the violators and sum up their contributions while in the other case we lin-
early penalize only the maximum violator. In fact, (7.75) can be interpreted

7.6  Beyond Binary Classification191
as the log odds ratio in the exponential family. Towards this end chooseη
such that logη= 1 and rewrite (7.20):
log
p(y|x,w)
max
y
′
6=y
p(y
′
|x,w)
=
〈
φ(x,y)−max
y
′
6=y
φ(x,y
′
),w
〉
≥1.
Rearranging yields (7.76).
7.6.2  Multilabel Classification
In multilabel classification one or more ofkpossible labels are assigned to
a training example. Just like in the multiclass case two different losses can
be defined.
7.6.2.1  Additive Multilabel Hinge Loss
If we letY
x
⊆Ydenote the labels assigned tox, and generalize the hinge
loss to penalize all labelsy
′
/∈Y
x
which have been assigned higher score than
somey∈Y
x
, then the loss can be written as
l(w,x,y) =
∑
y∈Y
x
andy
′
/∈Y
x
max
(
0,1−(
〈
φ(x,y)−φ(x,y
′
),w
〉
)
)
.(7.77)
7.6.2.2  Maximum Multilabel Hinge Loss
Another variant only penalizes the maximum violating pair. In this case the
loss can be written as
l(w,x,y) = max
(
0,max
y∈Y
x
,y
′
/∈Y
x
[
1−
(〈
φ(x,y)−φ(x,y
′
),w
〉)]
)
.(7.78)
One can immediately verify that specializing the above losses to the mul-
ticlass  case  recovers  (7.74)  and  (7.75)  respectively,  while  the  binary  case
recovers (7.13). The above losses are zero only when
min
y∈Y
x
f(x,y) = min
y∈Y
x
〈φ(x,y),w〉≥1 + max
y
′
/∈Y
x
〈
φ(x,y
′
),w
〉
= 1 + max
y
′
/∈Y
x
f(x,y
′
).
This  can  be  interpreted  as  follows:  The  losses  ensure  that  all  the  labels
assigned toxhave larger scores compared to labels not assigned toxwith
the margin of separation of at least 1.
Although  the  above  loss  functions  are  compatible  with  multiple  labels,
the  prediction  function  argmax
y
f(x,y)  only  takes  into  account  the  label
with the highest score. This is a significant drawback of such models, which
can  be  overcome  by  using  a  multiclass  approach  instead.  Let|Y|be  the
size of the label set andz∈R
|Y|
denote a vector with±1 entries. We set

1927  Linear Models
z
y
= +1 if they∈Y
x
andz
y
=−1 otherwise, and use the multiclass loss
(7.75) onz. To predict we computez
∗
= argmax
z
f(x,z) and assign tox
the  labels  corresponding  to  components  ofz
∗
which  are  +1.  Sincezcan
take on 2
|Y|
possible values, this approach is not feasible if|Y|is large. To
tackle such problems, and to further reduce the computational complexity
we assume that the labels correlations are captured via a|Y|×|Y|positive
semi-definite  matrixP,  andφ(x,y)  can  be  written  asφ(x)⊗Py.  Here⊗
denotes  the  Kronecker  product.  Furthermore,  we  express  the  vectorwas
an×|Y|matrixW,  wherendenotes  the  dimension  ofφ(x).  With  these
assumptions〈φ(x)⊗P(z−z
′
),w〉can be rewritten as
〈
φ(x)
>
WP,(z−z
′
)
〉
=
∑
i
[
φ(x)
>
WP
]
i
(z
i
−z
′
i
),
and (7.78) specializes to
l(w,x,z) := max
(
0,
(
1−
∑
i
min
z
′
i
6=z
i
[
φ(x)
>
WP
]
i
(z
i
−z
′
i
)
))
.(7.79)
A analogous specialization of  (7.77) can also be derived wherein the mini-
mum is replaced by a summation. Since the minimum (or summation as the
case may be) is over|Y|possible labels, computing the loss is tractable even
if the set of labelsYis large.
7.6.3  Ordinal Regression and Ranking
We  can  generalize  our  above  discussion  to  consider  slightly  more  general
ranking problems. Denote byYthe set of all directed acyclic graphs onN
nodes. The presence of an edge (i,j) iny∈Yindicates thatiis preferred
toj. The goal is to find a functionf(x,i) which imposes a total order on
{1,...,N}which is in close agreement withy. Specifically, if the estimation
error is given by the number of subgraphs ofywhich are in disagreement
with the total order imposed byf, then the additive version of the loss can
be written as
l(w,x,y) =
∑
G∈A(y)
max
(i,j)∈G
(0,1−(f(x,i)−f(x,j))),(7.80)
whereA(y) denotes the set of all possible subgraphs ofy. The maximum
margin version, on the other hand, is given by
l(w,x,y) =   max
G∈A(y)
max
(i,j)∈G
(0,1−(f(x,i)−f(x,j))).(7.81)

7.7  Large Margin Classifiers with Structure193
In other words, we test for each subgraphGofyif the ranking imposed byG
is satisfied byf. Selecting specific types of directed acyclic graphs recovers
the multiclass and multilabel settings (problem 7.9).
7.7  Large Margin Classifiers with Structure
7.7.1  Margin
define margin pictures
7.7.2  Penalized Margin
different types of loss, rescaling
7.7.3  Nonconvex Losses
the max - max loss
7.8  Applications
7.8.1  Sequence Annotation
7.8.2  Matching
7.8.3  Ranking
7.8.4  Shortest Path Planning
7.8.5  Image Annotation
7.8.6  Contingency Table Loss
7.9  Optimization
7.9.1  Column Generation
subdifferentials
7.9.2  Bundle Methods
7.9.3  Overrelaxation in the Dual
when we cannot do things exactly

1947  Linear Models
7.10  CRFs vs Structured Large Margin Models
7.10.1  Loss Function
7.10.2  Dual Connections
7.10.3  Optimization
Problems
Problem 7.1 (Deriving the Margin{1})Show  that  the  distance  of  a
pointx
i
to  a  hyperplaneH={x|〈w,x〉+b= 0}is  given  by|〈w,x
i
〉+
b|/‖w‖.
Problem 7.2 (SVM without Bias{1})A homogeneous hyperplane is one
which passes through the origin, that is,
H={x|〈w,x〉= 0}.(7.82)
If we devise a soft margin classifier which uses the homogeneous hyperplane
as a decision boundary, then the corresponding primal optimization problem
can be written as follows:
min
w,ξ
1
2
‖w‖
2
+C
m
∑
i=1
ξ
i
(7.83a)
s.t.y
i
〈w,x
i
〉≥1−ξ
i
for alli(7.83b)
ξ
i
≥0,(7.83c)
Derive  the  dual  of(7.83)and  contrast  it  with(7.9).  What  changes  to  the
SMO algorithm would you make to solve this dual?
Problem 7.3 (Deriving the simplifiedν-SVM dual{2})In Lemma 7.2
we  used(7.41)to  show  that  the  constraint
∑
i
α
i
≥1can  be  replaced  by
∑
i
α
i
= 1. Show that an equivalent way to arrive at the same conclusion is
by arguing that the constraintρ≥0is redundant in the primal(7.40).Hint:
Observe that wheneverρ <0the objective function is always non-negative.
On  the  other  hand,  settingw=ξ=b=ρ= 0yields  an  objective  function
value of0.
Problem 7.4 (Fenchel and Lagrange Duals{2})We  derived  the  La-
grange dual of(7.12)in Section 7.1 and showed that it is(7.9). Derive the
Fenchel  dual  of(7.12)and  relate  it  to(7.9).Hint:See  theorem  3.3.5  of
[BL00].

7.10  CRFs vs Structured Large Margin Models195
Problem 7.5 (Dual of the square hinge loss{1})The analog of(7.5)
when working with the square hinge loss is the following
min
w,b,ξ
1
2
‖w‖
2
+
C
m
m
∑
i=1
ξ
2
i
(7.84a)
s.t.y
i
(〈w,x
i
〉+b)≥1−ξ
i
for alli(7.84b)
ξ
i
≥0,(7.84c)
Derive  the  Lagrange  dual  of  the  above  optimization  problem  and  show  that
it a Quadratic Programming problem.
Problem 7.6 (Dual of the ramp loss{1})Derive the Lagrange dual of
(7.49)and show that it the Quadratic Programming problem(7.50).
Problem 7.7 (SMO for various SVM formulations{2})Derive an SMO
like decomposition algorithm for solving the dual of the following problems:
•ν-SVM(7.41).
•SV regression(7.57).
•SV novelty detection(7.71).
Problem 7.8 (Novelty detection with Balls{2})In Section 7.4 we as-
sumed that we wanted to estimate a halfspace which contains a major frac-
tion  of  the  input  data.  An  alternative  approach  is  to  use  balls,  that  is,  we
estimate a ball of small radius in feature space which encloses a majority of
the input data. Write the corresponding optimization problem and its dual.
Show that if the kernel is translation invariant, that is,k(x,x
′
)depends only
on‖x−x
′
‖then the optimization problem with balls is equivalent to(7.71).
Explain why this happens geometrically.
Problem 7.9 (Multiclass and Multilabel loss from Ranking Loss{1})
Show  how  the  multiclass  (resp.  multilabel)  losses(7.74)and(7.75)(resp.
(7.77)and(7.79))  can  be  derived  as  special  cases  of(7.80)and(7.81)re-
spectively.
Problem 7.10Invariances (basic loss)
Problem 7.11Polynomial transformations - SDP constraints



Appendix 1
Linear Algebra and Functional Analysis
A1.1  Johnson Lindenstrauss Lemma
Lemma 1.1 (Johnson Lindenstrauss)LetXbe a set ofnpoints inR
d
represented as an×dmatrixA. Given,β >0let
k≥
4 + 2β

2
/2−
3
/3
logn(1.1)
be a positive integer. Construct ad×krandom matrixRwith independent
standard normal random variables, that is,R
ij
∼N(0,1), and let
E=
1
√
k
AR.(1.2)
Definef:R
d
→R
k
as  the  function  which  maps  the  rows  ofAto  the  rows
ofE. With probability at least1−n
−β
, for allu,v∈Xwe have
(1−)‖u−v‖
2
≤‖f(u)−f(v)‖
2
≤(1 +)‖u−v‖
2
.(1.3)
Our proof presentation by and large follows [?]. We first show that
Lemma 1.2For any arbitrary vectorα∈R
d
letq
i
denote thei-th compo-
nent off(α). Thenq
i
∼N(0,‖α‖
2
/k)and hence
E
[
‖f(α)‖
2
]
=
k
∑
i=1
E
[
q
2
i
]
=‖α‖
2
.(1.4)
In other words, the expected length of vectors are preserved even after em-
bedding them in akdimensional space. Next we show that the lengths of
the embedded vectors are tightly concentrated around their mean.
Lemma 1.3For any >0and any unit vectorα∈R
d
we have
Pr
(
‖f(α)‖
2
>1 +
)
<exp
(
−
k
2
(

2
/2−
3
/3
)
)
(1.5)
Pr
(
‖f(α)‖
2
<1−
)
<exp
(
−
k
2
(

2
/2−
3
/3
)
)
.(1.6)
197

1981  Linear Algebra and Functional Analysis
Corollary 1.4If we choosekas in(1.1)then for anyα∈R
d
we have
Pr
(
(1−)‖α‖
2
≤‖f(α)‖
2
≤(1 +)‖α‖
2
)
≥1−
2
n
2+β
.(1.7)
ProofFollows immediately from Lemma 1.3 by setting
2 exp
(
−
k
2
(

2
/2−
3
/3
)
)
≤
2
n
2+β
,
and solving fork.
There are
(
n
2
)
pairs of vectorsu,vinX, and their corresponding distances
‖u−v‖are  preserved  within  1±factor  as  shown  by  the  above  lemma.
Therefore, the probability of not satisfying (1.3) is bounded by
(
n
2
)
·
2
n
2+β
<
1/n
β
as claimed in the Johnson Lindenstrauss Lemma. All that remains is
to prove Lemma 1.2 and 1.3.
Proof(Lemma 1.2). Sinceq
i
=
1
√
k
∑
j
R
ij
α
j
is a linear combination of stan-
dard normal random variablesR
ij
it follows thatq
i
is normally distributed.
To compute the mean note that
E[q
i
] =
1
√
k
∑
j
α
j
E[R
ij
] = 0.
SinceR
ij
are independent zero mean unit variance random variables,E[R
ij
R
il
] =
1 ifj=land 0 otherwise. Using this
E
[
q
2
i
]
=
1
k
E


d
∑
j=1
R
ij
α
j


2
=
1
k
d
∑
j=1
d
∑
l=1
α
j
α
l
E[R
ij
R
il
] =
1
k
d
∑
j=1
α
2
j
=
1
k
‖α‖
2
.
Proof(Lemma 1.3). Clearly, for allλ
Pr
[
‖f(α)‖
2
>1 +
]
=Pr
[
exp
(
λ‖f(α)‖
2
)
>exp(λ(1 +))
]
.

A1.1  Johnson Lindenstrauss Lemma199
Using Markov’s inequality (Pr[X≥a]≤E[X]/a) we obtain
Pr
[
exp
(
λ‖f(α)‖
2
)
>exp(λ(1 +))
]
≤
E
[
exp
(
λ‖f(α)‖
2
)]
exp(λ(1 +))
=
E
[
exp
(
λ
∑
k
i=1
q
2
i
)]
exp(λ(1 +))
=
E
[
∏
k
i=1
exp
(
λq
2
i
)
]
exp(λ(1 +))
=
(
E
[
exp
(
λq
2
i
)]
exp
(
λ
k
(1 +)
)
)
k
.(1.8)
The last equality is because theq
i
’s are i.i.d. Sinceαis a unit vector, from
the previous lemmaq
i
∼N(0,1/k). Therefore,kq
2
i
is aχ
2
random variable
with moment generating function
E
[
exp
(
λq
2
i
)]
=E
[
exp
(
λ
k
kq
2
i
)]
=
1
√
1−
2λ
k
.
Plugging this into (1.8)
Pr
[
exp
(
λ‖f(α)‖
2
)
>exp (λ(1 +))
]
≤


exp
(
−
λ
k
(1 +)
)
√
1−
2λ
k


k
.
Settingλ=
k
2(1+)
in the above inequality and simplifying
Pr
[
exp
(
λ‖f(α)‖
2
)
>exp(λ(1 +))
]
≤(exp(−)(1 +))
k/2
.
Using the inequality
log(1 +)< −
2
/2 +
3
/3
we can write
Pr
[
exp
(
λ‖f(α)‖
2
)
>exp(λ(1 +))
]
≤exp
(
−
k
2
(

2
/2−
3
/3
)
)
.
This proves (1.5). To prove (1.6) we need to repeat the above steps and use
the inequality
log(1−)<−−
2
/2.
This is left as an exercise to the reader.

2001  Linear Algebra and Functional Analysis
A1.2  Spectral Properties of Matrices
A1.2.1  Basics
A1.2.2  Special Matrices
unitary, hermitean, positive semidefinite
A1.2.3  Normal Forms
Jacobi
A1.3  Functional Analysis
A1.3.1  Norms and Metrics
vector space, norm, triangle inequality
A1.3.2  Banach Spaces
normed vector space, evaluation functionals, examples, dual space
A1.3.3  Hilbert Spaces
symmetric inner product
A1.3.4  Operators
spectrum, norm, bounded, unbounded operators
A1.4  Fourier Analysis
A1.4.1  Basics
A1.4.2  Operators

Appendix 2
Conjugate Distributions
201

2022  Conjugate Distributions
Binomial — Beta
φ(x) =x
e
h(nν,n)
=
Γ(nν+ 1)Γ(n(1−ν) + 1)
Γ(n+ 2)
=B(nν+ 1,n(1−ν) + 1)
In traditional notation one represents the conjugate as
p(z;α,β) =
Γ(α+β)
Γ(α)Γ(β)
z
α−1
(1−z)
β−1
whereα=nν+ 1 andβ=n(1−bν) + 1.
Multinomial — Dirichlet
φ(x) =e
x
e
h(nν,n)
=
∏
d
i=1
Γ(nν
i
+ 1)
Γ(n+d)
In traditional notation one represents the conjugate as
p(z;α) =
Γ(
∑
d
i=1
α
i
)
∏
d
i=1
Γ(α
i
)
d
∏
i=1
z
α
i
−1
i
whereα
i
=nν
i
+ 1
Poisson — Gamma
φ(x) =x
e
h(nν,n)
=n
−nν
Γ(nν)
In traditional notation one represents the conjugate as
p(z;α) =β
−α
Γ(α)z
α−1
e
−βx
whereα=nνandβ=n.
•Multinomial / Binomial
•Gaussian
•Laplace
•Poisson
•Dirichlet
•Wishart
•Student-t
•Beta
•Gamma

Appendix 3
Loss Functions
A3.1  Loss Functions
A multitude of loss functions are commonly used to derive seemingly differ-
ent algorithms. This often blurs the similarities as well as subtle differences
between them, often for historic reasons: Each new loss is typically accompa-
nied by at least one publication dedicated to it. In many cases, the loss is not
spelled out explicitly either but instead, it is only given by means of a con-
strained optimization problem. A case in point are the papers introducing
(binary) hinge loss [BM92, CV95] and structured loss [TGK04, TJHA05].
Likewise, a geometric description obscures the underlying loss function, as
in novelty detection [SPST
+
01].
In this section we give an expository yet unifying presentation of many
of  those  loss  functions.  Many  of  them  are  well  known,  while  others,  such
as  multivariate  ranking,  hazard  regression,  or  Poisson  regression  are  not
commonly used in machine learning. Tables A3.1 and A3.1 contain a choice
subset of simple scalar and vectorial losses. Our aim is to put the multitude
of  loss  functions  in  an  unified  framework,  and  to  show  how  these  losses
and  their  (sub)gradients  can  be  computed  efficiently  for  use  in  our  solver
framework.
Note that not all losses, while convex, are continuously differentiable. In
this  situation  we  giveasubgradient.  While  this  may  not  be  optimal,  the
convergence rates of our algorithm do not depend on which element of the
subdifferential we provide: in all cases the first order Taylor approximation
is a lower bound which is tight at the point of expansion.
In this setion, with little abuse of notation,v
i
is understood as thei-th
component of vectorvwhenvis clearly not an element of a sequence or a
set.
A3.1.1  Scalar Loss Functions
It is well known [Wah97] that the convex optimization problem
min
ξ
ξsubject toy〈w,x〉≥1−ξandξ≥0(3.1)
203

2043  Loss Functions
Scalar loss functions and their derivatives, depending on
f
:=
〈
w,x
〉
, and
y
.
Loss
 ̄
l
(
f,y
)
Derivative
 ̄
l
′
(
f,y
)
Hinge [BM92]
max(0
,
1
−
yf
)
0 if
yf
≥
1 and
−
y
otherwise
Squared Hinge [KD05]
12
max(0
,
1
−
yf
)
2
0 if
yf
≥
1 and
f
−
y
otherwise
Exponential [CDLS99]
exp(
−
yf
)
−
y
exp(
−
yf
)
Logistic [CSS00]
log(1 + exp(
−
yf
))
−
y/
(1 + exp(
−
yf
))
Novelty [SPST
+
01]
max(0
,ρ
−
f
)
0 if
f
≥
ρ
and
−
1 otherwise
Least mean squares [Wil98]
12
(
f
−
y
)
2
f
−
y
Least absolute deviation
|
f
−
y
|
sign(
f
−
y
)
Quantile regression [Koe05]
max(
τ
(
f
−
y
)
,
(1
−
τ
)(
y
−
f
))
τ
if
f > y
and
τ
−
1 otherwise

-insensitive [VGS97]
max(0
,
|
f
−
y
|−

)
0 if
|
f
−
y
|≤

, else sign(
f
−
y
)
Huber’s robust loss [MSR
+
97]
1
2
(
f
−
y
)
2
if
|
f
−
y
|≤
1, else
|
f
−
y
|−
1
2
f
−
y
if
|
f
−
y
|≤
1, else sign(
f
−
y
)
Poisson regression [Cre93]
exp(
f
)
−
yf
exp(
f
)
−
y
Vectorial loss functions and their derivatives, depending on the vector
f
:=
Wx
and on
y
.
Loss
Derivative
Soft-Margin Multiclass [TGK04]    max
y
′
(
f
y
′
−
f
y
+ ∆(
y,y
′
))
e
y
∗
−
e
y
[CS03]
where
y
∗
is the argmax of the loss
Scaled Soft-Margin Multiclass
max
y
′
Γ(
y,y
′
)(
f
y
′
−
f
y
+ ∆(
y,y
′
))
Γ(
y,y
′
)(
e
y
∗
−
e
y
)
[TJHA05]
where
y
∗
is the argmax of the loss
Softmax Multiclass [CDLS99]
log
∑
y
′
exp(
f
y
′
)
−
f
y
[
∑
y
′
e
y
′
exp(
f
′
y
)
]
/
∑
y
′
exp(
f
′
y
)
−
e
y
Multivariate Regression
12
(
f
−
y
)
>
M
(
f
−
y
) where
M

0
M
(
f
−
y
)

A3.1  Loss Functions205
takes on the value max(0,1−y〈w,x〉). The latter is a convex function in
wandx.  Likewise,  we  may  rewrite  the-insensitive  loss,  Huber’s  robust
loss, the quantile regression loss, and the novelty detection loss in terms of
loss functions rather than a constrained optimization problem. In all cases,
〈w,x〉will play a key role insofar as the loss is convex in terms of thescalar
quantity〈w,x〉.  A  large  number  of  loss  functions  fall  into  this  category,
as  described  in  Table  A3.1.  Note  that  not  all  functions  of  this  type  are
continuously differentiable. In this case we adopt the convention that
∂
x
max(f(x),g(x)) =
{
∂
x
f(x)iff(x)≥g(x)
∂
x
g(x)otherwise.
(3.2)
Since we are only interested in obtaining an arbitrary element of the subd-
ifferential this convention is consistent with our requirements.
Let us discuss the issue of efficient computation. For all scalar losses we
may writel(x,y,w) =
 ̄
l(〈w,x〉,y), as described in Table A3.1. In this case a
simple application of the chain rule yields that∂
w
l(x,y,w) =
 ̄
l
′
(〈w,x〉,y)·x.
For instance, for squared loss we have
 ̄
l(〈w,x〉,y) =
1
2
(〈w,x〉−y)
2
and
 ̄
l
′
(〈w,x〉,y) =〈w,x〉−y.
Consequently, the derivative of the empirical risk term is given by
∂
w
R
emp
(w) =
1
m
m
∑
i=1
 ̄
l
′
(〈w,x
i
〉,y
i
)·x
i
.(3.3)
This  means  that  if  we  want  to  computeland∂
w
lon  a  large  number  of
observationsx
i
,  represented  as  matrixX,  we  can  make  use  of  fast  linear
algebra routines to pre-compute the vectors
f=Xwandg
>
Xwhereg
i
=
 ̄
l
′
(f
i
,y
i
).(3.4)
This is possible for any of the loss functions listed in Table A3.1, and many
other similar losses. The advantage of this unified representation is that im-
plementation  of  each  individual  loss  can  be  done  in  very  little  time.  The
computational infrastructure for computingXwandg
>
Xis shared. Eval-
uating
 ̄
l(f
i
,y
i
)  and
 ̄
l
′
(f
i
,y
i
)  for  allican  be  done  inO(m)  time  and  it  is
not time-critical in comparison to the remaining operations. Algorithm 3.1
describes the details.
An important but often neglected issue is worth mentioning. Computingf
requires us torightmultiply the matrixXwith the vectorwwhile computing
grequires theleftmultiplication ofXwith the vectorg
>
. IfXis stored in a
row major format thenXwcan be computed rather efficiently whileg
>
Xis

2063  Loss Functions
Algorithm 3.1ScalarLoss(w,X,y)
1:input:Weight vectorw, feature matrixX, and labelsy
2:Computef=Xw
3:Computer=
∑
i
 ̄
l(f
i
,y
i
) andg=
 ̄
l
′
(f,y)
4:g←g
>
X
5:returnRiskrand gradientg
expensive. This is particularly true ifXcannot fit in main memory. Converse
is the case whenXis stored in column major format. Similar problems are
encountered whenXis a sparse matrix and stored in either compressed row
format or in compressed column format.
A3.1.2  Structured Loss
In recent years structured estimation has gained substantial popularity in
machine learning [TJHA05, TGK04, BHS
+
07]. At its core it relies on two
types of convex loss functions: logistic loss:
l(x,y,w) = log
∑
y
′
∈Y
exp
(〈
w,φ(x,y
′
)
〉)
−〈w,φ(x,y)〉,(3.5)
and soft-margin loss:
l(x,y,w) = max
y
′
∈Y
Γ(y,y
′
)
〈
w,φ(x,y
′
)−φ(x,y)
〉
+ ∆(y,y
′
).(3.6)
Hereφ(x,y) is ajointfeature map, ∆(y,y
′
)≥0 describes the cost of mis-
classifyingybyy
′
, and Γ(y,y
′
)≥0 is a scaling term which indicates by how
much the large margin property should be enforced. For instance, [TGK04]
choose Γ(y,y
′
) = 1. On the other hand [TJHA05] suggest Γ(y,y
′
) = ∆(y,y
′
),
which reportedly yields better performance. Finally, [McA07] recently sug-
gested generic functions Γ(y,y
′
).
The logistic loss can also be interpreted as the negative log-likelihood of
a conditional exponential family model:
p(y|x;w) := exp(〈w,φ(x,y)〉−g(w|x)),(3.7)
where the normalizing constantg(w|x), often called the log-partition func-
tion, reads
g(w|x) := log
∑
y
′
∈Y
exp
(〈
w,φ(x,y
′
)
〉)
.(3.8)

A3.1  Loss Functions207
As a consequence of the Hammersley-Clifford theorem [Jor08] every expo-
nential family distribution corresponds to a undirected graphical model. In
our case this implies that the labelsyfactorize according to an undirected
graphical model. A large number of problems have been addressed by this
setting, amongst them named entity tagging [LMP01], sequence alignment
[TJHA05], segmentation [RSS
+
07] and path planning [RBZ06]. It is clearly
impossible to give examples of all settings in this section, nor would a brief
summary do this field any justice. We therefore refer the reader to the edited
volume [BHS
+
07] and the references therein.
If the underlying graphical model is tractable then efficient inference al-
gorithms based on dynamic programming can be used to compute (3.5) and
(3.6). We discuss intractable graphical models in Section A3.1.2.1, and now
turn our attention to the derivatives of the above structured losses.
When it comes to computing derivatives of the logistic loss, (3.5), we have
∂
w
l(x,y,w) =
∑
y
′
φ(x,y
′
) exp〈w,φ(x,y
′
)〉
∑
y
′
exp〈w,φ(x,y
′
)〉
−φ(x,y)(3.9)
=E
y
′
∼p(y
′
|x)
[
φ(x,y
′
)
]
−φ(x,y).(3.10)
wherep(y|x) is the exponential family model (3.7). In the case of  (3.6) we
denote by  ̄y(x) the argmax of the RHS, that is
 ̄y(x) := argmax
y
′
Γ(y,y
′
)
〈
w,φ(x,y
′
)−φ(x,y)
〉
+ ∆(y,y
′
).(3.11)
This allows us to compute the derivative ofl(x,y,w) as
∂
w
l(x,y,w) = Γ(y, ̄y(x)) [φ(x, ̄y(x))−φ(x,y)].(3.12)
In the case where the loss is maximized for more than one distinct value  ̄y(x)
we may average over the individual values, since any convex combination of
such terms lies in the subdifferential.
Note  that  (3.6)  majorizes  ∆(y,y
∗
),  wherey
∗
:=  argmax
y
′
〈w,φ(x,y
′
)〉
[TJHA05]. This can be seen via the following series of inequalities:
∆(y,y
∗
)≤Γ(y,y
∗
)〈w,φ(x,y
∗
)−φ(x,y)〉+ ∆(y,y
∗
)≤l(x,y,w).
The first inequality follows because Γ(y,y
∗
)≥0 andy
∗
maximizes〈w,φ(x,y
′
)〉
thus implying that Γ(y,y
∗
)〈w,φ(x,y
∗
)−φ(x,y)〉 ≥0. The second inequal-
ity follows by definition of the loss.
We conclude this section with a simple lemma which is at the heart of
several derivations of [Joa05]. While the proof in the original paper is far
from trivial, it is straightforward in our setting:

2083  Loss Functions
Lemma 3.1Denote byδ(y,y
′
)a loss and letφ(x
i
,y
i
)be a feature map for
observations(x
i
,y
i
)with1≤i≤m.  Moreover,  denote  byX,Ythe  set  of
allmpatterns and labels respectively. Finally let
Φ(X,Y) :=
m
∑
i=1
φ(x
i
,y
i
)and∆(Y,Y
′
) :=
m
∑
i=1
δ(y
i
,y
′
i
).(3.13)
Then the following two losses are equivalent:
m
∑
i=1
max
y
′
〈
w,φ(x
i
,y
′
)−φ(x
i
,y
i
)
〉
+δ(y
i
,y
′
)andmax
Y
′
〈
w,Φ(X,Y
′
)−Φ(X,Y)
〉
+ ∆(Y,Y
′
).
This is immediately obvious, since both feature map and loss decompose,
which allows us to perform maximization overY
′
by maximizing each of its
mcomponents. In doing so, we showed that aggregating all data and labels
into  a  single  feature  map  and  loss  yields  results  identical  to  minimizing
the sum over all individual losses. This holds, in particular, for the sample
error loss of [Joa05]. Also note that this equivalence doesnothold whenever
Γ(y,y
′
) is not constant.
A3.1.2.1  Intractable Models
We now discuss cases where computingl(x,y,w) itself is too expensive. For
instance, for intractable graphical models, the computation of
∑
y
exp〈w,φ(x,y)〉
cannot be computed efficiently. [WJ03] propose the use of a convex majoriza-
tion of the log-partition function in those cases. In our setting this means
that instead of dealing with
l(x,y,w) =g(w|x)−〈w,φ(x,y)〉whereg(w|x) := log
∑
y
exp〈w,φ(x,y)〉
(3.14)
one uses a more easily computable convex upper bound ongvia
sup
μ∈MARG(x)
〈w,μ〉+H
Gauss
(μ|x).(3.15)
Here  MARG(x)  is  an  outer  bound  on  the  conditional  marginal  polytope
associated with the mapφ(x,y). Moreover,H
Gauss
(μ|x) is an upper bound
on  the  entropy  by  using  a  Gaussian  with  identical  variance.  More  refined
tree decompositions exist, too. The key benefit of our approach is that the
solutionμof the optimization problem (3.15) can immediately be used as a
gradient of the upper bound. This is computationally rather efficient.

A3.1  Loss Functions209
Likewise note that [TGK04] use relaxations when solving structured esti-
mation problems of the form
l(x,y,w) = max
y
′
Γ(y,y
′
)
〈
w,φ(x,y
′
)−φ(x,y)
〉
+ ∆(y,y
′
),(3.16)
by enlarging the domain of maximization with respect toy
′
. For instance,
instead of an integer programming problem we might relax the setting to
a linear program which is much cheaper to solve. This, again, provides an
upper bound on the original loss function.
In summary, we have demonstrated that convex relaxation strategies are
well applicable for bundle methods. In fact, the results of the corresponding
optimization procedures can be used directly for further optimization steps.
A3.1.3  Scalar Multivariate Performance Scores
We now discuss a series of structured loss functions and how they can be
implemented efficiently. For the sake of completeness, we give a concise rep-
resentation of previous work on multivariate performance scores and ranking
methods. All these loss functions rely on having access to〈w,x〉, which can
be computed efficiently by using the same operations as in Section A3.1.1.
A3.1.3.1  ROC Score
Denote byf=Xwthe vector of function values on the training set. It is
well known that the area under the ROC curve is given by
AUC(x,y,w) =
1
m
+
m
−
∑
y
i
<y
j
I(〈w,x
i
〉<〈w,x
j
〉),(3.17)
wherem
+
andm
−
are the numbers of positive and negative observations
respectively, andI(·) is indicator function. Directly optimizing the cost 1−
AUC(x,y,w) is difficult as it is not continuous inw. By using max(0,1 +
〈w,x
i
−x
j
〉) as the surrogate loss function for all pairs (i,j) for whichy
i
< y
j
we have the following convex multivariate empirical risk
R
emp
(w) =
1
m
+
m
−
∑
y
i
<y
j
max(0,1 +〈w,x
i
−x
j
〉) =
1
m
+
m
−
∑
y
i
<y
j
max(0,1 +f
i
−f
j
).
(3.18)
Obviously, we could computeR
emp
(w) and its derivative by anO(m
2
) op-
eration. However [Joa05] showed that both can be computed inO(mlogm)
time using a sorting operation, which we now describe.
Denote byc=f−
1
2
yan auxiliary variable and letiandjbe indices such

2103  Loss Functions
Algorithm 3.2ROCScore(X,y,w)
1:input:Feature matrixX, labelsy, and weight vectorw
2:initialization:s
−
=m
−
ands
+
= 0 andl=0
m
andc=Xw−
1
2
y
3:π←{1,...,m}sorted in ascending order ofc
4:fori= 1tomdo
5:ify
π
i
=−1then
6:l
π
i
←s
+
ands
−
←s
−
−1
7:else
8:l
π
i
←−s
−
ands
+
←s
+
+ 1
9:end if
10:end for
11:Rescalel←l/(m
+
m
−
) and computer=〈l,c〉andg=l
>
X.
12:returnRiskrand subgradientg
thaty
i
=−1 andy
j
= 1. It follows thatc
i
−c
j
= 1 +f
i
−f
j
. The efficient
algorithm is due to the observation that there are at mostmdistinct terms
c
k
, k= 1,...,m, each with different frequencyl
k
and sign, appear in (3.18).
These frequenciesl
k
can be determined by first sortingcin ascending order
then  scanning  through  the  labels  according  to  the  sorted  order  ofcand
keeping running statistics such as the numbers
−
of negative labels yet to
encounter, and the numbers
+
of positive labels encountered. When visiting
y
k
, we knowc
k
should appearss
+
(ors
−
) times with positive (or negative)
sign in (3.18) ify
k
=−1 (ory
k
= 1). Algorithm 3.2 spells out explicitly how
to computeR
emp
(w) and its subgradient.
A3.1.3.2  Ordinal Regression
Essentially  the  same  preference  relationships  need  to  hold  for  ordinal  re-
gression. The only difference is thaty
i
need not take on binary values any
more. Instead, we may have an arbitrary number of different valuesy
i
(e.g.,
1 corresponding to ’strong reject’ up to 10 corresponding to ’strong accept’,
when it comes to ranking papers for a conference). That is, we now have
y
i
∈{1,...,n}rather thany
i
∈{±1}. Our goal is to find somewsuch that
〈w,x
i
−x
j
〉<0 whenevery
i
< y
j
. Whenever this relationship is not satis-
fied, we incur a costC(y
i
,y
j
) for preferringx
i
tox
j
. For examples,C(y
i
,y
j
)
could be constanti.e.,C(y
i
,y
j
) = 1 [Joa06] or lineari.e.,C(y
i
,y
j
) =y
j
−y
i
.
Denote bym
i
the number ofx
j
for whichy
j
=i. In this case, there are
 ̄
M=m
2
−
∑
n
i=1
m
2
i
pairs (y
i
,y
j
) for whichy
i
6=y
j
; this implies that there
areM=
 ̄
M/2  pairs  (y
i
,y
j
)  such  thaty
i
< y
j
.  Normalizing  by  the  total

A3.1  Loss Functions211
number of comparisons we may write the overall cost of the estimator as
1
M
∑
y
i
<y
j
C(y
i
,y
j
)I(〈w,x
i
〉>〈w,x
j
〉) whereM=
1
2
[
m
2
−
n
∑
i
m
2
i
]
.(3.19)
Using the same convex majorization as above when we were maximizing the
ROC score, we obtain an empirical risk of the form
R
emp
(w) =
1
M
∑
y
i
<y
j
C(y
i
,y
j
) max(0,1 +〈w,x
i
−x
j
〉)(3.20)
Now the goal is to find an efficient algorithm for obtaining the number of
times when the individual losses are nonzero such as to compute both the
value and the gradient ofR
emp
(w). The complication arises from the fact
that observationsx
i
with labely
i
may appear in either side of the inequality
depending on whethery
j
< y
i
ory
j
> y
i
. This problem can be solved as
follows: sortf=Xwin ascending order and traverse it while keeping track
of how many items with a lower valuey
j
are no more than 1 apart in terms
of their value off
i
. This way we may compute the count statistics efficiently.
Algorithm 3.3 describes the details, generalizing the results of [Joa06]. Again,
its runtime isO(mlogm), thus allowing for efficient computation.
A3.1.3.3  Preference Relations
In general, our loss may be described by means of a set of preference relations
jifor arbitrary pairs (i,j)∈ {1,...m}
2
associated with a costC(i,j)
which is incurred wheneveriis ranked abovej. This set of preferences may
or may not form a partial or a total order on the domain of all observations.
In these cases efficient computations along the lines of Algorithm 3.3 exist.
In general, this is not the case and we need to rely on the fact that the set
Pcontaining all preferences is sufficiently small that it can be enumerated
efficiently. The risk is then given by
1
|P|
∑
(i,j)∈P
C(i,j)I(〈w,x
i
〉>〈w,x
j
〉)(3.21)

2123  Loss Functions
Algorithm 3.3OrdinalRegression(X,y,w,C)
1:input:Feature matrixX, labelsy, weight vectorw, and score matrixC
2:initialization:l=0
n
andu
i
=m
i
∀i∈[n] andr= 0 andg=0
m
3:Computef=Xwand setc= [f−
1
2
,f+
1
2
]∈R
2m
(concatenate the
vectors)
4:ComputeM= (m
2
−
∑
n
i=1
m
2
i
)/2
5:RescaleC←C/M
6:π←{1,...,2m}sorted in ascending order ofc
7:fori= 1to2mdo
8:j=π
i
modm
9:ifπ
i
≤mthen
10:fork= 1toy
j
−1do
11:r←r−C(k,y
j
)u
k
c
j
12:g
j
←g
j
−C(k,y
j
)u
k
13:end for
14:l
y
j
←l
y
j
+ 1
15:else
16:fork=y
j
+ 1tondo
17:r←r+C(y
j
,k)l
k
c
j+m
18:g
j
←g
j
+C(y
j
,k)l
k
19:end for
20:u
y
j
←u
y
j
−1
21:end if
22:end for
23:g←g
>
X
24:return:Riskrand subgradientg
Again, the same majorization argument as before allows us to write a convex
upper bound
R
emp
(w) =
1
|P|
∑
(i,j)∈P
C(i,j) max (0,1 +〈w,x
i
〉−〈w,x
j
〉)  (3.22)
where∂
w
R
emp
(w) =
1
|P|
∑
(i,j)∈P
C(i,j)
{
0if〈w,x
j
−x
i
〉≥1
x
i
−x
j
otherwise
(3.23)
The implementation is straightforward, as given in Algorithm 3.4.

A3.1  Loss Functions213
Algorithm 3.4Preference(X,w,C,P)
1:input:Feature matrixX, weight vectorw, score matrixC, and prefer-
ence setP
2:initialization:r= 0 andg=0
m
3:Computef=Xw
4:while(i,j)∈Pdo
5:iff
j
−f
i
<1then
6:r←r+C(i,j)(1 +f
i
−f
j
)
7:g
i
←g
i
+C(i,j) andg
j
←g
j
−C(i,j)
8:end if
9:end while
10:g←g
>
X
11:returnRiskrand subgradientg
A3.1.3.4  Ranking
In webpage and document ranking we are often in a situation similar to that
described in Section A3.1.3.2, however with the difference that we do not
only care about objectsx
i
being ranked according to scoresy
i
but moreover
that different degrees of importance are placed on different documents.
The information retrieval literature is full with a large number of differ-
ent scoring functions. Examples are criteria such asNormalized Discounted
Cumulative Gain (NDCG),Mean Reciprocal Rank (MRR),Precision@n, or
Expected Rank Utility (ERU). They are used to address the issue of evaluat-
ing rankers, search engines or recommender sytems [Voo01, JK02, BHK98,
BH04].  For  instance,  in  webpage  ranking  only  the  firstkretrieved  docu-
ments that matter, since users are unlikely to look beyond the firstk, say
10, retrieved webpages in an internet search. [LS07] show that these scores
can be optimized directly by minimizing the following loss:
l(X,y,w) = max
π
∑
i
c
i
〈
w,x
π(i)
−x
i
〉
+〈a−a(π),b(y)〉.(3.24)
Herec
i
is a monotonically decreasing sequence, the documents are assumed
to  be  arranged  in  order  of  decreasing  relevance,πis  a  permutation,  the
vectorsaandb(y) depend on the choice of a particular ranking measure, and
a(π) denotes the permutation ofaaccording toπ. Pre-computingf=Xw
we may rewrite (3.24) as
l(f,y) = max
π
[
c
>
f(π)−a(π)
>
b(y)
]
−c
>
f+a
>
b(y)(3.25)

2143  Loss Functions
Algorithm 3.5Ranking(X,y,w)
1:input:Feature matrixX, relevancesy, and weight vectorw
2:Compute vectorsaandb(y) according to some ranking measure
3:Computef=Xw
4:Compute elements of matrixC
ij
=c
i
f
j
−b
i
a
j
5:π= LinearAssignment(C)
6:r=c
>
(f(π)−f) + (a−a(π))
>
b
7:g=c(π
−1
)−candg←g
>
X
8:returnRiskrand subgradientg
and consequently the derivative ofl(X,y,w) with respect towis given by
∂
w
l(X,y,w) = (c( ̄π
−1
)−c)
>
Xwhere  ̄π= argmax
π
c
>
f(π)−a(π)
>
b(y).
(3.26)
Hereπ
−1
denotes the inverse permutation, such thatπ◦π
−1
= 1. Finding the
permutation maximizingc
>
f(π)−a(π)
>
b(y) is a linear assignment problem
which can be easily solved by the Hungarian Marriage algorithm, that is,
the Kuhn-Munkres algorithm.
The original papers by [Kuh55] and [Mun57] implied an algorithm with
O(m
3
) cost in the number of terms. Later, [Kar80] suggested an algorithm
with expected quadratic time in the size of the assignment problem (ignor-
ing  log-factors).  Finally,  [OL93]  propose  a  linear  time  algorithm  for  large
problems. Since in our case the number of pages is fairly small (in the order
of 50 to 200per query) the scaling behavior per query is not too important.
We used an existing implementation due to [JV87].
Note also that training sets consist of acollectionof ranking problems,
that  is,  we  have  several  ranking  problems  of  size  50  to  200.  By  means  of
parallelization we are able to distribute the work onto a cluster of worksta-
tions, which is able to overcome the issue of the rather costly computation
per collection of queries. Algorithm 3.5 spells out the steps in detail.
A3.1.3.5  Contingency Table Scores
[Joa05] observed thatF
β
scores and related quantities dependent on a con-
tingency table can also be computed efficiently by means of structured es-
timation.  Such  scores  depend  in  general  on  the  number  of  true  and  false
positives and negatives alike. Algorithm 3.6 shows how a corresponding em-
pirical risk and subgradient can be computed efficiently. As with the pre-
vious  losses,  here  again  we  use  convex  majorization  to  obtain  a  tractable
optimization problem.

A3.1  Loss Functions215
Given a set of labelsyand an estimatey
′
, the numbers of true positives
(T
+
), true negatives (T
−
), false positives (F
+
), and false negatives (F
−
) are
determined according to a contingency table as follows:
y >0y <0
y
′
>0T
+
F
+
y
′
<0F
−
T
−
In the sequel, we denote bym
+
=T
+
+F
−
andm
−
=T
−
+F
+
the numbers
of positives and negative labels iny, respectively. We note thatF
β
score can
be computed based on the contingency table [Joa05] as
F
β
(T
+
,T
−
) =
(1 +β
2
)T
+
T
+
+m
−
−T
−
+β
2
m
+
.(3.27)
If we want to use〈w,x
i
〉to estimate the label of observationx
i
, we may use
the following structured loss to “directly” optimize w.r.t.F
β
score [Joa05]:
l(X,y,w) = max
y
′
[
(y
′
−y)
>
f+ ∆(T
+
,T
−
)
]
,(3.28)
wheref=Xw, ∆(T
+
,T
−
) := 1−F
β
(T
+
,T
−
), and (T
+
,T
−
) is determined
by usingyandy
′
. Since ∆ does not depend on the specific choice of (y,y
′
)
but rather just on which sets they disagree,lcan be maximized as follows:
Enumerating all possiblem
+
m
−
contingency tables in a way such that given
a configuration (T
+
,T
−
),T
+
(T
−
) positive (negative) observationsx
i
with
largest  (lowest)  value  of〈w,x
i
〉are  labeled  as  positive  (negative).  This  is
effectively implemented as a nested loop hence run inO(m
2
) time. Algorithm
3.6 describes the procedure in details.
A3.1.4  Vector Loss Functions
Next we discuss “vector” loss functions,i.e.,functions wherewis best de-
scribed as a matrix (denoted byW) and the loss depends onWx. Here, we
have feature vectorx∈R
d
, labely∈R
k
, and weight matrixW∈R
d×k
. We
also denote feature matrixX∈R
m×d
as a matrix ofmfeature vectorsx
i
,
and stack up the columnsW
i
ofWas a vectorw.
Some of the most relevant cases are multiclass classification using both
the exponential families model and structured estimation, hierarchical mod-
els,i.e.,ontologies,  and  multivariate  regression.  Many  of  those  cases  are
summarized in Table A3.1.

2163  Loss Functions
Algorithm 3.6F
β
(X,y,w)
1:input:Feature matrixX, labelsy, and weight vectorw
2:Computef=Xw
3:π
+
←{i:y
i
= 1}sorted in descending order off
4:π
−
←{i:y
i
=−1}sorted in ascending order off
5:Letp
0
= 0 andp
i
= 2
∑
m
+
k=i
f
π
+
k
, i= 1,...,m
+
6:Letn
0
= 0 andn
i
= 2
∑
m
−
k=i
f
π
−
k
, i= 1,...,m
−
7:y
′
←−yandr←−∞
8:fori= 0tom
+
do
9:forj= 0tom
−
do
10:r
tmp
= ∆(i,j)−p
i
+n
j
11:ifr
tmp
> rthen
12:r←r
tmp
13:T
+
←iandT
−
←j
14:end if
15:end for
16:end for
17:y
′
π
+
i
←1, i= 1,...,T
+
18:y
′
π
−
i
←−1, i= 1,...,T
−
19:g←(y
′
−y)
>
X
20:returnRiskrand subgradientg
A3.1.4.1  Unstructured Setting
The simplest loss is multivariate regression, wherel(x,y,W) =
1
2
(y−x
>
W)
>
M(y−
x
>
W). In this case it is clear that by pre-computingXWsubsequent calcu-
lations of the loss and its gradient are significantly accelerated.
A second class of important losses is given by plain multiclass classification
problems,e.g.,recognizing digits of a postal code or categorizing high-level
document categories. In this case,φ(x,y) is best represented bye
y
⊗x(using
a  linear  model).  Clearly  we  may  view〈w,φ(x,y)〉as  an  operation  which
chooses a column indexed byyfromxW, since all labelsycorrespond to
a different weight vectorW
y
. Formally we set〈w,φ(x,y)〉= [xW]
y
. In this
case, structured estimation losses can be rewritten as
l(x,y,W) = max
y
′
Γ(y,y
′
)
〈
W
y
′
−W
y
,x
〉
+ ∆(y,y
′
)(3.29)
and∂
W
l(x,y,W) = Γ(y,y
∗
)(e
y
∗
−e
y
)⊗x.(3.30)
Here Γ and ∆ are defined as in Section A3.1.2 andy
∗
denotes the value ofy
′

A3.1  Loss Functions217
for which the RHS of (3.29) is maximized. This means that for unstructured
multiclass settings we may simply computexW. Since this needs to be per-
formed for all observationsx
i
we may take advantage of fast linear algebra
routines and computef=XWfor efficiency. Likewise note that comput-
ing the gradient overmobservations is now a matrix-matrix multiplication,
too: denote byGthe matrix of rows of gradients Γ(y
i
,y
∗
i
)(e
y
∗
i
−e
y
i
). Then
∂
W
R
emp
(X,y,W)  =G
>
X.  Note  thatGis  very  sparse  with  at  most  two
nonzero entries per row, which makes the computation ofG
>
Xessentially
as expensive as two matrix vector multiplications. Whenever we have many
classes, this may yield significant computational gains.
Log-likelihood scores of exponential families share similar expansions. We
have
l(x,y,W) = log
∑
y
′
exp
〈
w,φ(x,y
′
)
〉
−〈w,φ(x,y)〉= log
∑
y
′
exp
〈
W
y
′
,x
〉
−〈W
y
,x〉
(3.31)
∂
W
l(x,y,W) =
∑
y
′
(e
y
′
⊗x) exp
〈
W
y
′
,x
〉
∑
y
′
exp
〈
W
y
′
,x
〉
−e
y
⊗x.(3.32)
The  main  difference  to  the  soft-margin  setting  is  that  the  gradients  are
notsparse  in  the  number  of  classes.  This  means  that  the  computation  of
gradients is slightly more costly.
A3.1.4.2  Ontologies
Fig. A3.1.  Two ontologies.Left:a binary hierarchy with internal nodes{1,...,7}
and labels{8,...15}.Right:a generic directed acyclic graph with internal nodes
{1,...,6,12}and labels{7,...,11,13,...,15}. Note that node 5 has two parents,
namely nodes 2 and 3. Moreover, the labels need not be found at the same level of
the tree: nodes 14 and 15 are one level lower than the rest of the nodes.
Assume that the labels we want to estimate can be found to belong to
a directed acyclic graph. For instance, this may be a gene-ontology graph

2183  Loss Functions
[ABB
+
00] a patent hierarchy [CH04], or a genealogy. In these cases we have a
hierarchy of categories to which an elementxmay belong. Figure A3.1 gives
two examples of such directed acyclic graphs (DAG). The first example is
a  binary  tree,  while  the  second  contains  nodes  with  different  numbers  of
children (e.g.,node 4 and 12), nodes at different levels having children (e.g.,
nodes 5 and 12), and nodes which have more than one parent (e.g.,node 5).
It is a well known fundamental property of trees that they have at most as
many internal nodes as they have leaf nodes.
It is now our goal to build a classifier which is able to categorize observa-
tions according to which leaf node they belong to (each leaf node is assigned
a labely). Denote byk+ 1 the number of nodes in the DAG including the
root node. In this case we may design a feature mapφ(y)∈R
k
[CH04] by
associating with every labelythe vector describing the path from the root
node toy, ignoring the root node itself. For instance, for the first DAG in
Figure A3.1 we have
φ(8) = (1,0,1,0,0,0,1,0,0,0,0,0,0,0) andφ(13) = (0,1,0,0,1,0,0,0,0,0,0,1,0,0)
Whenever several paths are admissible, as in the right DAG of Figure A3.1
we average over all possible paths. For example, we have
φ(10) = (0.5,0.5,0,1,0,0,0,0,1,0,0,0,0,0) andφ(15) = (0,1,0,0,1,0,0,0,0,0,0,1,0,0,1).
Also  note  that  the  lengths  of  the  paths  need  not  be  the  same  (e.g.,to
reach 15 it takes a longer path than to reach 13). Likewise, it is natural to
assume that ∆(y,y
′
),i.e.,the cost for mislabelingyasy
′
will depend on the
similarity of the path. In other words, it is likely that the cost for placing
xinto the wrong sub-sub-category is less than getting the main category of
the object wrong.
To  complete  the  setting,  note  that  forφ(x,y)  =φ(y)⊗xthe  cost  of
computing all labels iskinner products, since the value of〈w,φ(x,y)〉for a
particularycan be obtained by the sum of the contributions for the segments
of the path. This means that the values forallterms can be computed by
a simple breadth first traversal through the graph. As before, we may make
use of vectorization in our approach, since we may computexW∈R
k
to
obtain the contributions on all segments of the DAG before performing the
graph traversal. Since we havempatternsx
i
we may vectorize matters by
pre-computingXW.
Also note thatφ(y)−φ(y
′
) is nonzero only for those edges where the paths
foryandy
′
differ. Hence we only change weights on those parts of the graph
where the categorization differs. Algorithm 3.7 describes the subgradient and
loss computation for the soft-margin type of loss function.

A3.1  Loss Functions219
Algorithm 3.7Ontology(X,y,W)
1:input:Feature  matrixX∈R
m×d
,  labelsy,  and  weight  matrixW∈
R
d×k
2:initialization:G=0∈R
m×k
andr= 0
3:Computef=XWand letf
i
=x
i
W
4:fori= 1tomdo
5:LetD
i
be the DAG with edges annotated with the values off
i
6:TraverseD
i
to find nodey
∗
that maximize sum off
i
values on the
path plus ∆(y
i
,y
′
)
7:G
i
=φ(y
∗
)−φ(y
i
)
8:r←r+z
y
∗
−z
y
i
9:end for
10:g=G
>
X
11:returnRiskrand subgradientg
The same reasoning applies to estimation when using an exponential fam-
ilies  model.  The  only  difference  is  that  we  need  to  compute  asoft-max
over  paths  rather  than  exclusively  choosing  the  best  path  over  the  ontol-
ogy.  Again,  a  breadth-first  recursion  suffices:  each  of  the  leavesyof  the
DAG is associated with a probabilityp(y|x). To obtainE
y∼p(y|x)
[φ(y)] all
we need to do is perform a bottom-up traversal of the DAG summing over
all  probability  weights  on  the  path.  Wherever  a  node  has  more  than  one
parent, we distribute the probability weight equally over its parents.



Bibliography
[ABB
+
00]  M.  Ashburner,  C.  A.  Ball,  J.  A.  Blake,  D.  Botstein,  H.  Butler,  J.  M.
Cherry,  A.  P.  Davis,  K.  Dolinski,  S.  S.  Dwight,  J.  T.  Eppig,  M.  A.  Harris,
D. P. Hill, L. Issel-Tarver, A. Kasarskis, S. Lewis, J. C. Matese, J. E. Richard-
son, M. Ringwald, G. M. Rubin, and G. Sherlock,Gene ontology: tool for the
unification of biology. the gene ontology consortium, Nat Genet25(2000), 25–
29.
[AGML90]  S.  F.  Altschul,  W.  Gish,  E.  W.  Myers,  and  D.  J.  Lipman,Basic  local
alignment  search  tool,  Journal of  Molecular  Biology215(1990),  no. 3,  403–
410.
[BBL05]  O. Bousquet, S. Boucheron, and G. Lugosi,Theory of classification: a sur-
vey of recent advances, ESAIM: Probab. Stat.9(2005), 323– 375.
[BCR84]  C. Berg, J. P. R. Christensen, and P. Ressel,Harmonic analysis on semi-
groups, Springer, New York, 1984.
[BDEL03]  S. Ben-David, N. Eiron, and P.M. Long,On the difficulty of approximately
maximizing agreements, J. Comput. System Sci.66(2003), no. 3, 496–514.
[Bel61]  R.  E.  Bellman,Adaptive  control  processes,  Princeton  University  Press,
Princeton, NJ, 1961.
[Bel05]  Alexandre Belloni,Introduction to bundle methods, Tech. report, Operation
Research Center, M.I.T., 2005.
[Ber85]  J.  O.  Berger,Statistical  decision  theory  and  Bayesian  analysis,  Springer,
New York, 1985.
[BH04]  J. Basilico and T. Hofmann,Unifying collaborative and content-based filter-
ing, Proc. Intl. Conf. Machine Learning (New York, NY), ACM Press, 2004,
pp. 65–72.
[BHK98]  J. S. Breese, D. Heckerman, and C. Kardie,Empirical analysis of predictive
algorithms  for  collaborative  filtering,  Proceedings  of  the  14th  Conference  on
Uncertainty in Artificial Intelligence, 1998, pp. 43–52.
[BHS
+
07]  G. Bakir, T. Hofmann, B. Sch ̈olkopf, A. Smola, B. Taskar, and S. V. N.
Vishwanathan,Predicting   structured   data,   MIT   Press,   Cambridge,   Mas-
sachusetts, 2007.
[Bil68]  Patrick  Billingsley,Convergence  of  probability  measures,  John  Wiley  and
Sons, 1968.
[Bis95]  C.  M.  Bishop,Neural  networks  for  pattern  recognition,  Clarendon  Press,
Oxford, 1995.
[BK07]  R. M. Bell and Y. Koren,Lessons from the netflix prize challenge, SIGKDD
Explorations9(2007), no. 2, 75–79.
[BKL06]  A. Beygelzimer, S. Kakade, and J. Langford,Cover trees for nearest neigh-
bor, International Conference on Machine Learning, 2006.
[BL00]  J. M. Borwein and A. S. Lewis,Convex analysis and nonlinear optimization:
Theory  and  examples,  CMS  books  in  Mathematics,  Canadian  Mathematical
Society, 2000.
221

2223  Bibliography
[BM92]  K. P. Bennett and O. L. Mangasarian,Robust linear programming discrimi-
nation of two linearly inseparable sets, Optim. Methods Softw.1(1992), 23–34.
[BNJ03]  D. Blei, A. Ng, and M. Jordan,Latent Dirichlet allocation, Journal of Ma-
chine Learning Research3(2003), 993–1022.
[BT03]  D.P. Bertsekas and J.N. Tsitsiklis,Introduction  to  probability, Athena Sci-
entific, 2003.
[BV04]  S. Boyd and L. Vandenberghe,Convex optimization, Cambridge University
Press, Cambridge, England, 2004.
[CDLS99]  R.  Cowell,  A.  Dawid,  S.  Lauritzen,  and  D.  Spiegelhalter,Probabilistic
networks and expert sytems, Springer, New York, 1999.
[CH04]  Lijuan Cai and T. Hofmann,Hierarchical document categorization with sup-
port vector machines, Proceedings of the Thirteenth ACM conference on Infor-
mation and knowledge management (New York, NY, USA), ACM Press, 2004,
pp. 78–87.
[Cra46]  H. Cram ́er,Mathematical methods of statistics, Princeton University Press,
1946.
[Cre93]  N. A. C. Cressie,Statistics for spatial data, John Wiley and Sons, New York,
1993.
[CS03]  K. Crammer and Y. Singer,Ultraconservative  online  algorithms  for  multi-
class problems, Journal of Machine Learning Research3(2003), 951–991.
[CSS00]  M.  Collins,  R.  E.  Schapire,  and  Y.  Singer,Logistic  regression,  AdaBoost
and  Bregman  distances,  Proc.  13th  Annu.  Conference  on  Comput.  Learning
Theory, Morgan Kaufmann, San Francisco, 2000, pp. 158–169.
[CV95]  Corinna Cortes and V. Vapnik,Support vector networks, Machine Learning
20(1995), no. 3, 273–297.
[DG03]  S. Dasgupta and A. Gupta,An  elementary  proof  of  a  theorem  of  johnson
and lindenstrauss, Random Struct. Algorithms22(2003), no. 1, 60–65.
[DG08]  J. Dean and S. Ghemawat,MapReduce:  simplified  data  processing  on  large
clusters, CACM51(2008), no. 1, 107–113.
[DGL96]  L.  Devroye,  L.  Gy ̈orfi,  and  G.  Lugosi,A  probabilistic  theory  of  pattern
recognition, Applications of mathematics, vol. 31, Springer, New York, 1996.
[Fel71]  W. Feller,An  introduction  to  probability  theory  and  its  applications, 2 ed.,
John Wiley and Sons, New York, 1971.
[FJ95]  A. Frieze and M. Jerrum,An  analysis  of  a  monte  carlo  algorithm  for  esti-
mating the permanent, Combinatorica15(1995), no. 1, 67–83.
[FS99]  Y. Freund and R. E. Schapire,Large margin classification using the percep-
tron algorithm, Machine Learning37(1999), no. 3, 277–296.
[FT94]  L. Fahrmeir and G. Tutz,Multivariate statistical modelling based on gener-
alized linear models, Springer, 1994.
[GIM99]  A. Gionis, P. Indyk, and R. Motwani,Similarity search in high dimensions
via hashing, Proceedings of the 25th VLDB Conference (Edinburgh, Scotland)
(M. P. Atkinson, M. E. Orlowska, P. Valduriez, S. B. Zdonik, and M. L. Brodie,
eds.), Morgan Kaufmann, 1999, pp. 518–529.
[GS04]  T.L. Griffiths and M. Steyvers,Finding scientific topics, Proceedings of the
National Academy of Sciences101(2004), 5228–5235.
[GW92]  P. Groeneboom and J. A. Wellner,Information bounds and nonparametric
maximum likelihood estimation, DMV, vol. 19, Springer, 1992.
[Hal92]  P. Hall,The bootstrap and edgeworth expansions, Springer, New York, 1992.
[Hay98]  S. Haykin,Neural networks : A comprehensive foundation, Macmillan, New
York, 1998, 2nd edition.

Bibliography223
[Heb49]  D. O. Hebb,The organization of behavior, John Wiley and Sons, New York,
1949.
[Hoe63]  W. Hoeffding,Probability inequalities for sums of bounded random variables,
Journal of the American Statistical Association58(1963), 13–30.
[HUL93]  J.B. Hiriart-Urruty and C. Lemar ́echal,Convex analysis and minimization
algorithms, I and II, vol. 305 and 306, Springer-Verlag, 1993.
[IM98]  P. Indyk and R. Motawani,Approximate nearest neighbors: Towards remov-
ing the curse of dimensionality, Proceedings of the 30
th
Symposium on Theory
of Computing, 1998, pp. 604–613.
[JK02]  K. Jarvelin and J. Kekalainen,IR  evaluation  methods  for  retrieving  highly
relevant documents, ACM Special Interest Group in Information Retrieval (SI-
GIR), New York: ACM, 2002, pp. 41–48.
[Joa05]  T.  Joachims,A  support  vector  method  for  multivariate  performance  mea-
sures, Proc. Intl. Conf. Machine Learning (San Francisco, California), Morgan
Kaufmann Publishers, 2005, pp. 377–384.
[Joa06]
,Training linear SVMs in linear time, Proc. ACM Conf. Knowledge
Discovery and Data Mining (KDD), ACM, 2006.
[Jor08]  M. I. Jordan,An  introduction  to  probabilistic  graphical  models, MIT Press,
2008, To Appear.
[JV87]  R. Jonker and A. Volgenant,A shortest augmenting path algorithm for dense
and sparse linear assignment problems, Computing38(1987), 325–340.
[Kar80]  R.M. Karp,An algorithm to solve them×nassignment problem in expected
timeO(mnlogn), Networks10(1980), no. 2, 143–152.
[KD05]  S.  S.  Keerthi  and  D.  DeCoste,A  modified  finite  Newton  method  for  fast
solution of large scale linear SVMs, J. Mach. Learn. Res.6(2005), 341–361.
[Kel60]  J. E. Kelly,The cutting-plane method for solving convex programs, Journal
of the Society for Industrial and Applied Mathematics8(1960), no. 4, 703–712.
[Kiw90]  Krzysztof C. Kiwiel,Proximity  control  in  bundle  methods  for  convex  non-
differentiable minimization, Mathematical Programming46(1990), 105–122.
[KM00]  Paul Komarek and Andrew Moore,A  dynamic  adaptation  of  AD-trees  for
efficient machine learning on large data sets, Proc. Intl. Conf. Machine Learn-
ing, Morgan Kaufmann, San Francisco, CA, 2000, pp. 495–502.
[Koe05]  R. Koenker,Quantile regression, Cambridge University Press, 2005.
[Kuh55]  H.W. Kuhn,The Hungarian method for the assignment problem, Naval Re-
search Logistics Quarterly2(1955), 83–97.
[Lew98]  D. D. Lewis,Naive  (Bayes)  at  forty:  The  independence  assumption  in  in-
formation  retrieval, Proceedings of ECML-98, 10th European Conference on
Machine Learning (Chemnitz, DE) (C. N ́edellec and C. Rouveirol, eds.), no.
1398, Springer Verlag, Heidelberg, DE, 1998, pp. 4–15.
[LK03]  C.  Leslie  and  R.  Kuang,Fast  kernels  for  inexact  string  matching,  Proc.
Annual Conf. Computational Learning Theory, 2003.
[LMP01]  J. D. Lafferty, A. McCallum, and F. Pereira,Conditional  random  fields:
Probabilistic modeling for segmenting and labeling sequence data, Proceedings
of International Conference on Machine Learning (San Francisco, CA), vol. 18,
Morgan Kaufmann, 2001, pp. 282–289.
[LNN95]  Claude Lemar ́echal, Arkadii Nemirovskii, and Yurii Nesterov,New variants
of bundle methods, Mathematical Programming69(1995), 111–147.
[LS07]  Q.  Le  and  A.J.  Smola,Direct  optimization  of  ranking  measures,  J.  Mach.
Learn. Res. (2007), submitted.
[LT92]  Z. Q. Luo and P. Tseng,On  the  convergence  of  coordinate  descent  method

2243  Bibliography
for  convex  differentiable  minimization,  Journal  of  Optimization  Theory  and
Applications72(1992), no. 1, 7–35.
[Lue84]  D. G. Luenberger,Linear and nonlinear programming, second ed., Addison-
Wesley, Reading, May 1984.
[Mar61]  M.E. Maron,Automatic indexing: An experimental inquiry, Journal of the
Association for Computing Machinery8(1961), 404–417.
[McA07]  David  McAllester,Generalization  bounds  and  consistency  for  structured
labeling, Predicting Structured Data (Cambridge, Massachusetts), MIT Press,
2007.
[McD89]  C. McDiarmid,On the method of bounded differences, Survey in Combina-
torics, Cambridge University Press, 1989, pp. 148–188.
[Mit97]  T. M. Mitchell,Machine learning, McGraw-Hill, New York, 1997.
[MN83]  P. McCullagh and J. A. Nelder,Generalized  linear  models, Chapman and
Hall, London, 1983.
[MSR
+
97]  K.-R. M ̈uller, A. J. Smola, G. R ̈atsch, B. Sch ̈olkopf, J. Kohlmorgen, and
V. Vapnik,Predicting time series with support vector machines, Artificial Neu-
ral Networks ICANN’97 (Berlin) (W. Gerstner, A. Germond, M. Hasler, and
J.-D. Nicoud, eds.), Lecture Notes in Comput. Sci., vol. 1327, Springer-Verlag,
1997, pp. 999–1004.
[Mun57]  J.  Munkres,Algorithms  for  the  assignment  and  transportation  problems,
Journal of SIAM5(1957), no. 1, 32–38.
[MYA94]  N. Murata, S. Yoshizawa, and S. Amari,Network information criterion —
determining  the  number  of  hidden  units  for  artificial  neural  network  models,
IEEE Transactions on Neural Networks5(1994), 865–872.
[Nad65]  E. A. Nadaraya,On  nonparametric  estimates  of  density  functions  and  re-
gression curves, Theory of Probability and its Applications10(1965), 186–190.
[NW99]  J.  Nocedal  and  S.  J.  Wright,Numerical  optimization,  Springer  Series  in
Operations Research, Springer, 1999.
[OL93]  J.B. Orlin and Y. Lee,Quickmatch: A very fast algorithm for the assignment
problem, Working Paper 3547-93, Sloan School of Management, Massachusetts
Institute of Technology, Cambridge, MA, March 1993.
[Pap62]  A.  Papoulis,The  fourier  integral  and  its  applications,  McGraw-Hill,  New
York, 1962.
[Pla99]  J. Platt,Fast training of support vector machines using sequential minimal
optimization, Advances in Kernel Methods — Support Vector Learning (Cam-
bridge, MA) (B. Sch ̈olkopf, C. J. C. Burges, and A. J. Smola, eds.), MIT Press,
1999, pp. 185–208.
[PTVF94]  W.  H.  Press,  S.  A.  Teukolsky,  W.  T.  Vetterling,  and  B.  P.  Flannery,
Numerical recipes in c. the art of scientific computation, Cambridge University
Press, Cambridge, UK, 1994.
[Rao73]  C. R. Rao,Linear statistical inference and its applications, John Wiley and
Sons, New York, 1973.
[RBZ06]  N. Ratliff, J. Bagnell, and M. Zinkevich,Maximum margin planning, Inter-
national Conference on Machine Learning, July 2006.
[Ros58]  F. Rosenblatt,The perceptron: A probabilistic model for information storage
and organization in the brain, Psychological Review65(1958), no. 6, 386–408.
[RPB06]  M. Richardson, A. Prakash, and E. Brill,Beyond pagerank: machine learn-
ing  for  static  ranking,  Proceedings  of  the  15th  international  conference  on
World  Wide  Web,  WWW  (L.  Carr,  D.  De  Roure,  A.  Iyengar,  C.A.  Goble,
and M. Dahlin, eds.), ACM, 2006, pp. 707–715.

Bibliography225
[RSS
+
07]  G.  R ̈atsch,  S.  Sonnenburg,  J.  Srinivasan,  H.  Witte,  K.-R.  M ̈uller,  R.  J.
Sommer, and B. Sch ̈olkopf,Improving the Caenorhabditis elegans genome an-
notation using machine learning, PLoS Computational Biology3(2007), no. 2,
e20 doi:10.1371/journal.pcbi.0030020.
[Rud73]  W. Rudin,Functional analysis, McGraw-Hill, New York, 1973.
[Sil86]  B. W. Silverman,Density estimation for statistical and data analysis, Mono-
graphs on statistics and applied probability, Chapman and Hall, London, 1986.
[SPST
+
01]  B.  Sch ̈olkopf,  J.  Platt,  J.  Shawe-Taylor,  A.  J.  Smola,  and  R.  C.
Williamson,Estimating  the  support  of  a  high-dimensional  distribution,  Neu-
ral Comput.13(2001), no. 7, 1443–1471.
[SS02]  B. Sch ̈olkopf and A. Smola,Learning  with  kernels, MIT Press, Cambridge,
MA, 2002.
[SW86]  G.R.  Shorack  and  J.A.  Wellner,Empirical  processes  with  applications  to
statistics, Wiley, New York, 1986.
[SZ92]  Helga Schramm and Jochem Zowe,A version of the bundle idea for minimiz-
ing  a  nonsmooth  function:  Conceptual  idea,  convergence  analysis,  numerical
results, SIAM J. Optimization2(1992), 121–152.
[TGK04]  B.  Taskar,  C.  Guestrin,  and  D.  Koller,Max-margin  Markov  networks,
Advances  in  Neural  Information  Processing  Systems  16  (Cambridge,  MA)
(S. Thrun, L. Saul, and B. Sch ̈olkopf, eds.), MIT Press, 2004, pp. 25–32.
[TJHA05]  I. Tsochantaridis, T. Joachims, T. Hofmann, and Y. Altun,Large margin
methods  for  structured  and  interdependent  output  variables,  J.  Mach.  Learn.
Res.6(2005), 1453–1484.
[Vap82]  V.  Vapnik,Estimation  of  dependences  based  on  empirical  data,  Springer,
Berlin, 1982.
[Vap95]
,The nature of statistical learning theory, Springer, New York, 1995.
[Vap98],Statistical learning theory, John Wiley and Sons, New York, 1998.
[vdG00]  S. van de Geer,Empirical processes in M-estimation, Cambridge University
Press, 2000.
[vdVW96]  A. W. van der Vaart and J. A. Wellner,Weak convergence and empirical
processes, Springer, 1996.
[VGS97]  V. Vapnik, S. Golowich, and A. J. Smola,Support vector method for func-
tion approximation, regression estimation, and signal processing, Advances in
Neural  Information  Processing  Systems  9  (Cambridge,  MA)  (M.  C.  Mozer,
M. I. Jordan, and T. Petsche, eds.), MIT Press, 1997, pp. 281–287.
[Voo01]  E.  Voorhees,Overview  of  the  TRECT  2001  question  answering  track,
TREC, 2001.
[VS04]  S.  V.  N.  Vishwanathan  and  A.  J.  Smola,Fast  kernels  for  string  and
tree  matching,  Kernel  Methods  in  Computational  Biology  (Cambridge,  MA)
(B. Sch ̈olkopf, K. Tsuda, and J. P. Vert, eds.), MIT Press, 2004, pp. 113–130.
[VSV07]  S. V. N. Vishwanathan, A. J. Smola, and R. Vidal,Binet-Cauchy  kernels
on  dynamical  systems  and  its  application  to  the  analysis  of  dynamic  scenes,
International Journal of Computer Vision73(2007), no. 1, 95–119.
[Wah97]  G. Wahba,Support vector machines, reproducing kernel Hilbert spaces and
the randomized GACV, Tech. Report 984, Department of Statistics, University
of Wisconsin, Madison, 1997.
[Wat64]  G. S. Watson,Smooth regression analysis, Sankhya A26(1964), 359–372.
[Wil98]  C. K. I. Williams,Prediction with Gaussian processes: From linear regression
to  linear  prediction  and  beyond, Learning and Inference in Graphical Models
(M. I. Jordan, ed.), Kluwer Academic, 1998, pp. 599–621.

2263  Bibliography
[WJ03]  M.  J.  Wainwright  and  M.  I.  Jordan,Graphical  models,  exponential  fami-
lies, and variational inference, Tech. Report 649, UC Berkeley, Department of
Statistics, September 2003.

## Document Information
- **Source**: PDF Document (234 pages)
- **Category**: lab-material
- **Difficulty**: advanced
- **Relevant Labs**: lab2,lab3,lab4,lab5
- **Topics**: classification, clustering, coordinate system, gee, gis, machine learning, mapping, projection, vector

## AI Assistant Usage
Ask the chatbot:
- "Explain anintroductiontomachinelearning"
- "How does this relate to [specific topic]?"
- "Give me examples from this document"
- "What are the key points about [topic] in this document?"

## Quick References
- classification
- clustering
- coordinate system
- gee
- gis
- machine learning
- mapping
- projection
- vector
