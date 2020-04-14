from flask import Flask, render_template, jsonify
import json
import pandas as pd
from json import dumps
import sqlalchemy
from sqlalchemy.orm import class_mapper
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func

engine = create_engine('postgresql://postgres:Notkerino342@localhost:5432/EnergyDB')
connection = engine.connect()
inspector = inspect(engine)
print(inspector.get_table_names())

residential1 = pd.read_sql('SELECT * FROM "Residential_Sector"', connection)
commercial1 = pd.read_sql('SELECT * FROM "Commercial_Sector"', connection)
industrial1 = pd.read_sql('SELECT * FROM "Industrial_Sector"', connection)
transportation1 = pd.read_sql('SELECT * FROM "Transportation_Sector"', connection)
total_consumption1 = pd.read_sql('SELECT * FROM "Total_Consumption"', connection)
state_sources1 = pd.read_sql('SELECT * FROM "State_Sources"', connection)
us_sources1 = pd.read_sql('SELECT * FROM "US_Sources"', connection)

residential = residential1.to_dict()
commercial = commercial1.to_dict()
industrial = industrial1.to_dict()
transportation = transportation1.to_dict()
total_consumption = total_consumption1.to_dict()
state_sources = state_sources1.to_dict()
us_sources = us_sources1.to_dict()

# --------------------------------------------------

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html", residential = residential,\
                                         commercial = commercial,\
                                         industrial = industrial,\
                                         transportation = transportation,\
                                         total_consumption = total_consumption,\
                                         state_sources = state_sources,\
                                         us_sources = us_sources)


if __name__ == "__main__":
    app.run(debug=True)
print(json.dumps(us_sources))