-- Database name should be: giphy_search_favorites

-- Categories table:
CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL
);

-- Default categories. You may change these. 🙂
INSERT INTO "categories"
  ("name")
  VALUES
  ('wild'),
  ('uproarious'),
  ('poignant'),
  ('felicitous'),
  ('whimsical');

-- Favorites table:

-- You'll need a "favorites" table for storing each instance of
-- a Giphy image that has been "favorited."
-- Each favorite image can be assigned one of the existing
-- categories via foreign key. This is a one-to-many relationship:
--    One favorite has one category.
--    One category can be had by many favorites.

  CREATE TABLE "favorites" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR (100) NOT NULL,
  "category_id" INT REFERENCES "categories"
);


-- Added columns to favorites table to save needed gif data to local DB
ALTER TABLE favorites
ADD gif_id VARCHAR(100),
ADD gif_url VARCHAR(250),
ADD gif_title VARCHAR(100);