HabitDetail

{
    _id: String;
    habitName: String;
    description: String;
    icon: String;
    color: String;

    timeInDate: all | morning | afternoon | night;

    duplicateType: daily | weekly | monthly
    weekdays: [mon, tue, wed, thus, fri, sat, sun];
    timePerWeek: Number;
    dateExpired: Date;

    isEndDate: Boolean;
    endDate: Date;
    
    hasTarget: Boolean;
    amount: Number;
    unit: String;
    isActive: Boolean;

    UserId: String;
}