const About = () => {
    return (
        <div className="container mx-auto border-solid rounded w-full lg:w-5/12">
            <div className="py-4 px-6 rounded-lg">
                <div className="flex space-x-4">
                    <h1 className="font-medium text-2xl flex-1">About 5x5 workout</h1>
                </div>
                <div className="space-y-3 py-3">
                    <p className="pt-3">The StrongLifts 5×5 strength training program consists of two workouts…</p>
                    <p><b>Workout A:</b> Squat, Bench Press, Barbell Row <br/>
                        <b>Workout B:</b> Squat, Overhead Press, Deadlift</p>
                    <p>Do three workouts per week. Never train two days in a row or do two workouts in a day. Wait one day before doing your next workout. This gives your body time to recover, get stronger and build muscle so you can lift heavier next workout. Alternate workout A and B each time you train.</p>
                    <p>Most people train Monday, Wednesday and Friday. This gives you one recovery day between each workout, and two recovery days before your next workout on Monday. What also works is to train Tuesday, Thursday, and Saturday… or Sunday, Tuesday, and Thursday.</p>
                    <p>Start StrongLifts 5×5 by doing workout A. Go home, eat and sleep. Two days later do workout B. Another two days later do workout A. Your first week will look like this if you train Mo/We/Fr</p>
                </div>
            </div>
        </div>
    )
}

export default About;