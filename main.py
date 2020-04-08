from flask import Flask, render_template, jsonify
import json
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func

# conn = psycopg2.connect(host="localhost", database="EnergyDB", user="postgres", password="Notker4682")

# engine = db.create_engine('postgresql://postgres:Notker4682@localhost:5432/EnergyDB')
# conn = engine.connect()


engine = create_engine('postgresql://postgres:password@localhost:5432/EnergyDB')
connection = engine.connect()
inspector = inspect(engine)
print(inspector.get_table_names())

residential = engine.execute('SELECT * FROM "Residential_Sector"').fetchall()
commercial = engine.execute('SELECT * FROM "Commercial_Sector"').fetchall()
industrial = engine.execute('SELECT * FROM "Industrial_Sector"').fetchall()
transportation = engine.execute('SELECT * FROM "Transportation_Sector"').fetchall()
total_consumption = engine.execute('SELECT * FROM "Total_Consumption"').fetchall()
state_sources = engine.execute('SELECT * FROM "State_Sources"').fetchall()
us_sources = engine.execute('SELECT * FROM "US_Sources"').fetchall()

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