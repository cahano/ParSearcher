#####################################################################
######## pdf parsing scratch work
######## 6/9/2023
######## Test pdf packages for text, table extraction
#####################################################################


# gen packs
import sys
import os
import pandas as pd
import timeit

# pdf parser
import camelot

# Needed to add this to ensure logger imported succesfully
## something with my file structure
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.append(os.path.dirname(SCRIPT_DIR))

# Logger
from our_logger.parsearch_logger import ParsearchLogger

our_log = ParsearchLogger()


def camelot_to_xlsx(input_path: str,
                    input_filename: str,
                    output_path: str,
                    output_filename: str,
                    page_range: str):
    '''
    Converts pdf tables to pd.df, then to an xlsx output file;
    for each pdf table extracted, a sheet is appended to the xlsx output file

    input_path -> path to be parsed pdf location
    input_filename -> name of to be parsed pdf
    output_path -> path to xlsx output location
    output_filename -> name of output xlsx
    page_range -> str containing one of:
                  single page (e.g. '1'), range of pages (e.g. '2-5'), or all pages (e.g. 'all')
                  for table(s) intended for extraction
    '''
    

    our_log.debug('Extracting tables from %s' % input_filename)

    # Running extraction
    cam_tabs = camelot.read_pdf(os.path.join(input_path,
                                                input_filename),
                                 pages = page_range,
                                 flavor ='stream',
                                 edge_tol = 500)


    # Checking for table extraction(s)
    if len(cam_tabs) == 0:        
        our_log.debug('*** NO tables extracted by camelot! ***')
        return None
    # logging input info
    our_log.debug('camelot succesfully extracted {} table(s) from {}'.format(len(cam_tabs),
                                                                          input_filename))

    # Create a Pandas Excel writer using XlsxWriter as the engine
    cam_writer = pd.ExcelWriter(os.path.join(output_path,
                                             output_filename),
                                engine = 'xlsxwriter')

    # for creating sheet names
    sheet_count = 0
    # Iterating through camelot-extracted tables
    for table in cam_tabs:

        # Storing extracted table
        ext_df = table.df

        # Convert the dataframe to an XlsxWriter Excel object
        ext_df.to_excel(cam_writer,
                        sheet_name = 'Sheet ' + str(sheet_count))

        sheet_count += 1

    # Close the Pandas Excel writer and output the Excel file
    cam_writer.close()


# Starting timer
start_time = timeit.default_timer()

##########################


### NEED TO MAKE DETECTION OF TABLES AUTOMATED
### LOTS OF REGEX

### WILL HAVE TO FIGURE OUT WAYS OF KNOWING WHEN TABULA MISSED AND TABLE AND APPLYING DIFFERENT SETTINGS
#### UNTIL IT IS PROCESSED PROPERLY
#### CHOOSE AN IMPROPERLY EXTRACTED TABLE FOR EXAMPLE WORK TO TEST CAMELOT INPUTS/EXTRACTION METHPDS 


## KEY TERMS - TERMSHEET-LIKE
### TREATING COLUMNAR TERM-DEFS AS A TABLE YIELDS SHOCKINGLY ACCURATE RESULTS
#### Pages 79 - 93
# camelot_to_xlsx(r'',
#                 'JPMMT_2007_ppm.pdf',
#                 r'',
#                 'test_terms.xlsx',
#                 '79-93')


# # ## Strat Tables
# # #### Pages 95 - 119
# # camelot_to_xlsx(r'./test_docs/',
# #                 'JPMMT_2007_ppm.pdf',
# #                 r'./test_docs/',
# #                 'test_strats.xlsx',
# #                 '95-119')



# # Script end time
# end_time = timeit.default_timer()

# print()
# print('~~~~~~~~~ runtime: %f ~~~~~~~~~' % (end_time - start_time))
