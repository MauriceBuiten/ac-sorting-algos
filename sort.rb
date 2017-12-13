require 'csv'
require File.expand_path('../algorithms/native.rb', __FILE__)

CSV_FILE = File.expand_path('../datasets/ted_main.csv', __FILE__)
COLUMN = 'comments'

data = CSV.read(CSV_FILE, headers: true)

sort(data, COLUMN)

