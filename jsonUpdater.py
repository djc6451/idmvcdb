#python file for updating the json
import json


inScript = True
while inScript:

    addOrModify = input("Would you like to add entry (a) or modify existing (m): ")



    if addOrModify == "a":
        vehicleID = input("entry ID: ")
        vehicleTitle = input("Enter Entry Title: ")
        enterImages = True
        imagePaths = []
        while enterImages:
            imagePath = input("file path with .jpg extension: ")
            imagePaths.append("images/"+imagePath)
            addMore = input("Another Image? (y/n): ")
            if addMore == "y":
                enterImages = True
            if addMore == "n":
                break
        print(imagePaths)

        vehicleMake = input("Make: ")
        vehicleModel = input("Model: ")
        vehicleYear  = input("Year: ")
        vehicleColor = input("Color: ")
        vehicleLocation = input("Location: ")
        vehiclePlate = input("License Plate: ")
        vehicleNotes = input("Notes: ")
        
        

    new_entry = {
        "id": vehicleID,
        "title": vehicleTitle,
        "images": imagePaths,
        "info": {
            "Make": vehicleMake,
            "Model": vehicleModel,
            "Year": vehicleYear,
            "Color": vehicleColor,
            "Location": vehicleLocation,
            "Plate": vehiclePlate,
            "Notes": vehicleNotes
        }
    }




    #OPEN
    with open("data.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    #ADD
    data.append(new_entry)

    #SAVE
    with open("data.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2)

    print("added Vehicle")


    if addOrModify == "m":
        print("m")

    stay = input("Add or modify another? (y/n): ")

    if stay == "y":
        inScript = True
    else:
        print("finished")
        break