// class SendReachReportOperation {

//   async run(data) {
//     const reportSentForCampaign = `report-sent-${data.campaignId}`;
//     console.log(reportSentForCampaign)
//     // sharedStorage.append("m","r")


//     // Compute reach only for users who haven't previously had a report sent for this campaign.
//     // Users who had a report for this campaign triggered by a site other than the current one will
//     // be skipped.
//     if (await this.sharedStorage.get(reportSentForCampaign) === 'yes') {
//       return; // Don't send a report.
//     }

//     // The user agent will send the report to a default endpoint after a delay.
//     privateAggregation.sendHistogramReport({
//       bucket: data.campaignId,
//       value: 128, // A predetermined fixed value; see Private Aggregation API explainer: Scaling values.
//     });

//     await this.sharedStorage.set(reportSentForCampaign, 'yes');
//     let storedData = await  sharedStorage.get('id');
//     console.log(storedData);

//   }
// }
// // (async () => {
// //     try {
// //         let storedData = await  sharedStorage.get('id');

// //         console.log(storedData);
// //     } catch (error) {
// //         console.error("Error fetching data:", error);
// //     }
// // })();

// register('send-reach-report', SendReachReportOperation);


class CreativeSelectionByFrequencyOperation {
  async run(data, urls) {
    console.log("I RUN")
    // // By default, return the default url (0th index).
    // let index = 0;

    // let count = await this.sharedStorage.get(data.campaignId);
    // let pp= await this.sharedStorage.get('id');
    // console.log(pp);

    // count = count ? parseInt(count) : 0;

    // // If under cap, return the desired ad.
    // if (count < 3) {
    //   index = 1;
    //   this.sharedStorage.set(data.campaignId, (count + 1).toString());
    // }
    let storedData = await  this.sharedStorage.get('id');
    return ;
  }
}

register('creative-selection-by-frequency', CreativeSelectionByFrequencyOperation);