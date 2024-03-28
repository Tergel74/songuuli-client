export class User {
    _id?: string;
    firstName?: string;
    lastName?: string;
    nationalId?: string;
    email?: string;
    password?: string;
    phone?: string;
    age?: number;
    profilePic?: string;

    constructor({
        _id,
        firstName,
        lastName,
        nationalId,
        email,
        phone,
        password,
        age,
        profilePic,
    }: {
        _id?: string;
        firstName?: string;
        lastName?: string;
        nationalId?: string;
        email?: string;
        phone?: string;
        age?: number;
        password?: string;
        profilePic?: string;
    }) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.nationalId = nationalId;
        this.email = email;
        this.phone = phone;
        this.age = age;
        this.password = password;
        profilePic != null
            ? (this.profilePic = profilePic)
            : (this.profilePic =
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOC9SJyjR7x4e6ar9aEc6UpgmyrSfpZaGzUVu_iRpmwOQTp-GKhoy73iNQFRo28VR3GR8&usqp=CAU");
    }

    // static fromJson(json: { [key: string]: any }): User {
    //     console.log(json["_id"]);
    //     return new User({
    //         id: json["_id"],
    //         firstName: json["firstName"],
    //         lastName: json["lastName"],
    //         nationalId: json["nationalId"],
    //         email: json["email"],
    //         phone: json["phone"],
    //         age: json["age"],
    //         profilePic: json["profilePic"],
    //     });
    // }
}
