"""App entry point."""
import os
import sys
import json

import flask_login
from flask_cors import CORS

from flask import send_from_directory
from flask import request
from flask import url_for
from flask import redirect, session
from flask import Blueprint, render_template as rt
from flask_sqlalchemy import SQLAlchemy

from flask import Flask, Response
from flask import jsonify
from flask_cors import CORS
from movie import create_app
# from movie.domain.model import Director, Review, Movie

from html_similarity import style_similarity, structural_similarity, similarity

app = create_app()
app.secret_key = "ABCabc123"
app.debug = True
CORS(app)



# ---start  database ---

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///campus_data.db"
db = SQLAlchemy(app)

# --- end   database ---
admin_list = ['admin@126.com']

class User(db.Model):
    """ Create user table"""

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True)
    password = db.Column(db.String(80))
    nickname = db.Column(db.String(80))
    school_class = db.Column(db.String(80))
    school_grade = db.Column(db.String(80))

    def __init__(self, username, password):
        self.username = username
        self.password = password


class Blog(db.Model):
    '''
    the table of Building
    '''
    id = db.Column(db.Integer,primary_key = True)
    title = db.Column(db.String(100))
    text = db.Column(db.Text)
    
    def __init__(self,title,text):
        '''
        initialize
        '''
        self.title = title
        self.text = text



class TeacherWork(db.Model):
    '''
    The table of connection maintainmance
    '''
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), unique=True)
    detail = db.Column(db.String(500))
    answer = db.Column(db.String(5000))
    course_id = db.Column(db.Integer)

    def __init__(self, title, detail, answer, course_id):
        self.title = title
        self.detail = detail
        self.answer = answer
        self.course_id = course_id

