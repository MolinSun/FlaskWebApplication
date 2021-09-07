from flask import Flask, request
from flask import Blueprint, render_template

import movie.adapters.repository as repo

from movie.domain.model import Director, Review, Movie


