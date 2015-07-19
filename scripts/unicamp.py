from bs4 import BeautifulSoup

def readFBPost(fpath=""):
    """Extract information from HTML page with a Facebook post"""
    html=open(fpath,"rb")
    soup = BeautifulSoup(html, "lxml")
    return soup


soup=readFBPost("../unicamp/Renato Fabbri - lá-vamos nós. Cada dia um passo.html")


# n participants.
# n likes, n comments, n subcomments for each comment
# like in each comment, comment for each comment
# interaction network (from author of comment to next comment and likes),
# histograms of activity:
######### transactions of each participant
######### degree of each participant
######### strength of each participant
######### in,out degrees and strengths
######### erdos sectos of the interaction networks



