import json
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/")
def elden_ring():
    return render_template("elden_ring.html")

@app.route("/wiki")
def wiki():
    return render_template("wikis.html")

@app.route("/games")
def games():
    with open("static/data/games.json", encoding="utf-8") as f:
        library = json.load(f)
    return render_template("games.html", games=library, wikis=GAMES)

GAMES = {
    "elden-ring": {
        "name": "Elden Ring",
        "developer": "FromSoftware",
        "sections": [
            {"title": "Start Here", "links": ["New Player Guide", "Classes", "Walkthrough", "Stats"]},
            {"title": "Database", "links": ["Weapons", "Armor", "Talismans", "Ashes of War", "Shields"]},
            {"title": "Magic", "links": ["Incantations", "Sorceries", "All Spells", "Spirit Ashes "]},
            {"title": "World & Maps", "links": ["Interactice Maps", "Bosses", "Locations", "NPCs"]},
        ],
    },
    "cyberpunk-2077":{"name": "Cyberpunk 2077", "developer": "CDProjekt Red"},
    "red-dead-redemption-2": {"name": "Red Dead Redemption 2", "developer": "Rockstar Games"},
}

@app.route("/wiki/<game>")
def game_wiki(game):
    info = GAMES[game]
    return render_template("game_wiki.html", game=info)

if __name__ == "__main__":
    app.run(debug=True)
    

    