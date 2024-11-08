import json

prefixes = ["item_name", "manufacturer_Name"]

# Load data from an input JSON file
with open("final.json", "r", encoding="utf-8") as file:
    data = json.load(file)

filtered_data = {
    item["key"].lower(): {
        "key": item["key"],
        "original": item["original"],
        "translation": item["translation"]
    }
    for item in data
    if any(item.get("key", "").lower().startswith(prefix.lower()) for prefix in prefixes)
}
# Save the filtered data to a JSON file
with open("hanhua.json", "w", encoding="utf-8") as file:
    json.dump(filtered_data, file, ensure_ascii=False, indent=2)
