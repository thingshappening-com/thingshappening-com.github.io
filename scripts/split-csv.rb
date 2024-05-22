require 'csv'

# Function to split the name into first name and last name
def split_name(full_name)
  parts = full_name.split(' ', 2)  # Split the name at the first space
  return parts[0], parts.length > 1 ? parts[1] : ''  # Handle cases with no last name
end

# Read the input CSV file
input_file = '/Users/jack.burum/Downloads/leads_through_05_20_2024.csv'
output_file = 'output.csv'

# Open the input file and read headers
headers = CSV.open(input_file, &:readline)

# Adjust headers for output: replace "Name" with "First Name" and "Last Name"
index_of_name = headers.index('Name')
new_headers = headers.dup
new_headers[index_of_name] = 'First Name'
new_headers.insert(index_of_name + 1, 'Last Name')

# Open output file and write updated headers and rows
CSV.open(output_file, 'wb', write_headers: true, headers: new_headers) do |csv_out|
  CSV.foreach(input_file, headers: true) do |row|
    first_name, last_name = split_name(row['Name'])
    # Prepare the new row with the split name
    row_data = row.to_h
    row_data['First Name'] = first_name
    row_data['Last Name'] = last_name
    row_data.delete('Name')

    # Maintain the order of new headers
    csv_out << new_headers.map { |header| row_data[header] }
  end
end

puts "CSV has been processed and output saved to #{output_file}"
