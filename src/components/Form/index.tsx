'use client';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export const BikeForm = () => {
    const [result, setResult] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const form = useForm({
        defaultValues: {
            bikeMake: '',
            bikeColor: '',
            bikeSpeed: 0,
            bikeCost: 0,
            bikeModel: '',
            primaryOffence: '',
            occDate: '',
            occYear: 0,
            occMonth: '',
            occDow: '',
            occDay: 0,
            occDoy: 0,
            occHour: 0,
            reportDate: '',
            reportYear: 0,
            reportMonth: '',
            reportDow: '',
            reportDay: 0,
            reportDoy: 0,
            reportHour: 0,
            division: '',
            locationType: '',
            premisesType: '',
            bikeType: '',
            hood158: 0,
            neighbourhood158: '',
            hood140: 0,
            neighbourhood140: '',
            longWgs84: 0,
            latWgs84: 0,
            xCoord: 0,
            yCoord: 0,
        },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = async (values: any) => {
        const body = {
            PRIMARY_OFFENCE: values.primaryOffence,
            OCC_DATE: values.occDate,
            OCC_YEAR: parseInt(values.occYear),
            OCC_MONTH: values.occMonth,
            OCC_DOW: values.occDow,
            OCC_DAY: parseInt(values.occDay),
            OCC_DOY: parseInt(values.occDoy),
            OCC_HOUR: parseInt(values.occHour),
            REPORT_DATE: values.reportDate,
            REPORT_YEAR: parseInt(values.reportYear),
            REPORT_MONTH: values.reportMonth,
            REPORT_DOW: values.reportDow,
            REPORT_DAY: parseInt(values.reportDay),
            REPORT_DOY: parseInt(values.reportDoy),
            REPORT_HOUR: parseInt(values.reportHour),
            DIVISION: values.division,
            LOCATION_TYPE: values.locationType,
            PREMISES_TYPE: values.premisesType,
            BIKE_MAKE: values.bikeMake,
            BIKE_MODEL: values.bikeModel,
            BIKE_TYPE: values.bikeType,
            BIKE_SPEED: parseFloat(values.bikeSpeed),
            BIKE_COLOUR: values.bikeColor,
            BIKE_COST: parseFloat(values.bikeCost),
            HOOD_158: parseInt(values.hood158),
            NEIGHBOURHOOD_158: values.neighbourhood15z8,
            HOOD_140: parseInt(values.hood140),
            NEIGHBOURHOOD_140: values.neighbourhood140,
            LONG_WGS84: parseFloat(values.longWgs84),
            LAT_WGS84: parseFloat(values.latWgs84),
            x: parseFloat(values.xCoord),
            y: parseFloat(values.yCoord),
        };
        console.log(body);

        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASIC_API_PATH}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'Access-Control-Allow-Origin': '*',
                },
                body: JSON.stringify(body),
            });

            if (response.ok) {
                const data = await response.json();
                setResult(data.prediction);
            }
        } catch (error) {
            console.error('Error during API call:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto">
                <div className="justify-left mx-[10%] my-4 flex flex-wrap gap-x-10 gap-y-5 text-left">
                    <FormField
                        control={form.control}
                        name="bikeMake"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Bike Make</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Bike Color */}
                    <FormField
                        control={form.control}
                        name="bikeColor"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Bike Color</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Bike Speed */}
                    <FormField
                        control={form.control}
                        name="bikeSpeed"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Bike Speed</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Bike Cost */}
                    <FormField
                        control={form.control}
                        name="bikeCost"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Bike Cost</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Bike Model */}
                    <FormField
                        control={form.control}
                        name="bikeModel"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Bike Model</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Primary Offence */}
                    <FormField
                        control={form.control}
                        name="primaryOffence"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Primary Offence</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Occurrence Date */}
                    <FormField
                        control={form.control}
                        name="occDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Occurrence Date</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Occurrence Year */}
                    <FormField
                        control={form.control}
                        name="occYear"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Occurrence Year</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Occurrence Month */}
                    <FormField
                        control={form.control}
                        name="occMonth"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Occurrence Month</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Occurrence Day of the Week */}
                    <FormField
                        control={form.control}
                        name="occDow"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">
                                    Occurrence Day of the Week
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Occurrence Day */}
                    <FormField
                        control={form.control}
                        name="occDay"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Occurrence Day</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Occurrence Day of Year */}
                    <FormField
                        control={form.control}
                        name="occDoy"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Occurrence Day of Year</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Occurrence Hour */}
                    <FormField
                        control={form.control}
                        name="occHour"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Occurrence Hour</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Report Date */}
                    <FormField
                        control={form.control}
                        name="reportDate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Report Date</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Report Year */}
                    <FormField
                        control={form.control}
                        name="reportYear"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Report Year</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Report Month */}
                    <FormField
                        control={form.control}
                        name="reportMonth"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Report Month</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Report Day of the Week */}
                    <FormField
                        control={form.control}
                        name="reportDow"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Report Day of the Week</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Report Day */}
                    <FormField
                        control={form.control}
                        name="reportDay"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Report Day</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Report Day of Year */}
                    <FormField
                        control={form.control}
                        name="reportDoy"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Report Day of Year</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Report Hour */}
                    <FormField
                        control={form.control}
                        name="reportHour"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Report Hour</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Division */}
                    <FormField
                        control={form.control}
                        name="division"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Division</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Location Type */}
                    <FormField
                        control={form.control}
                        name="locationType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Location Type</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Premises Type */}
                    <FormField
                        control={form.control}
                        name="premisesType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Premises Type</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Bike Type */}
                    <FormField
                        control={form.control}
                        name="bikeType"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Bike Type</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Hood158 */}
                    <FormField
                        control={form.control}
                        name="hood158"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Hood158</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Neighbourhood158 */}
                    <FormField
                        control={form.control}
                        name="neighbourhood158"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Neighbourhood158</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Hood140 */}
                    <FormField
                        control={form.control}
                        name="hood140"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Hood140</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Neighbourhood140 */}
                    <FormField
                        control={form.control}
                        name="neighbourhood140"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Neighbourhood140</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="longWgs84"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Longitude (WGS84)</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Latitude (WGS84) */}
                    <FormField
                        control={form.control}
                        name="latWgs84"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Latitude (WGS84)</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* X Coordinate */}
                    <FormField
                        control={form.control}
                        name="xCoord"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">X Coordinate</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Y Coordinate */}
                    <FormField
                        control={form.control}
                        name="yCoord"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-bold">Y Coordinate</FormLabel>
                                <FormControl>
                                    <Input type="number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button
                    type="submit"
                    className="mt-6 w-[20%] rounded-xl bg-blue-600 p-4 text-xl text-white hover:bg-blue-700"
                >
                    Submit Prediction
                </Button>
            </form>
            {loading && <div className="mt-4 text-center">Loading...</div>}

            {result && !loading && (
                <div className="mt-4 text-center">
                    <h3
                        className={`text-xl font-semibold ${
                            result === '[0]'
                                ? 'text-green-500'
                                : result === '[1]'
                                  ? 'text-red-500'
                                  : result === '[2]'
                                    ? 'text-gray-500'
                                    : 'text-black'
                        } `}
                    >
                        Our prediction is that your bicycle is:{' '}
                        {result === '[0]'
                            ? 'Recovered'
                            : result === '[1]'
                              ? 'Stolen'
                              : result === '[2]'
                                ? 'Unknown'
                                : 'Invalid Result'}
                    </h3>
                </div>
            )}
        </Form>
    );
};
