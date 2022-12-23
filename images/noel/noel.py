#Enclence ton général Midi et lance ce Bloc : 

###########
@swim 
def noel(p=0.5, i=0):
    N("<C3@maj>,.,<C3@maj7>,.,<G3@maj>,.,<C3@maj7>,.,<F3@maj7>,.,<C3@maj>,.,<F3@maj7>,.,<C3@maj7>,.,<G2@maj,C3>,.,<C3@maj>,..,<G2@maj,C3>,<C3@maj>,.",
            vel = 75, dur = 3, i=i)
    again(noel, p=3,i=i+1)
Pj >> n(note="[Sol,..,La,Sol,.,Mi,.!5]!2,[Re5,.!3,Re5,.,Si,.!5],[Do5,.!3,Do5,.,Sol,.!5],[[La,.!3,La,.,Do5,..,Si,La,.],[Sol,..,La,Sol,.,Mi,.!5]]!2,[Re5,.!3,Re5,.,Fa5,..,Re5,Si,.],[Do5,.!5,Mi5,.!5],[Do5,.,Sol,.,Mi,.,Sol,..,Fa,Re,.],[Do,.!11]", 
        p="0.5!8",  
        vel = 80)
##############

############## Et si tu veux du rythme (toujours en général Midi)
@swim 
def noelboom(p=0.5, i=0):
    N("42!11,46",chan = 9, i=i)
    N("36,.!2,38,.!2",chan = 9, i=i)
    again(noelboom, p=0.5, i = i+1)

#####Joyeux Noël Raphaël, Merci pour Sardine :) , c'est un "Douce Nuit" pas des plus Algorithmique mais il est là, si tu veux l'upload sur les showdowns pour l'archive tu as mon accord :). 

silence()

