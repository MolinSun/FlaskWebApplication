# FlaskWebApplication
## By Molin Sun

### How to deploy the web application on server
* Download Xshell7 
https://www.filecroco.com/download-xshell/
* Open the Xshell7 
* Run the following command to connect the Ubuntu server. ec2-34-243-246-100.eu-west-1.compute.amazonaws.com is the IP of server.
  * ssh ubuntu@ec2-34-243-246-100.eu-west-1.compute.amazonaws.com
* Install the virtual environments and Flak. The following link can tell you how to do this.
  * https://flask.palletsprojects.com/en/2.0.x/installation/ 
* Git the source code to the Xshell
 
                 git clone https://github.com/MolinSun/FlaskWebApplication.git 
* Enter the virtual environment by run the following command

  * . venv/bin/activate
* Go to the directory of source code
* Run the below commond to install extension.
  * pip3 install --upgrade -r requirements.txt
* Run the following command to make the web application run in the background

  * nohup python3 wsgi.py > wsgi.log &2>&1 &
* I have run the web application in the background. You can visit it by the link shown below.
  * http://ec2-34-243-246-100.eu-west-1.compute.amazonaws.com:5000/home 