class StudentWork(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    userid = db.Column(db.Integer)
    answer = db.Column(db.String(5000))
    score =  db.Column(db.DECIMAL(10,2))
    course_id = db.Column(db.Integer)

    def __init__(self, userid, answer,score, course_id):
        self.userid = userid
        self.answer = answer
        self.score = score
        self.course_id = course_id

### -------------start of home


class PageResult:
    
    def __init__(self, data, page=1, number=100):
        self.__dict__ = dict(zip(['data', 'page', 'number'], [data, page, number]))
        self.full_listing = [self.data[i:i+number] for i in range(0, len(self.data), number)]
        self.totalpage = len(data)// number
        print('totalpage=', self.totalpage)


    def __iter__(self):
        if self.page - 1 < len(self.full_listing):
            for i in self.full_listing[self.page-1]:
                yield i
        else:
            return None

    def __repr__(self): #used for page linking
        return "/home/{}".format(self.page+1) #view the next page

@app.route('/home/<int:pagenum>', methods=['GET'])
@app.route('/home', methods=['GET', 'POST'])
def home(pagenum=1):
    print('home '*10)
    blogs = Blog.query.all()
    user = None
    if "userid" in session:
        user = User.query.filter_by(id = session["userid"]).first()
    else:
        print('userid not in session')
    print('in home', user, 'blogs=', len(blogs),'*'*20)
    if request.method == "POST":
        search_list = []
        keyword = request.form['keyword']
        print('keyword=', keyword, '-'*10)
        if keyword is not None:
            for movie in notice_list:
                if movie.director.director_full_name == keyword:
                    search_list.append(movie)

                for actor in movie.actors:
                    if actor.actor_full_name == keyword:
                        search_list.append(movie)
                        break

                for gene in movie.genres:
                    if gene.genre_name == keyword:
                        search_list.append(movie)
                        break
        print('search_list=' ,search_list, '#'*5)
        return rt(
            'home.html',
            listing=PageResult(search_list, pagenum, 2),
            user=user
        )

    return rt(
        'home.html',
        listing=PageResult(blogs, pagenum),
        user=user
        
    )

@app.route('/blogs/create',methods = ['GET', 'POST'])
def create_building():
    '''
    创建课程文章
    '''
    if request.method == 'GET':
        return rt('create_place.html')
    else:
        title = request.form['title']
        text = request.form['text']
        blog = Blog(title = title,text = text)
        db.session.add(blog)
        db.session.commit()
        return redirect('/blogs')

@app.route('/blogs',methods = ['GET'])
def list_building():
    blogs = Blog.query.all()
    return rt('list_places.html',blogs = blogs)


@app.route('/blogs/update/<id>',methods = ['GET', 'POST'])
def update_building(id):
    '''
    更新课程
    '''
    if request.method == 'GET':
        blog = Blog.query.filter_by(id = id).first_or_404()
        return rt('update_building.html',blog = blog)
    else:
        title = request.form['title']
        text = request.form['text']
        
        blog = Blog.query.filter_by(id = id).update({'title':title,'text':text})
        db.session.commit()
        return redirect('/blogs/{id}'.format(id = id))


@app.route('/blogs/<id>',methods = ['GET','DELETE'])
def query_building(id):
    
    if request.method == 'GET':
        
        blog = Blog.query.filter_by(id = id).first_or_404()
        print(id, blog, 'in query_building','@'*20)
        
        return rt('query_building.html',blog = blog)
    else:
        blog = Blog.query.filter_by(id = id).delete()
        db.session.commit()
        return '',204

### -------------end of home





### -------------start of profile

@app.route('/profile',methods = ['GET','DELETE'])
def query_profile():

    id = session["userid"]

    if request.method == 'GET':

        user = User.query.filter_by(id = id).first_or_404()
        print(user.username, user.password, '#'*5)
        return rt('profile.html',user = user)
    else:
        user = User.query.filter_by(id = id).delete()
        db.session.commit()
        return '',204



@app.route('/profiles/update/<id>',methods = ['GET', 'POST'])
def update_profile(id):
    '''
    update Profile
    '''
    if request.method == 'GET':
        user = User.query.filter_by(id = id).first_or_404()
        return rt('update_profile.html',user = user)
    else:
        password = request.form['password']
        nickname = request.form['nickname']
        school_class = request.form['school_class']
        school_grade = request.form['school_grade']
        
        user = User.query.filter_by(id = id).update({'password':password,'nickname':nickname,
            'school_class':school_class, 'school_grade':school_grade})
        db.session.commit()
        return redirect('/profile')




### -------------end of profile


@app.route('/course/<id>',methods = ['GET'])
def course_home(id):
    
    if request.method == 'GET':
        blog = Blog.query.filter_by(id = id).first_or_404()
        teacherWork = TeacherWork.query.filter_by(course_id = id).first()
        print(id, blog, 'in query_building','@'*20)
        return rt('course.html',blog = blog, teacherWork=teacherWork)
    else:
        return '',204


login_manager = flask_login.LoginManager(app)
user_pass = {}


@app.route("/statistics", methods=["GET"])
def relationship():
    # static/data/test_data.json
    filename = os.path.join(app.static_folder, "data.json")
    with open(filename) as test_file:
        d = json.load(test_file)
    print(type(d), "#" * 10, d)
    return d


@login_manager.user_loader
def load_user(email):
    print('$'*30)
    return user_pass.get(email, None)


@app.route("/login", methods=["POST"])
def login():
    email = request.form.get("email")
    password = request.form.get("password")
    try:
        data = User.query.filter_by(username=email, password=password).first()
        print(data, "@" * 10)
        if data is not None:
            print("test login")
            session["logged_in"] = True



            if email in admin_list:
                session["isadmin"] = True
            session["userid"] = data.id

            print("login sucess", "#" * 20, session["logged_in"])

            return redirect(url_for("home", pagenum=1))
        else:
            return "Not Login"
    except Exception as e: 
        print(e)
        return "Not Login"
    return redirect(url_for("home", pagenum=1))


@app.route("/register", methods=["POST"])
def register():
    email = request.form.get("email")
    pw1 = request.form.get("password")
    pw2 = request.form.get("password2")
    if not pw1 == pw2:
        return redirect(url_for("home", pagenum=1))
    if email in user_pass:
        print("already existed user")
        return redirect(url_for("home", pagenum=1))
    print("register", email, pw1)
    new_user = User(username=email, password=pw1)
    db.session.add(new_user)
    db.session.commit()

    return redirect(url_for("home", pagenum=1))


@app.route("/logout")
def logout():
    session["logged_in"] = False
    return redirect(url_for("home", pagenum=1))


reviews = []


@login_manager.unauthorized_handler
def unauthorized_handler():
    return "Unauthorized"


# --------------------------
@app.route("/assignwork", methods=["GET"])
def assignwork():
    return rt("index.html")


@app.route("/teacher_work", methods=["POST"])
def teacher_work():


    detail = request.form.get("detail")
    print('#'*20, detail, '@'*20)
    with open("movie/static/data.js", 'w') as file:
        file.write(detail)

    return redirect(url_for("assignwork"))



@app.route("/file/upload", methods=["POST"])
def upload_part():  
    task = request.form.get("task_id")  
    chunk = request.form.get("chunk", 0) 
    filename = "%s%s" % (task, chunk) 
    print('filename=', filename)
    upload_file = request.files["file"]
    upload_file.save("./upload/%s" % filename)  
    return rt("index.html")


@app.route("/file/merge", methods=["GET"])
def upload_success(): 
  

    target_filename = request.args.get("filename") 
    task = request.args.get("task_id") 
    chunk = 0  
    with open("./upload/%s" % target_filename, "wb") as target_file:  
        while True:
            try:
                filename = "./upload/%s%d" % (task, chunk)
                source_file = open(filename, "rb")  
                target_file.write(source_file.read())  
                source_file.close()
            except IOError as msg:
                break

            chunk += 1
            os.remove(filename)  

    return rt("index.html")


@app.route("/file/list", methods=["GET"])
def file_list():
    files = os.listdir("./upload/")  
    # print(type(files))
    files.remove(".DS_Store")
    # files = map(lambda x: x if isinstance(x, unicode) else x.decode('utf-8'), files)  
    return rt("list.html", files=files)


@app.route("/file/download/<filename>", methods=["GET"])
def file_download(filename):
    def send_chunk():  # 流式读取
        store_path = "./upload/%s" % filename
        print('store_path=', store_path)
        with open(store_path, "rb") as target_file:
            while True:
                chunk = target_file.read(20 * 1024 * 1024)
                if not chunk:
                    break
                yield chunk

    return Response(send_chunk(), content_type="application/octet-stream")


# Custom static data
@app.route('/cdn/<path:filename>')
def custom_static(filename):
    print('#'*20, filename, ' in custom_static',app.root_path)
    return send_from_directory('/home/ubuntu/momoko/BackEnd/upload/', filename)
# --------------------------

@app.route('/movie/<path:filename>')
def custom_static_movie(filename):
    print('#'*20, filename, ' in custom_static',app.root_path)
    return send_from_directory('/home/ubuntu/momoko/BackEnd/movie/', filename)



if __name__ == "__main__":
    db.create_all()

    app.run(host="ec2-34-243-246-100.eu-west-1.compute.amazonaws.com", port=5000, threaded=False)
