gcloud compute networks create privatenet2 --subnet-mode=custom
gcloud compute networks subnets create privatesubnet-us --network=privatenet2 --region=us-central1 --range=172.16.0.0/24
gcloud compute networks subnets create privatesubnet-eu --network=privatenet2 --region=europe-west1 --range=172.29.0.0/20
gcloud compute networks create managementnet --subnet-mode=custom
gcloud compute networks subnets create management-us --network=managementnet --region=us-central1 --range=10.140.0.0/20
gcloud compute networks create mynetwork --subnet-mode=auto
gcloud compute firewall-rules create privatenet2-allow-tcp  --network privatenet2 --allow tcp,udp,icmp --source-ranges 0.0.0.0/0
gcloud compute firewall-rules create privatenet2-allow --network privatenet2 --allow tcp:22,tcp:3389,icmp 
gcloud compute firewall-rules create mangment-allow  --network managementnet  --allow tcp,udp,icmp --source-ranges 0.0.0.0/0
gcloud compute firewall-rules create mangment-allow-tcp  --network managementnet   --allow tcp:22,tcp:3389,icmp 
gcloud compute firewall-rules create mynetwork-allow  --network mynetwork  --allow tcp,udp,icmp --source-ranges 0.0.0.0/0
gcloud compute firewall-rules create mynetwork-allow-tcp  --network mynetwork   --allow tcp:22,tcp:3389,icmp 
gcloud compute instances create privatenet-us-vm --zone=us-central1-c --machine-type=f1-micro --subnet=privatesubnet-us
gcloud compute instances create mangement-us-vm --zone=us-central1-c  --machine-type=f1-micro --subnet=management-us
gcloud compute instances create mynet-eu-vm --zone=europe-west1-c  --machine-type=f1-micro --subnet=mynetwork 
gcloud compute instances create mynet-us-vm --zone=us-central1-c --machine-type=f1-micro --subnet=mynetwork
gcloud config set project my-project  My First Project